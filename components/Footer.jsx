"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#F8E86D]">
      {/* Top Bar */}
      {/* <div className="custom-container mx-auto flex flex-wrap justify-between items-center px-6 py-4 text-sm font-medium text-gray-800">
        <div className="flex gap-4 items-center">
          <span>কৃষক</span>
          <span>•</span>
          <span>অ্যাগ্রিনিক</span>
          <span>•</span>
          <span>উৎপাদন</span>
          <span>•</span>
          <span>পণ্যসমূহ</span>
        </div>

        <div className="flex flex-wrap gap-6 items-center mt-2 md:mt-0">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-primary" />
            <span>+88 01318 252029</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMail className="text-primary text-lg" />
            <span>prantoardi@gmail.com</span>
          </div>
        </div>
      </div> */}

      {/* Bottom Section */}
      <div className="bg-[#FEFDF5] py-12">
        <div className="custom-container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* 1️⃣ Logo & Name */}
          <div>
            <div className="mb-4">
              <img
                src="/logo/logo.png"
                alt="Pranto Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 leading-snug">
              Pranto Agro Research and Development Initiatives
            </h2>

            <div className="flex gap-4 mt-6 text-green-700">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:scale-110 transition" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="cursor-pointer hover:scale-110 transition" />
              </a>
            </div>
          </div>

          {/* 2️⃣ Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="hover:text-primary cursor-pointer">Home</li>
              <li className="hover:text-primary cursor-pointer">About Us</li>
              <li className="hover:text-primary cursor-pointer">Services</li>
              <li className="hover:text-primary cursor-pointer">Products</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* 3️⃣ Working Time */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Time</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Mon - Fri: 9.00am - 5.00pm</li>
              <li>Saturday: 10.00am - 6.00pm</li>
              <li>Sunday Closed</li>
            </ul>
          </div>

          {/* 4️⃣ Contact Info + Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="text-sm text-gray-700 space-y-3">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-primary" />
                <span>+88 01318 252029</span>
              </li>
              <li className="flex items-center gap-2">
                <IoMail className="text-primary text-lg" />
                <span>prantoardi@gmail.com</span>
              </li>
              {/* <li className="flex items-center gap-2">
                <FaGlobe className="text-green-600" />
                <span>
                  <span className="font-medium">Website:</span>{" "}
                  www.prantoardi.com
                </span>
              </li> */}

              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary mb-4 text-lg" />
                <span>
                  <span className="font-medium">Address:</span> Horipur Village,
                  Meghna Upazila, Comilla District, Bangladesh.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-7xl mx-auto px-6">
            <p>Copyright © 2025 Pranto. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
