"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Custom404() {
  const underlineRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const underline = underlineRef.current;
    const link = linkRef.current;

    if (!underline || !link) return;

    const handleEnter = () =>
      gsap.to(underline, { width: "100%", duration: 0.4, ease: "power2.out" });

    const handleLeave = () =>
      gsap.to(underline, { width: "0%", duration: 0.4, ease: "power2.out" });

    link.addEventListener("mouseenter", handleEnter);
    link.addEventListener("mouseleave", handleLeave);

    return () => {
      link.removeEventListener("mouseenter", handleEnter);
      link.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="w-full relative bg-white">
      <Head>
        <title>404 - Page Not Found | Pranto Agro</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="The page you are looking for does not exist. Please return to the Pranto Agro homepage."
        />
      </Head>

      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-900 px-4">
        <h1 className="text-6xl font-extrabold mb-3">404</h1>
        <p className="text-2xl font-semibold mb-2">Page Not Found</p>
        <p className="text-lg mb-8 max-w-md text-gray-600">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved or deleted.
        </p>

        <div className="relative inline-block">
          <Link href="/" legacyBehavior>
            <a
              ref={linkRef}
              className="text-xl font-semibold relative z-10 text-green-700"
            >
              ← Back to Home
            </a>
          </Link>
          <span
            ref={underlineRef}
            className="absolute left-0 bottom-0 h-[2px] w-0 bg-green-700 transition-all duration-300"
          ></span>
        </div>
      </div>
    </section>
  );
}
