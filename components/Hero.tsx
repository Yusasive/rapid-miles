"use client";

import React from "react";
import Image from "next/image";
import HeroImage from "@/public/images/hero.jpg";

export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#f5f9ff] to-white py-[120px] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
              Simplify Your Logistics. Accelerate Your Growth.
            </h1>
            <p className="text-lg text-cyan-700 mb-8 font-normal">
              Advance logistics solutions that connect your business to global
              markets with precision, speed, and reliability. Experience the
              future of delivery management.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-transform transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
              <a
                href="#services"
                onClick={(e) => scrollTo(e, "#services")}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>

          <div>
            <Image
              src={HeroImage}
              width={500}
              height={500}
              alt="Logistics Operations"
              className="w-full rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
