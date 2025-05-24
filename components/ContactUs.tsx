"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-lg text-gray-600 mt-2">
            Ready to optimize your logistics need? Let&apos;s discuss your
            shipping needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4  text-black ">
                <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl">
                  <FaMapMarkerAlt />
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
                  <FaPhoneAlt />
                </div>
                <div>
                  <strong>Phone</strong>
                  <br />
                  +234 816 935 9828
                </div>
              </div>

              <div className="flex items-start gap-4  text-black ">
                <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl">
                  <FaWhatsapp />
                </div>
                <div>
                  <a
                    href="https://wa.me/message/3T4GL6SX3XITI1"
                    target="_blank"
                  >
                    <strong>WhatsApp</strong>
                    <br /> +234 816 935 9828
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4  text-black ">
                <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl">
                  <MdEmail />
                </div>
                <div>
                  <strong>Email</strong>
                  <br />
                  rapidmileslogistics@gmail.com
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f9ff] p-10 rounded-2xl shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 placeholder:text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 placeholder:text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 placeholder:text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 placeholder:text-gray-600 rounded-md h-32 resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition duration-200"
              >
                Send Message
              </button>
              {status && (
                <p className="mt-4 text-base text-blue-700">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
