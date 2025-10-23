"use client";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import EventMap from "@/components/EventMap";
import Navbar from "@/components/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "@/next-i18next.config.cjs";
export default function ContactPage() {
  const meta = {
    title: "Contact | Pranto Agro Research & Development Initiatives",
    description:
      "Get in touch with Pranto Agro Research and Development Initiatives for inquiries, visits, or partnerships. Located in the Meghna River delta, our agro-tourism and research center welcomes visitors, students, and investors to experience sustainable farming and rural hospitality.",
    keywords:
      "Pranto Agro contact, agro tourism Bangladesh, sustainable farming contact, fisheries Bangladesh, agricultural research Bangladesh, eco-tourism contact, Meghna river island farm, Pranto Agro phone, Pranto Agro email, Pranto Agro location",
    author: "Pranto Agro Research & Development Initiatives",
    url: "https://www.prantoagro.com/contact",
    image: "https://www.prantoagro.com/contact/contact-og.jpg",
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
          title: "Contact",
          backgroundImage: "/contact-bg.jpg",
        }}
      />
      <ContactSection />
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
