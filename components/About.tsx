"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  const stats = [
    { number: "25K+", label: "Shipments Monthly" },
    { number: "150+", label: "Countries Served" },
    { number: "99.8%", label: "On-Time Delivery" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-20 bg-[#f5f9ff]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Leading the Future of Logistics
            </h2>
            <p className="text-cyan-700 text-lg mb-6">
              At Rapid Miles Logistics, we&apos;re redefining how goods move. As
              a newly launched logistics provider, we bring fresh energy, smart
              technology, and a relentless focus on customer service to every
              shipment. Our team combines modern logistics strategies with
              hands-on expertise to ensure your cargo moves smoothly,
              efficiently, and reliably.
            </p>
            <p className="text-cyan-700 text-lg mb-10">
              We may be new, but our commitment is strong to build lasting
              partnerships, deliver real value, and grow alongside the
              businesses we serve. Welcome to a smarter way to move forward.
              Welcome to Rapid Miles Logistics.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-cyan-700 uppercase tracking-widest mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="p-6">
            <Image
              src="/images/about.png"
              alt="About Us"
              width={500}
              height={500}
              className="w-full rounded-2xl shadow-2xl p-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
