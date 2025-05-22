"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Logo from "@/public/logo/logo-transparent.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); 
  };

  return (
    <nav
      className={clsx(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur"
          : "bg-white/90 backdrop-blur"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={Logo} 
              alt="Rapid Miles Logistics Logo"
              className="h-10 w-auto mr-2"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 list-none">
            {["home", "about", "services", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => handleSmoothScroll(e, `#${item}`)}
                  className="text-gray-800 font-medium hover:text-blue-600 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Get Quote button */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 hover:-translate-y-0.5 transition-transform"
          >
            Get Quote
          </a>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            {["home", "about", "services", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleSmoothScroll(e, `#${item}`)}
                className="text-gray-800 font-medium hover:text-blue-600 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-transform"
            >
              Get Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
