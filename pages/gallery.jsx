import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import GalleryPageSection from "@/components/GalleryPageSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "@/next-i18next.config.cjs";
export default function GalleryPage() {
  const meta = {
    title: "Gallery | Pranto Agro Research & Development Initiatives",
    description:
      "Explore the Pranto Agro Gallery showcasing our high-value crop cultivation, fisheries ponds, greenhouses, orchards, agro-tourism activities, and the serene beauty of the Meghna River island in Comilla, Bangladesh.",
    keywords:
      "Pranto Agro gallery, agro tourism Bangladesh, sustainable farming photos, fisheries Bangladesh, greenhouse images, eco-tourism gallery, high-value crops, Meghna river island, agricultural research Bangladesh, rural tourism photos",
    author: "Pranto Agro Research & Development Initiatives",
    url: "https://www.prantoardi.com/gallery",
    image: "https://www.prantoardi.com/gallery/gallery-og.jpg",
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
          title: "Gallery",
          backgroundImage: "/gallery/gallery-bg.jpg",
        }}
      />
      <GalleryPageSection />
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
