"use client";

import React from "react";

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
              With over two decades of experience in global logistics, LogiFlow
              has established itself as a pioneer in supply chain innovation. We
              combine cutting-edge technology with human expertise to deliver
              solutions that transform how businesses move goods across the
              world.
            </p>
            <p className="text-cyan-700 text-lg mb-10">
              Our commitment to excellence and continuous improvement has earned
              us the trust of thousands of clients worldwide, from small
              businesses to Fortune 500 companies.
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
          <div>
            <img
              src="/api/placeholder/500/400"
              alt="About Us"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
