"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);
  const { t } = useTranslation("common");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setShowTopbar(window.scrollY <= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLanguage = (lng) => {
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  const links = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "about" },
    { name: t("services"), href: "services" },
    { name: t("gallery"), href: "gallery" },
    { name: t("blogs"), href: "blogs" },
    { name: t("location"), href: "location" },
    { name: t("contact"), href: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ✅ Topbar */}
      <div
        className={`bg-primary text-white text-sm transition-all transform duration-500 overflow-hidden ${
          showTopbar ? "max-h-16 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-base font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" />
              <span>+88 01318 252029</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <span>prantoardi@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-white" />
              <span>{t("hours")}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* 🌐 Language Switch Dropdown */}
            <select
              value={router.locale}
              onChange={(e) => switchLanguage(e.target.value)}
              className="bg-white text-primary font-semibold rounded px-2 py-1 text-sm focus:outline-none cursor-pointer"
            >
              <option value="bn">বাংলা</option>
              <option value="en">English</option>
            </select>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-gray-200">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Main Navbar */}
      <nav className="bg-white ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo/logo.png"
              alt="Pranto Agro Logo"
              width={80}
              height={80}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-primary transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-primary"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden bg-white border-t border-gray-200 text-gray-800 flex flex-col px-6 py-4 space-y-3 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="block hover:text-primary">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
