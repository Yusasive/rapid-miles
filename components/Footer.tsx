import React from "react";
import Image from "next/image";
import Logo from "@/public/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white pt-16 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          <div>
            <div className="text-white text-xl font-semibold mb-4">
              <div className="flex items-center">
                <Image
                  src={Logo}
                  width={160}
                  height={100}
                  alt="Rapid Miles Logistics Logo"
                  className="h-16 w-48 mr-2"
                />
              </div>
            </div>
            <p className="text-slate-400">
              Connecting your business to the world through innovative logistics
              solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-teal-400 hover:text-white transition"
                >
                  Pick-up
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-teal-400 hover:text-white transition"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-teal-400 hover:text-white transition"
                >
                  Last Mile Delivery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-teal-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-teal-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-teal-400 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-teal-400 hover:text-white transition"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-500 pt-6 text-center text-teal-400 text-sm">
          &copy; 2025 Rapid Miles Logistics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
