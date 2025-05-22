"use client";

import React from "react";

export default function VisionMission() {
  const items = [
    {
      title: "Our Vision",
      content:
        "To be the world's most trusted logistics partner, connecting businesses across continents through innovative, sustainable, and efficient supply chain solutions that drive global commerce forward.",
    },
    {
      title: "Our Mission",
      content:
        "We empower businesses to reach new markets by providing reliable, technology-driven logistics services that simplify complex supply chains and deliver exceptional value to our clients worldwide.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 rounded-2xl text-center shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>
              <p className="text-lg leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
