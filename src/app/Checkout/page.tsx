"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [orderTime, setOrderTime] = useState("");

  useEffect(() => {
    const storedCart = sessionStorage.getItem("luxurystore-cart");
    if (storedCart) setCart(JSON.parse(storedCart));

    const now = new Date();
    const formattedTime = now.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    setOrderTime(formattedTime);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleWhatsAppPayment = () => {
    const message = encodeURIComponent(
      `Halo, saya ingin melakukan pembayaran untuk pesanan berikut:\n\n${cart
        .map((item) => `- ${item.name}: Rp ${item.price.toLocaleString()}`)
        .join("\n")}\n\nTotal: Rp ${total.toLocaleString()}\n\nTanggal & Waktu Pemesanan: ${orderTime}`
    );
    window.open(`https://wa.me/50496609722?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 space-y-6 transition-all duration-500">
        <h1 className="text-4xl font-extrabold text-center text-green-700 dark:text-green-400 mb-4">Invoice Pembayaran</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Tidak ada produk dalam keranjang.
          </p>
        ) : (
          <>
            <div className="text-sm text-center text-gray-600 dark:text-gray-400 mb-2">
              Tanggal & Waktu Pemesanan: <span className="font-medium">{orderTime}</span>
            </div>

            <ul className="divide-y divide-gray-300 dark:divide-gray-700 rounded-md overflow-hidden">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="py-4 px-2 sm:px-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800"
                >
                  <span className="text-base sm:text-lg">{item.name}</span>
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    Rp {item.price.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between font-bold text-xl border-t border-gray-300 dark:border-gray-700 pt-4">
              <span>Total</span>
              <span className="text-green-700 dark:text-green-400">Rp {total.toLocaleString()}</span>
            </div>

            <button
              onClick={handleWhatsAppPayment}
              className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-2xl font-semibold text-lg shadow-md mt-4"
            >
              Silahkan Melakukan Pembayaran
            </button>
          </>
        )}

        <div className="pt-6 text-center">
          <Link href="/Product" className="text-green-600 dark:text-green-400 hover:underline">
            ← Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </div>
  );
}