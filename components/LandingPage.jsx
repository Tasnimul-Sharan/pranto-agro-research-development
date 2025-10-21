"use client";
import { useTranslation } from "next-i18next";

export default function LandingPage() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-primary text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
          {t("description")}
        </p>
        <div className="mt-6 inline-flex gap-3">
          <a
            href="#visit"
            className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-md text-sm"
          >
            {t("visit")}
          </a>
          <a
            href="#agriculture"
            className="bg-white text-green-800 px-5 py-2 rounded-md text-sm font-semibold"
          >
            {t("explore")}
          </a>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import Slider from "react-slick";
// import { gsap } from "gsap";
// import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Button from "./Button";
// import Link from "next/link";

// const sliderData = {
//   slides: [
//     {
//       image: "/slider/agro1.jpg",
//       subtitle: "A Vision for Sustainable Bangladesh",
//       title: "Pranto Agro Research & Development",
//       description:
//         "Located in the heart of the Meghna River delta, Pranto Agro combines sustainable farming, research, and agro-tourism — offering visitors a unique opportunity to learn, explore, and experience rural innovation.",
//       primaryButton: { text: "Learn More", link: "/about" },
//       secondaryButton: { text: "Visit Us", link: "/contact" },
//     },
//     {
//       image: "/slider/agro2.jpg",
//       subtitle: "Our Vision & Mission",
//       title: "Cultivating Knowledge & Sustainability",
//       description:
//         "Vision: To become Bangladesh’s leading center for sustainable agro-tourism and research. Mission: Promote high-value agriculture, support young scientists, and preserve our agricultural heritage.",
//       primaryButton: { text: "Our Mission", link: "/vision" },
//       secondaryButton: { text: "Join Us", link: "/contact" },
//     },
//     {
//       image: "/slider/agro4.jpg",
//       subtitle: "Innovation in Agriculture",
//       title: "Growing the Future, Sustainably",
//       description:
//         "Experience the harmony of modern science and nature. At Pranto Agro, we blend research, technology, and tradition to build a smarter, greener future for Bangladesh’s agriculture.",
//       primaryButton: { text: "Discover More", link: "/about" },
//       secondaryButton: { text: "Our Research", link: "/research" },
//     },

//     {
//       image: "/slider/agro4.jpg",
//       subtitle: "Environment & Sustainability",
//       title: "A Greener Future for All",
//       description:
//         "We follow eco-friendly practices — organic composting, solar energy, rainwater harvesting, and biocontrol pest management — creating a sanctuary for both people and wildlife.",
//       primaryButton: { text: "See Initiatives", link: "/sustainability" },
//       secondaryButton: { text: "Volunteer", link: "/contact" },
//     },
//     {
//       image: "/slider/agro5.jpg",
//       subtitle: "Partnership & Growth",
//       title: "Investment & Expansion Opportunities",
//       description:
//         "With a solid foundation in agriculture and tourism, Pranto Agro welcomes partners and investors for eco-resorts, research facilities, and farm-to-market ventures.",
//       primaryButton: { text: "Explore Opportunities", link: "/investment" },
//       secondaryButton: { text: "Contact Team", link: "/contact" },
//     },
//   ],
// };

// const LandingPage = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sliderRef = useRef(null);
//   const textRefs = useRef([]);

//   useEffect(() => {
//     const currentText = textRefs.current[activeIndex];
//     if (currentText) {
//       gsap.fromTo(
//         currentText,
//         { opacity: 0, y: 10 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//       );
//     }
//   }, [activeIndex]);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 0,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     autoplay: true,
//     autoplaySpeed: 7000,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (_, next) => setActiveIndex(next),
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="relative w-full overflow-hidden group">
//       <Slider ref={sliderRef} {...settings}>
//         {sliderData.slides.map((slide, index) => (
//           <div
//             key={index}
//             className="relative w-full md:py-96 py-60 overflow-hidden"
//           >
//             <motion.div
//               key={`bg-${index}-${activeIndex}`}
//               initial={{ scale: 1.2 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 5, ease: "easeOut" }}
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             ></motion.div>

//             <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//             <motion.div
//               ref={(el) => (textRefs.current[index] = el)}
//               className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6"
//               initial="hidden"
//               animate={activeIndex === index ? "visible" : "hidden"}
//               variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
//             >
//               <motion.p
//                 className="uppercase tracking-widest text-sm text-emerald-200"
//                 variants={textVariants}
//               >
//                 {slide.subtitle}
//               </motion.p>

//               <motion.h1
//                 className="text-4xl md:text-6xl font-serif italic font-semibold mt-4"
//                 variants={textVariants}
//               >
//                 {slide.title}
//               </motion.h1>

//               <motion.p
//                 className="mt-4 text-base md:text-lg max-w-2xl text-gray-200"
//                 variants={textVariants}
//               >
//                 {slide.description}
//               </motion.p>

//               <motion.div
//                 className="mt-6 flex gap-4 flex-wrap justify-center"
//                 variants={textVariants}
//               >
//                 <Link href={slide.primaryButton.link}>
//                   <Button variant="primary">{slide.primaryButton.text}</Button>
//                 </Link>
//                 <Link href={slide.secondaryButton.link}>
//                   <Button variant="outline">
//                     {slide.secondaryButton.text}
//                   </Button>
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute z-20 top-1/2 left-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//     onClick={onClick}
//   >
//     <FaArrowLeft />
//   </div>
// );

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute z-20 top-1/2 right-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//     onClick={onClick}
//   >
//     <FaArrowRight />
//   </div>
// );

// export default LandingPage;
