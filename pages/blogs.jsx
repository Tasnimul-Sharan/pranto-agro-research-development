import BlogPageSection from "@/components/BlogPageSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import nextI18nextConfig from "@/next-i18next.config.cjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
export default function BlogsPage() {
  const meta = {
    title:
      "Blogs | Pranto Agro - Sustainable Farming, Fisheries & Agro-Tourism Insights",
    description:
      "Explore blogs and articles from Pranto Agro Research and Development Initiatives featuring sustainable agriculture, fisheries innovation, agro-tourism, organic farming, biodiversity, and rural development in Bangladesh.",
    keywords:
      "Pranto Agro blogs, sustainable farming Bangladesh, agro-tourism articles, fisheries innovation, organic farming insights, agricultural research Bangladesh, eco-tourism blogs, biodiversity conservation, rural development, high-value crops",
    author: "Pranto Agro Research & Development Initiatives",
    url: "https://www.prantoardi.com/blogs",
    image: "https://www.prantoardi.com/blogs/blog-og.jpg",
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
          title: "Blogs",
          backgroundImage: "/blogs/blog-hero.jpg",
        }}
      />
      <BlogPageSection />
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
