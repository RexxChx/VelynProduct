"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "./DarkSwitch";
import { Disclosure, Transition } from "@headlessui/react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Produk kami", href: "/Product" },
    { name: "Tutorial Penggunaan", href: "/Faq"},
    { name: "Services", href: "/Terms" },
  ];

  return (
    <div className="w-full">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/60 dark:bg-gray-900/60 shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-12 py-4 transition-all">
          <Link href="/">
            <span
              className={`flex items-center space-x-3 text-2xl font-semibold text-green-500 dark:text-green-400 transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <Image
                src="/img/velyns.png"
                alt="Antartika"
                width={45}
                height={45}
                className="rounded-full"
              />
              <span className="tracking-tight">VelynProduct</span>
            </span>
          </Link>

          <div
            className={`gap-3 navitem mr-2 lg:flex ml-auto lg:ml-0 lg:order-2 transition-all duration-500 delay-100 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <ThemeChanger />
            <div className="hidden lg:flex">
              <Link
                href="/product"
                className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-400 transition-all duration-300 hover:scale-105"
              >
                Pesan sekarang
              </Link>
            </div>
          </div>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 dark:text-gray-300 dark:focus:ring-green-600"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      open ? "rotate-90" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Transition
                  show={open}
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-200 ease-in"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="w-full mt-4 lg:hidden space-y-2">
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-600 rounded-md dark:text-gray-300 hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/product"
                      className="block w-full px-6 py-2 mt-3 text-center text-white bg-green-500 rounded-md hover:bg-green-400 transition duration-300"
                    >
                      Pesan sekarang
                    </Link>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <div className="hidden lg:flex lg:items-center">
            <ul className="flex space-x-4 ml-6">
              {navigation.map((menu, index) => (
                <li
                  key={index}
                  className={`transition-all duration-500 ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${150 + index * 100}ms` }}
                >
                  <Link
                    href={menu.href}
                    className="px-4 py-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-green-500 relative group transition-all duration-300"
                  >
                    {menu.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* Spacer div so content doesn't hide behind navbar */}
      <div className="h-20 lg:h-24" />
    </div>
  );
};