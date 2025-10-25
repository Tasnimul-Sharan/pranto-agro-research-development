// "use client";
// import { useTranslation } from "next-i18next";

// export default function VisionMission() {
//   const { t } = useTranslation("common");

//   return (
//     <section className="py-16 px-6 bg-white">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-semibold text-green-800 mb-4">
//           {t("vision_mission_title")}
//         </h2>

//         <p className="text-gray-700 mb-4">
//           <strong>{t("vision")}:</strong> {t("vision_text")}
//         </p>

//         <div className="text-gray-700">
//           <strong>{t("mission")}:</strong>
//           <ul className="list-disc pl-6 mt-3 space-y-2">
//             <li>{t("mission_1")}</li>
//             <li>{t("mission_2")}</li>
//             <li>{t("mission_3")}</li>
//             <li>{t("mission_4")}</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { useTranslation } from "next-i18next";
// import { FaArrowRight, FaAngleDoubleRight } from "react-icons/fa";

// export default function VisionMission() {
//   const { t } = useTranslation("common");

//   return (
//     <section className="bg-white py-16 px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* ===== Left Side (Images + Experience) ===== */}
//         <div className="relative flex justify-center">
//           {/* Top Small Image */}
//           <div className="absolute -top-10 -left-10 w-40 h-40 md:w-48 md:h-48 z-10">
//             <Image
//               src="/images/garden-small.jpg"
//               alt="Small gardening"
//               fill
//               className="object-cover rounded shadow-md"
//             />
//           </div>

//           {/* Main Image */}
//           <div className="relative w-[350px] h-[460px] md:w-[420px] md:h-[520px]">
//             <Image
//               src="/images/garden-main.jpg"
//               alt="Gardener"
//               fill
//               className="object-cover rounded shadow-lg"
//             />
//           </div>

//           {/* Vertical Text */}
//           <div className="absolute -left-16 bottom-10 rotate-[-90deg] origin-left">
//             <p className="text-green-900 font-bold text-5xl leading-none">
//               23<span className="text-4xl align-super">+</span>
//               <span className="text-base font-medium ml-2">
//                 Year of Experience
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* ===== Right Side (Text + Boxes) ===== */}
//         <div>
//           <div className="mb-6">
//             <button className="border border-gray-300 px-4 py-1 text-sm text-gray-700 rounded">
//               • About Gardening
//             </button>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-snug">
//             Flawless Garden Nature&apos;s Handiwork.
//           </h2>

//           {/* Boxes */}
//           <div className="flex flex-col md:flex-row gap-6 mb-8">
//             <div className="flex-1 border border-gray-200 p-5 rounded-md shadow-sm hover:shadow-md transition">
//               <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
//                 Our Goals <FaArrowRight className="text-gray-500" />
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Denim aliquot poseurs locus..!
//               </p>
//             </div>

//             <div className="flex-1 border border-gray-200 p-5 rounded-md shadow-sm hover:shadow-md transition">
//               <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
//                 Our Goals <FaArrowRight className="text-gray-500" />
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Denim aliquot poseurs locus..!
//               </p>
//             </div>
//           </div>

//           {/* List Section */}
//           <div className="space-y-5">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={i}>
//                 <h4 className="font-semibold text-lg text-green-900 flex items-center gap-2">
//                   <FaAngleDoubleRight className="text-green-800" /> Gardens
//                 </h4>
//                 <p className="text-gray-600 text-sm ml-7">
//                   Suspends potent Cu abitur vestibulum poseurs sagittal trips.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function VisionMission() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ===== Left Side (Images + Experience) ===== */}
        <div className="relative flex justify-center">
          {/* Small Top Image */}
          <div className="absolute -top-10 -left-10 w-40 h-40 md:w-48 md:h-48 z-10">
            <Image
              src="/images/garden-small.jpg"
              alt="Small gardening"
              fill
              className="object-cover rounded shadow-md"
            />
          </div>

          {/* Main Image */}
          <div className="relative w-[350px] h-[460px] md:w-[420px] md:h-[520px]">
            <Image
              src="/images/garden-main.jpg"
              alt="Gardener"
              fill
              className="object-cover rounded shadow-lg"
            />
          </div>

          {/* Vertical Text */}
          <div className="absolute -left-16 bottom-10 rotate-[-90deg] origin-left">
            <p className="text-green-900 font-bold text-5xl leading-none">
              23<span className="text-4xl align-super">+</span>
              <span className="text-base font-medium ml-2">
                Year of Experience
              </span>
            </p>
          </div>
        </div>

        {/* ===== Right Side (Vision + Mission) ===== */}
        <div>
          {/* Section Label */}
          <div className="mb-6">
            <button className="border border-gray-300 px-4 py-1 text-sm text-gray-700 rounded">
              • {t("about_gardening")}
            </button>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-snug">
            {t("vision_mission_title")}
          </h2>

          {/* Vision */}
          <p className="text-gray-700 mb-6">
            <strong className="text-green-900">{t("vision")}:</strong>{" "}
            {t("vision_text")}
          </p>

          {/* Mission */}
          <div className="text-gray-700">
            <strong className="text-green-900">{t("mission")}:</strong>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>{t("mission_1")}</li>
              <li>{t("mission_2")}</li>
              <li>{t("mission_3")}</li>
              <li>{t("mission_4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
