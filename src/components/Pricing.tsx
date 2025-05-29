"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "Rp0",
      description: "Cocok untuk pemula yang ingin mencoba layanan API.",
      features: [
        "100 request/hari",
        "Akses ke endpoint dasar",
        "Dokumentasi lengkap",
      ],
      cta: "Mulai Gratis",
      highlighted: false,
      whatsappLink: "https://wa.me/62895342022385?text=Halo,%20saya%20ingin%20mulai%20Free%20Plan",
    },
    {
      name: "Pro Plan",
      price: "Rp35.000",
      description: "Untuk pengguna aktif dengan kebutuhan lebih besar.",
      features: [
        "10.000 request/bulan",
        "Endpoint premium",
        "Kustomisasi API",
      ],
      cta: "Upgrade Now",
      highlighted: true,
      whatsappLink: "https://wa.me/62895342022385?text=Halo,%20saya%20ingin%20upgrade%20ke%20Pro%20Plan",
    },
    {
      name: "Enterprise",
      price: "Rp50.000",
      description: "Untuk bisnis dan kebutuhan skala besar.",
      features: [
        "Request tak terbatas",
        "Prioritas dukungan",
        "Kustomisasi API",
      ],
      cta: "Contact Us",
      highlighted: false,
      whatsappLink: "https://wa.me/62895342022385?text=Halo,%20saya%20tertarik%20dengan%20Enterprise%20Plan",
    },
  ];

  return (
    <Container className="py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 shadow-sm ${
              plan.highlighted
                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/10"
                : "border-gray-200 dark:border-gray-700"
            }`}
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-3xl font-bold mt-2">{plan.price}</p>
            <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href={plan.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full mt-6">{plan.cta}</Button>
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
};