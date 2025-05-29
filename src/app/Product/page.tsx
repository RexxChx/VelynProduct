"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/Container";
import { allProducts } from "./dataproduk";
import Carousel from "./caraosel/dataCaraosel";

export default function HomePage() {
  const [cart, setCart] = useState<any[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 3);

  const totalPrice = cart.reduce((sum, p) => sum + p.price, 0);
/**
  const addToCart = (item: any) => {
    setCart([...cart, item]);
    setShowNotif(true);
  };
*/  

const addToCart = (item: any) => {
  const newCart = [...cart, item];
  setCart(newCart);
  sessionStorage.setItem("luxurystore-cart", JSON.stringify(newCart));
  setShowNotif(true);
};

/**
  useEffect(() => {
    if (showNotif) {
      const timer = setTimeout(() => setShowNotif(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showNotif]);
*/

useEffect(() => {
  const storedCart = sessionStorage.getItem("luxurystore-cart");
  if (storedCart) setCart(JSON.parse(storedCart));
   if (showNotif) {
      const timer = setTimeout(() => setShowNotif(false), 2000);
      return () => clearTimeout(timer);
    }
}, [showNotif]);

  const removeFromCart = (index: number) =>
    setCart(cart.filter((_, i) => i !== index));

  return (
   <div className="relative"> 
    <Container>
   <div className="mb-10 -mt-6">   
    <Carousel />  
   </div>

    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 transition-colors duration-300">
      <header className="flex justify-between items-center mb-6">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Cari produk..."
            className="px-4 py-2 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-white focus:outline-none"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowAll(false); // Reset to default view on new search
            }}
          />
          <button onClick={() => setShowPopup(true)} className="relative">
            <FiShoppingCart className="text-3xl text-gray-800 dark:text-white hover:text-green-500 transition" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Produk */}
      <div className="grid gap-8 md:grid-cols-3">
        {displayedProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
            Produk tidak ditemukan.
          </p>
        ) : (
          displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-black border dark:border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="object-cover w-full h-56"
              />
              <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 ${i < Math.floor(product.rating) ? "" : "opacity-30"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    Rp {product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition"
                  >
                    Tambah ke keranjang
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Tombol Lihat Lainnya */}
      {filteredProducts.length > 3 && !showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 rounded-xl bg-green-400 hover:bg-gray-900 text-white dark:bg-green dark:text-black dark:hover:bg-gray-200 transition"
          >
            Lihat Produk Lainnya
          </button>
        </div>
      )}

      {/* Notifikasi Tambah Produk */}
      <AnimatePresence>
        {showNotif && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-[100]"
          >
            Produk berhasil ditambahkan ke keranjang pesanan anda!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup Keranjang */}
      <AnimatePresence>
        {showPopup && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setShowPopup(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-white dark:bg-black border dark:border-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-green-400 dark:text-green">
                    Struk Pesanan Anda
                  </h2>
                  <button onClick={() => setShowPopup(false)}>
                    <FiX className="text-2xl text-gray-500 hover:text-red-500" />
                  </button>
                </div>
                {cart.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">Keranjang kosong.</p>
                ) : (
                  <>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-h-60 overflow-auto">
                      {cart.map((item, index) => (
                        <li
                          key={index}
                          className="py-2 flex justify-between items-center"
                        >
                          <span className="text-gray-700 dark:text-white">
                            {item.name}
                          </span>
                          <div className="flex gap-2 items-center">
                            <span className="font-semibold text-gray-800 dark:text-white">
                              Rp {item.price.toLocaleString()}
                            </span>
                            <button
                              onClick={() => removeFromCart(index)}
                              className="text-red-500 text-xs hover:underline"
                            >
                              Hapus
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t flex justify-between font-bold text-gray-800 dark:text-white">
                      <span>Total</span>
                      <span>Rp {totalPrice.toLocaleString()}</span>
                    </div>
                    <Link
                      href="/Checkout"
                      className="mt-6 block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl"
                    >
                      Checkout
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
    </Container>
   </div> 
  );
}
