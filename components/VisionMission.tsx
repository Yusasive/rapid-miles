"use client";

import React from "react";

export default function VisionMission() {
  const items = [
    {
      title: "Our Vision",
      content:
        "To be the most trusted logistics partner for local businesses, delivering reliable, efficient, and sustainable supply chain solutions that connect businesses and communities, support commerce, and drive regional growth.",
    },
    {
      title: "Our Mission",
      content:
        "At Rapid Miles Logistics, our mission is to deliver with speed, care, and consistency. We are dedicated to helping businesses grow by providing dependable delivery solutions that connect people, products, and places, building lasting partnerships every mile of the way.",
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
