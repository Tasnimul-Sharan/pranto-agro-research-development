import HeroSection from "../components/HeroSection";
import VisionMission from "../components/VisionMission";
import LocationAccessibility from "../components/LocationAccessibility";
import AgriculturalExcellence from "../components/AgriculturalExcellence";
import FisheriesAquaculture from "../components/FisheriesAquaculture";
import AgroTourism from "../components/AgroTourism";
import ResearchEducation from "../components/ResearchEducation";
import AgroMuseum from "../components/AgroMuseum";
import InfrastructureAmenities from "../components/InfrastructureAmenities";
import EnvironmentSustainability from "../components/EnvironmentSustainability";
import InvestmentExpansion from "../components/InvestmentExpansion";
import TargetAudience from "../components/TargetAudience";
import HowToVisit from "../components/HowToVisit";
import FutureGoals from "../components/FutureGoals";
import ConclusionSection from "../components/ConclusionSection";
import ImageGallery from "../components/ImageGallery";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import ServicesPage from "./services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "@/next-i18next.config.cjs";
import Services from "@/components/Services";

export default function PrantoAgroPage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <LandingPage />
      <VisionMission />
      <Services />
      <LocationAccessibility />
      <AgriculturalExcellence />
      <FisheriesAquaculture />
      {/* <AgroTourism /> */}
      <ResearchEducation />
      <AgroMuseum />
      <InfrastructureAmenities />
      <EnvironmentSustainability />
      <InvestmentExpansion />
      <TargetAudience />
      <HowToVisit />
      <ImageGallery />
      <FutureGoals />
      <ConclusionSection />
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
