import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import VisionMission from "@/components/VisionMission";
import nextI18nextConfig from "@/next-i18next.config.cjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TargetAudience from "@/components/TargetAudience";
import FutureGoals from "@/components/FutureGoals";
import HowToVisit from "@/components/HowToVisit";
export default function AboutPage() {
  const meta = {
    title: "About Us | Pranto Agro Research & Development Initiatives",
    description:
      "Learn about Pranto Agro Research and Development Initiatives — a pioneering agro-tourism and research project in Bangladesh. Discover our vision, mission, sustainable farming, fisheries, agro-tourism, and educational programs located on a beautiful island in the Meghna River delta.",
    keywords:
      "Pranto Agro, agro research Bangladesh, sustainable farming, agro-tourism, fisheries Bangladesh, Meghna river delta, agricultural innovation, eco-tourism Bangladesh, farm stay Bangladesh, agricultural education",
    author: "Pranto Agro Research & Development Initiatives",
    url: "https://www.prantoardi.com/about",
    image: "https://www.prantoardi.com/assets/about-og.jpg",
  };

  const faqData = {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is Pranto Agro Research and Development Initiatives?",
        answer:
          "Pranto Agro Research and Development Initiatives is a pioneering agricultural and fisheries project that blends sustainable farming, scientific research, and agro-tourism. It’s located on an island between two branches of the Meghna River in Horipur village, Meghna Upazila, Comilla District, Bangladesh.",
      },
      {
        question: "What is the vision of Pranto Agro?",
        answer:
          "To become Bangladesh’s leading center for sustainable agro-tourism, research, and education, rooted in high-value farming and biodiversity conservation.",
      },
      {
        question: "What is the mission of Pranto Agro?",
        answer:
          "To promote high-value agriculture and fisheries through research and demonstration, support the next generation of scientists and farmers, offer unique agro-tourism experiences, and preserve Bangladesh’s agricultural heritage.",
      },
      {
        question: "Where is Pranto Agro located and how can visitors reach it?",
        answer:
          "The project is located on an island within the Meghna River delta in Horipur village, Meghna Upazila, Comilla. Visitors reach Meghna ghat by road, then take a speedboat or launch across the river for a scenic and adventurous journey to the island.",
      },
      {
        question: "What types of crops are cultivated at Pranto Agro?",
        answer:
          "Pranto Agro grows high-value foreign crops like rock melon, honeydew melon, capsicum, squash, and grapes, along with year-round crops like tomatoes and green chilies. Fruit orchards include mango, guava, papaya, lemon, and kul boroi (jujube).",
      },
      {
        question: "What fisheries are managed on the island?",
        answer:
          "The island has 9 large fisheries ponds cultivating Rui, Katla, Silver Carp, Pangas, Tilapia, and Shrimp using a semi-intensive polyculture system. Visitors can join feeding sessions, fish harvesting, and aquaculture learning modules.",
      },
      {
        question: "What can tourists experience at Pranto Agro?",
        answer:
          "Tourists can stay in farm cottages, enjoy farm-fresh meals, participate in planting and harvesting, join aquaculture activities, take boat rides, go bird watching, walk nature trails, and enjoy cultural evenings with folk music and Bengali cooking classes.",
      },
      {
        question: "Is Pranto Agro involved in research and education?",
        answer:
          "Yes. Pranto Agro offers free support for agricultural students and researchers, including land access, assistance with experiments, and on-site lodging. It collaborates with universities, agricultural colleges, and NGOs.",
      },
      {
        question: "What is the Agro-Museum at Pranto Agro?",
        answer:
          "The Agro-Museum showcases Bangladesh’s agricultural history through displays of traditional and modern farming tools, indigenous seed banks, educational posters, and interactive exhibits for children.",
      },
      {
        question: "What amenities are available at Pranto Agro?",
        answer:
          "Facilities include 10 cottages, a dining hall, a 60-seat seminar hall, an observation deck, fishing gear, solar lighting, and rainwater harvesting systems. Visitors can enjoy comfort while experiencing rural life.",
      },
      {
        question: "How does Pranto Agro promote environmental sustainability?",
        answer:
          "The project practices organic composting, uses solar power, collects rainwater, avoids synthetic pesticides, and runs tree plantation programs to increase biodiversity and support eco-tourism.",
      },
      {
        question: "Are there investment or partnership opportunities?",
        answer:
          "Yes. Pranto Agro welcomes partners to develop eco-resorts, sponsor research facilities, create farm-to-market retail chains, and organize corporate retreats or wellness programs.",
      },
      {
        question: "Who can visit Pranto Agro?",
        answer:
          "Families seeking eco-friendly vacations, students and researchers, photographers, agro-enthusiasts, and NGOs involved in agriculture and sustainability are all welcome.",
      },
      {
        question: "How can visitors contact or book a visit?",
        answer:
          "📍 Address: Horipur Village, Meghna Upazila, Comilla District, Bangladesh\n📞 +880-XXX-XXXXXXX\n📧 info@prantoagro.com\n🌐 www.prantoagro.com\nBookings can be made online, by phone, or at the Dhaka liaison office.",
      },
      {
        question: "What are Pranto Agro’s future goals?",
        answer:
          "Plans include developing a 50-bed eco-lodge, introducing hydroponic farming, launching agro-education programs, creating a digital agricultural archive, and hosting an annual Agro-Fair Festival.",
      },
    ],
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
          title: "About",
          backgroundImage: "/about-bg.jpg",
        }}
      />
      {/* <AboutUsSection /> */}
      <VisionMission />
      <TargetAudience />
      <FutureGoals />
      <HowToVisit />
      <FAQ faqData={faqData} />
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
