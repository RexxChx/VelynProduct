"use client";

import React from "react";
import { Container } from "@/components/Container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { faqdata } from "../Faq/datafq";

export default function HomeFaq() {
  return (
    <Container className="!p-0">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
          Cara Penggunaan
        </h2>
        <div className="space-y-6">
          {faqdata.map((item, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden transition-all duration-300">
                  <Disclosure.Button className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`w-6 h-6 text-green-500 transition-transform duration-300 ${
                        open ? "transform rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-5 pt-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                    {item.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </Container>
  );
}