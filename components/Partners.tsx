"use client";

import React from "react";
import Image from "next/image";

export default function Partners() {
  const partnerLogos = [
    { src: "/images/partner1.jpg", alt: "Partner 1" },
    { src: "/images/partner2.jpg", alt: "Partner 2" },
    { src: "/images/partner3.jpg", alt: "Partner 3" },
    { src: "/images/partner4.jpg", alt: "Partner 4" },
    { src: "/images/partner5.jpg", alt: "Partner 5" },
    { src: "/images/partner6.jpg", alt: "Partner 6" },
  ];

  const scrollingLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-cyan-700">
            We partner with wonderful brands to deliver exceptional logistics
            solutions
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {scrollingLogos.map((logo, idx) => (
              <div
                key={idx}
                className="w-40 mx-2 bg-[#f5f9ff] p-4 rounded-xl text-center flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={100}
                  className="w-full h-20 object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
