"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdmissionDetails from "@/components/AdmissionDetails";

export default function AdmissionPage() {
  const admissionService = {
    services: {
      title: "Admission & Residency Options",
      image: "/services/admission.jpg",
      // description:
      //   "We offer flexible residency packages – permanent, seasonal, and short-term recovery stays. Begin your journey of healing and harmony with ease.",
      description: "We offer flexible residency packages:",
      packages: [
        "Permanent Residency",
        "Seasonal Residency",
        "Short-term Recovery Stays",
      ],
      tagline: "Begin your journey of healing and harmony with ease.",
      checklist: [
        "Inquiry and Virtual Tour",
        "Application and Health Evaluation",
        "Personal Interview and Suite Selection",
        "Contract and Onboarding",
        "Welcome and Orientation Program",
      ],
      subImages: [
        "/services/features/admission1.jpg",
        "/services/features/admission2.jpg",
      ],
      quote: "Your journey of care begins with one simple step.",
      postTags: ["Admission", "Residency", "Options"],
    },
  };

  const meta = {
    title: "Admission & Residency Options | Anondo Baari",
    description:
      "Flexible residency packages – permanent, seasonal, and short-term recovery stays. Begin your healing journey at Anondo Baari.",
    keywords: "Admission, Residency, Healing, Recovery, Anondo Baari",
    author: "Anondo Baari",
    url: "https://yourdomain.com/admission",
    image: "/services/admission.jpg",
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <Navbar hasBackground={true} />

      <HeroSection
        hero={{
          title: "Admission & Residency Options",
          backgroundImage: "/services/services-bg.jpg",
        }}
      />

      <AdmissionDetails service={admissionService} />
    </div>
  );
}
