// "use client";
// import { useTranslation } from "next-i18next";
// import {
//   FaSeedling,
//   FaFish,
//   FaTractor,
//   FaBookOpen,
//   FaTree,
//   FaBuilding,
// } from "react-icons/fa";

// export default function Services() {
//   const { t } = useTranslation("common");

//   const services = [
//     {
//       icon: <FaSeedling className="text-4xl text-primary" />,
//       title: t("service_1_title"),
//       description: t("service_1_desc"),
//     },
//     {
//       icon: <FaFish className="text-4xl text-primary" />,
//       title: t("service_2_title"),
//       description: t("service_2_desc"),
//     },
//     {
//       icon: <FaTractor className="text-4xl text-primary" />,
//       title: t("service_3_title"),
//       description: t("service_3_desc"),
//     },
//     {
//       icon: <FaBookOpen className="text-4xl text-primary" />,
//       title: t("service_4_title"),
//       description: t("service_4_desc"),
//     },
//     {
//       icon: <FaTree className="text-4xl text-primary" />,
//       title: t("service_5_title"),
//       description: t("service_5_desc"),
//     },
//     // {
//     //   icon: <FaBuilding className="text-4xl text-primary" />,
//     //   title: t("service_6_title"),
//     //   description: t("service_6_desc"),
//     // },
//   ];

//   return (
//     <section className="min-h-screen bg-white text-gray-800 py-24 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
//           {t("services_title")}
//         </h1>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//           {t("services_description")}
//         </p>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-green-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-500 shadow-md hover:shadow-xl"
//             >
//               <div className="flex justify-center mb-4">{service.icon}</div>
//               <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
//               <p className="text-sm leading-relaxed">{service.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20">
//           <a
//             href="/contact"
//             className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300"
//           >
//             {t("services_cta")}
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useTranslation } from "next-i18next";
import {
  FaSeedling,
  FaFish,
  FaTractor,
  FaBookOpen,
  FaTree,
  FaBuilding,
} from "react-icons/fa";

export default function Services() {
  const { t } = useTranslation("common");

  const services = [
    {
      icon: <FaSeedling />,
      title: t("service_1_title"),
      description: t("service_1_desc"),
    },
    {
      icon: <FaFish />,
      title: t("service_2_title"),
      description: t("service_2_desc"),
    },
    {
      icon: <FaTractor />,
      title: t("service_3_title"),
      description: t("service_3_desc"),
    },
    {
      icon: <FaBookOpen />,
      title: t("service_4_title"),
      description: t("service_4_desc"),
    },
    {
      icon: <FaTree />,
      title: t("service_5_title"),
      description: t("service_5_desc"),
    },
    // Optionally add more services
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white text-gray-800 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
          {t("services_title")}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t("services_description")}
        </p>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:bg-primary hover:text-white flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="text-5xl text-primary group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 group-hover:text-green-100 transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              {/* See Details Button */}
              <div className="mt-8">
                <a
                  href="/services"
                  className="inline-block text-sm font-semibold px-5 py-2 border border-primary text-primary rounded-full group-hover:bg-white group-hover:text-primary transition-all duration-500 hover:scale-105"
                >
                  {t("see_details")}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-20">
          <a
            href="/contact"
            className="inline-block bg-primary text-white font-semibold px-10 py-4 rounded-full hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t("services_cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
