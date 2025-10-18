"use client";
import {
  FaSeedling,
  FaFish,
  FaTractor,
  FaBookOpen,
  FaTree,
  FaBuilding,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaSeedling className="text-4xl text-[#5b8c51]" />,
      title: "High-Value Agriculture",
      description:
        "Advanced cultivation of premium crops including Rock Melon, Honeydew Melon, Capsicum, and commercial grapevines under controlled environment farming with drip irrigation and bio-organic soil treatment.",
    },
    {
      icon: <FaFish className="text-4xl text-[#5b8c51]" />,
      title: "Fisheries & Aquaculture",
      description:
        "Nine large ponds hosting native and exotic fish species like Rui, Katla, Silver Carp, and Shrimp — following eco-friendly semi-intensive polyculture models where visitors can participate in feeding and harvesting.",
    },
    {
      icon: <FaTractor className="text-4xl text-[#5b8c51]" />,
      title: "Agro-Tourism & Farm Stay",
      description:
        "Immersive experiences for tourists, families, and students — from planting crops to enjoying traditional meals, boat rides, and cultural evenings by the riverside.",
    },
    {
      icon: <FaBookOpen className="text-4xl text-[#5b8c51]" />,
      title: "Research & Education",
      description:
        "Hands-on learning opportunities for agricultural students and researchers, with on-site lodging, experimental plots, and partnerships with universities and NGOs.",
    },
    {
      icon: <FaTree className="text-4xl text-[#5b8c51]" />,
      title: "Eco & Sustainability Programs",
      description:
        "Organic composting, solar lighting, rainwater harvesting, and biodiversity protection — making the entire park a living example of environmental harmony.",
    },
    {
      icon: <FaBuilding className="text-4xl text-[#5b8c51]" />,
      title: "Investment & Expansion",
      description:
        "Collaborate with us to expand eco-lodges, sponsor research facilities, develop retail supply chains, or host corporate and wellness retreats.",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-800 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#5b8c51] mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Pranto Agro Research & Development Initiatives, we blend
          sustainable farming, education, and tourism to create a complete
          agro-living experience.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-green-50 rounded-2xl p-8 hover:bg-[#5b8c51] hover:text-white transition-all duration-500 shadow-md hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <a
            href="/contact"
            className="inline-block bg-[#5b8c51] text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300"
          >
            Get in Touch to Collaborate
          </a>
        </div>
      </div>
    </section>
  );
}
