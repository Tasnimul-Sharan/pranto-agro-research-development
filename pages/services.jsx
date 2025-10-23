"use client";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import nextI18nextConfig from "@/next-i18next.config.cjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Services from "@/components/Services";
export default function Location() {
  const meta = {
    title:
      "Services | Pranto Agro - Farming, Fisheries & Agro-Tourism in Bangladesh",
    description:
      "Discover the wide range of services offered by Pranto Agro Research and Development Initiatives — from sustainable crop cultivation and advanced aquaculture to educational programs, research support, and agro-tourism experiences in the Meghna River delta.",
    keywords:
      "Pranto Agro services, agro tourism Bangladesh, sustainable farming, fisheries Bangladesh, agricultural research, farm stay Bangladesh, eco-tourism, high-value crops, aquaculture, agricultural education",
    author: "Pranto Agro Research & Development Initiatives",
    url: "https://www.prantoardi.com/services",
    image: "https://www.prantoardi.com/services/services-og.jpg",
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
          title: "Our Services",
          backgroundImage: "/location-bg.jpg",
        }}
      />
      <Services />
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
