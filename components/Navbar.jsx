// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaClock,
// } from "react-icons/fa";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [showTopbar, setShowTopbar] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setShowTopbar(false);
//       } else {
//         setShowTopbar(true);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { name: "হোম", href: "/" },
//     { name: "সার্ভিসেস", href: "#services" },
//     { name: "আমাদের সম্পর্কে", href: "#about" },
//     { name: "আমাদের পণ্যসমূহ", href: "#products" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full">
//       {/* ✅ Topbar (only visible when at top) */}
//       <div
//         className={`bg-primary text-white text-sm transition-all transform duration-500 overflow-hidden ${
//           showTopbar ? "max-h-16 py-4" : "max-h-0 py-0"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-base font-medium">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <FaPhoneAlt className="text-white" />
//               <span>+88 01318 252029</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaEnvelope className="text-white" />
//               <span>prantoardi@gmail.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaClock className="text-white" />
//               <span>Mon - Fri: 9:00 - 19:00</span>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <a href="#" className="hover:text-gray-200">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <FaInstagram />
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <FaTwitter />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Main Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <Image
//               src="/logo/logo.png"
//               alt="Pranto Agro Logo"
//               width={80}
//               height={80}
//             />
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <a href={link.href} className="hover:text-primary transition">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-2xl text-primary"
//           >
//             {open ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {open && (
//           <ul className="md:hidden bg-white border-t border-gray-200 text-gray-800 flex flex-col px-6 py-4 space-y-3 font-medium">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <a href={link.href} className="block hover:text-primary">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// }

// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaClock,
// } from "react-icons/fa";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [showTopbar, setShowTopbar] = useState(true);
//   const [language, setLanguage] = useState("BN");

//   // Scroll event for hiding topbar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setShowTopbar(false);
//       } else {
//         setShowTopbar(true);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { name: language === "BN" ? "হোম" : "Home", href: "/" },
//     { name: language === "BN" ? "সার্ভিসেস" : "Services", href: "#services" },
//     {
//       name: language === "BN" ? "আমাদের সম্পর্কে" : "About Us",
//       href: "#about",
//     },
//     {
//       name: language === "BN" ? "আমাদের পণ্যসমূহ" : "Our Products",
//       href: "#products",
//     },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full">
//       {/* ✅ Topbar */}
//       <div
//         className={`bg-primary text-white text-sm transition-all transform duration-500 overflow-hidden ${
//           showTopbar ? "max-h-16 py-4" : "max-h-0 py-0"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-base font-medium">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <FaPhoneAlt className="text-white" />
//               <span>+88 01318 252029</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaEnvelope className="text-white" />
//               <span>prantoardi@gmail.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaClock className="text-white" />
//               <span>Mon - Fri: 9:00 - 19:00</span>
//             </div>
//           </div>

//           <div className="flex items-center gap-6">
//             {/* 🌐 Language Switch Dropdown */}
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="bg-white text-primary font-semibold rounded px-2 py-1 text-sm focus:outline-none cursor-pointer"
//             >
//               <option value="BN">বাংলা</option>
//               <option value="EN">English</option>
//             </select>

//             {/* Social icons */}
//             <div className="flex items-center gap-3">
//               <a href="#" className="hover:text-gray-200">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="hover:text-gray-200">
//                 <FaInstagram />
//               </a>
//               <a href="#" className="hover:text-gray-200">
//                 <FaTwitter />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Main Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <Image
//               src="/logo/logo.png"
//               alt="Pranto Agro Logo"
//               width={80}
//               height={80}
//             />
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <a href={link.href} className="hover:text-primary transition">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-2xl text-primary"
//           >
//             {open ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {open && (
//           <ul className="md:hidden bg-white border-t border-gray-200 text-gray-800 flex flex-col px-6 py-4 space-y-3 font-medium">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <a href={link.href} className="block hover:text-primary">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// }
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

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setShowTopbar(window.scrollY <= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Language switcher
  const switchLanguage = (lng) => {
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  const links = [
    { name: t("home"), href: "/" },
    { name: t("services"), href: "#services" },
    { name: t("about"), href: "#about" },
    { name: t("products"), href: "#products" },
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
      <nav className="bg-white shadow-md">
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

// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaClock,
// } from "react-icons/fa";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [showTopbar, setShowTopbar] = useState(true);
//   const [language, setLanguage] = useState("BN"); // 🌐 Language state
//   const [loading, setLoading] = useState(false); // 🔄 Loading spinner

//   // Load language preference from localStorage
//   useEffect(() => {
//     const savedLang = localStorage.getItem("siteLang");
//     if (savedLang) setLanguage(savedLang);
//   }, []);

//   // Save language and trigger translation
//   useEffect(() => {
//     localStorage.setItem("siteLang", language);
//     if (typeof window !== "undefined") translatePage(language);
//   }, [language]);

//   // Scroll hide topbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowTopbar(window.scrollY <= 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Super Fast Batch Translation Function
//   const translatePage = async (lang) => {
//     if (!window || !document) return;
//     setLoading(true);

//     const elements = document.querySelectorAll("body *:not(script):not(style)");
//     const textNodes = [];
//     elements.forEach((el) => {
//       el.childNodes.forEach((node) => {
//         if (node.nodeType === 3 && node.nodeValue.trim().length > 0) {
//           textNodes.push(node);
//         }
//       });
//     });

//     // সব টেক্সট একসাথে নিয়ে যাওয়া
//     const allText = textNodes.map((n) => n.nodeValue);
//     const joinedText = allText.join("|||"); // delimiter

//     try {
//       const res = await fetch("/api/translate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           text: joinedText,
//           targetLang: lang === "EN" ? "en" : "bn",
//         }),
//       });

//       const data = await res.json();

//       if (data.translatedText) {
//         const translated = data.translatedText.split("|||");
//         textNodes.forEach((node, idx) => {
//           node.nodeValue = translated[idx]?.trim() || node.nodeValue;
//         });
//       }
//     } catch (err) {
//       console.error("Translation error:", err);
//     }

//     setLoading(false);
//   };

//   const links = [
//     { name: language === "BN" ? "হোম" : "Home", href: "/" },
//     { name: language === "BN" ? "সার্ভিসেস" : "Services", href: "#services" },
//     {
//       name: language === "BN" ? "আমাদের সম্পর্কে" : "About Us",
//       href: "#about",
//     },
//     {
//       name: language === "BN" ? "আমাদের পণ্যসমূহ" : "Our Products",
//       href: "#products",
//     },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full">
//       {/* Loader Overlay */}
//       {loading && (
//         <div className="fixed top-0 left-0 w-full h-full bg-white/70 flex items-center justify-center text-primary text-lg font-semibold z-[9999]">
//           Translating...
//         </div>
//       )}

//       {/* ✅ Topbar */}
//       <div
//         className={`bg-primary text-white text-sm transition-all transform duration-500 overflow-hidden ${
//           showTopbar ? "max-h-16 py-4" : "max-h-0 py-0"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-base font-medium">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <FaPhoneAlt className="text-white" />
//               <span>+88 01318 252029</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaEnvelope className="text-white" />
//               <span>prantoardi@gmail.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaClock className="text-white" />
//               <span>Mon - Fri: 9:00 - 19:00</span>
//             </div>
//           </div>

//           <div className="flex items-center gap-6">
//             {/* 🌐 Language Switch Dropdown */}
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="bg-white text-primary font-semibold rounded px-2 py-1 text-sm focus:outline-none cursor-pointer"
//             >
//               <option value="BN">বাংলা</option>
//               <option value="EN">English</option>
//             </select>

//             {/* Social icons */}
//             <div className="flex items-center gap-3">
//               <a href="#" className="hover:text-gray-200">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="hover:text-gray-200">
//                 <FaInstagram />
//               </a>
//               <a href="#" className="hover:text-gray-200">
//                 <FaTwitter />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Main Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <Image
//               src="/logo/logo.png"
//               alt="Pranto Agro Logo"
//               width={80}
//               height={80}
//             />
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <a href={link.href} className="hover:text-primary transition">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-2xl text-primary"
//           >
//             {open ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {open && (
//           <ul className="md:hidden bg-white border-t border-gray-200 text-gray-800 flex flex-col px-6 py-4 space-y-3 font-medium">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <a href={link.href} className="block hover:text-primary">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// }
