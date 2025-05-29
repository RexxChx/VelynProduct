import {
  ShoppingCartIcon,
  TruckIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  StarIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/antar.svg";
import benefitTwoImg from "../../public/img/antarr.svg";

const benefitOne = {
  title: "Kenapa Belanja di Toko Kami?",
  desc: "Kami memberikan pengalaman belanja online terbaik dengan produk berkualitas, harga terjangkau, dan layanan pelanggan yang ramah dan responsif.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Produk Berkualitas Tinggi",
      desc: "Kami hanya menyediakan produk pilihan dengan kualitas terjamin dan review positif dari pelanggan.",
      icon: <StarIcon />,
    },
    {
      title: "Pengiriman Cepat dan Aman",
      desc: "Barang dikirim dengan cepat menggunakan jasa ekspedisi terpercaya dengan tracking realtime.",
      icon: <TruckIcon />,
    },
    {
      title: "Proses Belanja Mudah",
      desc: "Transaksi belanja hanya butuh beberapa klik dengan metode pembayaran lengkap dan aman.",
      icon: <ShoppingCartIcon />,
    },
    {
      title: "Promo Menarik Setiap Hari",
      desc: "Nikmati diskon, cashback, dan voucher belanja eksklusif untuk pelanggan setia.",
      icon: <GiftIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Keuntungan Jadi Pelanggan Kami",
  desc: "Dapatkan lebih dari sekadar produk. Kami hadir memberikan layanan ekstra dan nilai tambah bagi kamu.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Harga Terbaik di Kelasnya",
      desc: "Bandingkan harga kami dengan toko lain, dan kamu akan tahu kenapa kami pilihan utama.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Pembayaran Aman & Fleksibel",
      desc: "Dukung berbagai metode pembayaran termasuk COD, e-wallet, dan transfer bank.",
      icon: <CreditCardIcon />,
    },
    {
      title: "Garansi & Dukungan Pelanggan",
      desc: "Kami hadir 24/7 untuk bantu kamu, plus garansi produk jika terjadi kerusakan.",
      icon: <ShieldCheckIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };