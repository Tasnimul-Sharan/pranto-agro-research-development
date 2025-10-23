"use client";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import EventMap from "@/components/EventMap";
import Navbar from "@/components/Navbar";
import LocationInfo from "@/components/LocationAccessibility";
import nextI18nextConfig from "@/next-i18next.config.cjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Location() {
  const meta = {
    title: "Location | Pranto Agro Research & Development Initiatives",
    description:
      "Pranto Agro Research and Development Initiatives is located on an island in Horipur village, Meghna Upazila, Comilla District — within the scenic Meghna River delta. Accessible by road and river, the journey combines adventure, nature, and tranquility.",
    keywords:
      "Pranto Agro location, agro tourism Bangladesh, sustainable farming Comilla, Meghna River island, fisheries Bangladesh, eco-tourism location, Pranto Agro address, Pranto Agro map, rural tourism Bangladesh",
    author: "Pranto Agro Research & Development Initiatives",
    url: "https://www.prantoardi.com/location",
    image: "https://www.prantoardi.com/location/location-og.jpg",
  };

  return (
    <div className="w-full relative">
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
          title: "Our Location",
          backgroundImage: "/location-bg.jpg",
        }}
      />
      <LocationInfo />
      <EventMap />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18nextConfig)),
    },
  };
}
