// export default function AgriculturalExcellence() {
//   const highValue = [
//     "Rock Melon (Cantaloupe)",
//     "Honeydew Melon",
//     "Capsicum (Bell Peppers)",
//     "Squash (Zucchini)",
//     "Commercial Grapevines",
//   ];
//   const yearRound = ["Tomatoes", "Green Chilies"];
//   const orchards = ["Mango", "Guava", "Papaya", "Lemon", "Kul Boroi (Jujube)"];

//   return (
//     <section id="agriculture" className="py-16 px-6 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-semibold text-green-800 mb-6">
//           Agricultural Excellence
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="bg-green-50 rounded-lg p-5">
//             <h3 className="font-semibold mb-2">High-Value Foreign Crops</h3>
//             <ul className="list-disc pl-5 text-gray-700 space-y-1">
//               {highValue.map((c) => (
//                 <li key={c}>{c}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="bg-green-50 rounded-lg p-5">
//             <h3 className="font-semibold mb-2">Year-Round Farming</h3>
//             <ul className="list-disc pl-5 text-gray-700 space-y-1">
//               {yearRound.map((c) => (
//                 <li key={c}>{c}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="bg-green-50 rounded-lg p-5">
//             <h3 className="font-semibold mb-2">Fruit Orchards</h3>
//             <ul className="list-disc pl-5 text-gray-700 space-y-1">
//               {orchards.map((c) => (
//                 <li key={c}>{c}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <p className="mt-6 text-gray-700">
//           Farming uses Controlled Environment Agriculture (CEA), greenhouses,
//           drip irrigation, and bio-organic soil treatments to enable multiple
//           harvests per year and high yields.
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";
import { FaSeedling, FaLeaf, FaAppleAlt, FaCarrot } from "react-icons/fa";

export default function AgriculturalExcellence() {
  const sections = [
    {
      title: "High-Value Foreign Crops",
      icon: <FaSeedling className="text-green-600 text-3xl" />,
      crops: [
        "Rock Melon (Cantaloupe)",
        "Honeydew Melon",
        "Capsicum (Bell Peppers)",
        "Squash (Zucchini)",
        "Commercial Grapevines",
      ],
      gradient: "from-green-50 to-emerald-100",
    },
    {
      title: "Year-Round Farming",
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      crops: ["Tomatoes", "Green Chilies"],
      gradient: "from-lime-50 to-green-100",
    },
    {
      title: "Local Vegetables",
      icon: <FaCarrot className="text-green-600 text-3xl" />,
      crops: [
        "Eggplant (Brinjal)",
        "Bottle Gourd (Lau)",
        "Bitter Gourd (Korola)",
        "Pumpkin (Misti Kumra)",
        "Spinach (Palong Shak)",
        "Okra (Dherosh)",
      ],
      gradient: "from-emerald-50 to-lime-100",
    },
    {
      title: "Fruit Orchards",
      icon: <FaAppleAlt className="text-green-600 text-3xl" />,
      crops: ["Mango", "Guava", "Papaya", "Lemon", "Kul Boroi (Jujube)"],
      gradient: "from-green-50 to-lime-100",
    },
  ];

  return (
    <section
      id="agriculture"
      className="relative py-20 px-6 bg-gradient-to-b from-white to-green-50 overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('/leaf-pattern.svg')] bg-center bg-cover opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Agricultural Excellence
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Empowering sustainable agriculture through innovation and precision
          technology to ensure high yields and premium quality harvests all year
          round.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className={`relative bg-gradient-to-b ${section.gradient} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border border-green-100`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-white rounded-full p-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="font-semibold text-lg text-green-800 mb-3">
                  {section.title}
                </h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  {section.crops.map((c) => (
                    <li
                      key={c}
                      className="flex items-center justify-start gap-2"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Our farming methods integrate{" "}
          <strong>Controlled Environment Agriculture (CEA)</strong>, advanced{" "}
          <strong>greenhouse systems</strong>, <strong>drip irrigation</strong>,
          and <strong>bio-organic soil treatments</strong>. These technologies
          enable multiple harvests per year while maintaining exceptional
          quality and yield.
        </p>
      </div>
    </section>
  );
}
