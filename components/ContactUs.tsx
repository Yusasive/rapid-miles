"use client";

import React from "react";

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-lg text-gray-600 mt-2">
            Ready to optimize your logistics? Let&apos;s discuss your shipping
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4  text-black ">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-full text-xl">
                  📍
                </div>
                <div>
                  <strong>Address</strong>
                  <br />
                  27 Bolorunduro Community,
                  <br />
                  Tanke Akata, Ilorin
                </div>
              </div>

              <div className="flex items-start gap-4  text-black ">
                <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl">
                  📞
                </div>
                <div>
                  <strong>Phone</strong>
                  <br />
                  +234 906 653 6931
                </div>
              </div>

              <div className="flex items-start gap-4  text-black ">
                <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl">
                  ✉️
                </div>
                <div>
                  <strong>Email</strong>
                  <br />
                  rapidmileslogistics@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f5f9ff] p-10 rounded-2xl shadow-md">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="company"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your shipping requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md h-32 resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

