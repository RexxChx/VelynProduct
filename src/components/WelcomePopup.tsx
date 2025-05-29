"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const WelcomePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => setVisible(true), 1000);
    const hideTimeout = setTimeout(() => setVisible(false), 9000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <div className="relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-2xl rounded-3xl w-full max-w-sm p-6 pt-16 text-center space-y-5 backdrop-blur-xl">
            <button
              onClick={() => setVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white transition"
              aria-label="Tutup"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              👋 Halo, Petualang Teknologi!
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Selamat datang di <span className="font-semibold text-green-600 dark:text-green-400">VelynProduct</span>, tempat terbaik untuk menemukam produk berkualitas tinggi dan sesuai kebutuhan Anda!
              <br />
              Temukan produk terbaik kami — cepat, stabil, dan siap mendukung visi digital masa depanmu sesuai Kebutuhan Anda.
            </p>

            <div className="flex justify-center pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisible(false)}
                className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-medium shadow-lg hover:bg-green-700 transition"
              >
                Pesan Sekarang
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;