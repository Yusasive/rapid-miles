import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white pt-16 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Logo & Description */}
          <div>
            <div className="text-white text-xl font-semibold mb-4">
              {/* Replace with logo if available */}
              <div className="w-8 h-8 bg-white rounded-full inline-block mr-2"></div>
              Rapid Miles Logistics
            </div>
            <p className="text-slate-400">
              Connecting your business to the world through innovative logistics solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  Ocean Freight
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  Air Freight
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  Ground Transportation
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  Warehousing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  Track Shipment
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-400 hover:text-white transition">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-teal-500 pt-6 text-center text-teal-400 text-sm">
          &copy; 2025 LogiFlow. All rights reserved. | Privacy Policy | Terms of Service
        </div>
      </div>
    </footer>
  )
}
