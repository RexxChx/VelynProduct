"use client";
import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import {
  XMarkIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export function PopupTOS(): JSX.Element {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [reportCount] = useState(3);
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <Disclosure>
        {({ open, close }) => {
          const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const encoded = encodeURIComponent(
              `Name: ${name}\nMessage: ${message}`
            );
            window.open(`https://wa.me/50496609722?text=${encoded}`, "_blank");

            setName("");
            setMessage("");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            setTimeout(() => close(), 600); // pastikan close tetap dipanggil dari dalam context
          };

          return (
            <>
              {/* Trigger Button */}
              <DisclosureButton
                className="fixed z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg bottom-5 right-5 hover:bg-green-700 transition"
                aria-label="Open Report Form"
              >
                <div className="relative">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  {reportCount > 0 && !open && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
                      {reportCount}
                    </span>
                  )}
                </div>
              </DisclosureButton>

              {/* Background Overlay */}
              <Transition
                show={open}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                  onClick={() => close()}
                />
              </Transition>

              {/* Popup Panel */}
              <Transition
                show={open}
                enter="transition duration-300 ease-out"
                enterFrom="opacity-0 scale-95 translate-y-4"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition duration-200 ease-in"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-4"
              >
                <DisclosurePanel
                  static
                  className="fixed z-50 w-[90%] sm:w-[400px] bottom-24 right-5 sm:bottom-1/2 sm:right-1/2 sm:translate-x-1/2 sm:translate-y-1/2 bg-white dark:bg-zinc-900 border border-green-300 dark:border-zinc-700 shadow-xl rounded-xl p-5 sm:p-6"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-semibold text-green-400 dark:text-green-300">
                      Report Terms Violation
                    </h2>
                    <button
                      type="button"
                      onClick={() => close()}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      aria-label="Close"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Tolong laporkan kepada kami jika ada masalah di dalam
                    pemesanan anda!!
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nama kamu
                      </label>
                      <input
                        type="text"
                        placeholder="Masukan nama mu"
                        className="mt-1 w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm focus:ring-green-400 focus:outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Pesan laporan
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Masukan laporan masalah mu disini..."
                        className="mt-1 w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm focus:ring-green-400 focus:outline-none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white py-2 rounded-md text-sm font-medium hover:bg-green-700 transition"
                    >
                      Laporkan kami
                    </button>
                  </form>
                </DisclosurePanel>
              </Transition>

              {/* Toast Notification */}
              {showToast && (
                <div className="fixed bottom-28 right-5 z-50 bg-green-600 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 animate-bounce-in dark:bg-green-700">
                  <CheckCircleIcon className="w-5 h-5" />
                  <span>Laporan sukses dikirim</span>
                </div>
              )}
            </>
          );
        }}
      </Disclosure>
    </div>
  );
}