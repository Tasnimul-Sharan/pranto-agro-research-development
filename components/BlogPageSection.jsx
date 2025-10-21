"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BlogPageSection() {
  const { t } = useTranslation("common");

  const blogs = [
    {
      id: 1,
      img: "/blogs/overview/overview-1.jpg",
      date: t("blog_1_date"),
      author: t("blog_1_author"),
      title: t("blog_1_title"),
      desc: t("blog_1_desc"),
      slug: "sustainable-agro-tourism-bangladesh",
    },
    {
      id: 2,
      img: "/blogs/vision/vision-1.jpg",
      date: t("blog_2_date"),
      author: t("blog_2_author"),
      title: t("blog_2_title"),
      desc: t("blog_2_desc"),
      slug: "vision-mission-pranto-agro",
    },
    {
      id: 3,
      img: "/blogs/farming/farming-1.jpg",
      date: t("blog_3_date"),
      author: t("blog_3_author"),
      title: t("blog_3_title"),
      desc: t("blog_3_desc"),
      slug: "high-value-farming-pranto-agro",
    },
    {
      id: 4,
      img: "/blogs/fisheries/fisheries-1.jpg",
      date: t("blog_4_date"),
      author: t("blog_4_author"),
      title: t("blog_4_title"),
      desc: t("blog_4_desc"),
      slug: "sustainable-aquaculture-pranto-agro",
    },
    {
      id: 5,
      img: "/blogs/agrotourism/agrotourism-1.jpg",
      date: t("blog_5_date"),
      author: t("blog_5_author"),
      title: t("blog_5_title"),
      desc: t("blog_5_desc"),
      slug: "agro-tourism-experience",
    },
    {
      id: 6,
      img: "/blogs/research/research-1.jpg",
      date: "25 AUGUST, 2025",
      author: "BY PRANTO AGRO",
      title: t("blog_6_title"),
      desc: t("blog_6_desc"),
      slug: "research-education-pranto-agro",
    },
    {
      id: 7,
      img: "/blogs/museum/museum-1.jpg",
      date: "28 AUGUST, 2025",
      author: "BY PRANTO AGRO",
      title: t("blog_7_title"),
      desc: t("blog_7_desc"),
      slug: "agro-museum-bangladesh",
    },
    {
      id: 8,
      img: "/blogs/sustainability/sustainability-1.jpg",
      date: "30 AUGUST, 2025",
      author: "BY PRANTO AGRO",
      title: t("blog_8_title"),
      desc: t("blog_8_desc"),
      slug: "sustainability-pranto-agro",
    },
    {
      id: 9,
      img: "/blogs/investment/investment-1.jpg",
      date: "02 SEPTEMBER, 2025",
      author: "BY PRANTO AGRO",
      title: t("blog_9_title"),
      desc: t("blog_9_desc"),
      slug: "investment-opportunities-pranto-agro",
    },
    {
      id: 10,
      img: "/blogs/future/future-1.jpg",
      date: "05 SEPTEMBER, 2025",
      author: "BY PRANTO AGRO",
      title: t("blog_10_title"),
      desc: t("blog_10_desc"),
      slug: "future-goals-pranto-agro",
    },
  ];

  return (
    // <section className="py-20 bg-white relative">
    //   <div className="custom-container mx-auto">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {blogs.map((blog) => {
    //         const [hovered, setHovered] = useState(false);

    //         return (
    //           <div
    //             key={blog.id}
    //             className="rounded-lg overflow-hidden group"
    //             onMouseEnter={() => setHovered(true)}
    //             onMouseLeave={() => setHovered(false)}
    //           >
    //             <div className="relative w-full h-96 overflow-hidden rounded-t-lg">
    //               <motion.div
    //                 animate={{ scale: hovered ? 1.2 : 1 }}
    //                 transition={{ duration: 0.6, ease: "easeOut" }}
    //                 className="relative w-full h-full"
    //               >
    //                 <Image
    //                   src={blog.img}
    //                   alt={blog.title}
    //                   width={1200}
    //                   height={800}
    //                   className="object-cover w-full h-full"
    //                 />
    //               </motion.div>
    //             </div>
    //             <div className="bg-white relative z-0 mx-4 rounded-md px-6 py-6 -mt-10">
    //               <span className="bg-primary bg-opacity-10 text-primary font-semibold px-3 py-1 text-xs uppercase inline-block mb-4">
    //                 {blog.date}
    //               </span>
    //               <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
    //                 <span className="flex items-center gap-1">
    //                   <FaRegUser className="text-gray-400" /> {blog.author}
    //                 </span>
    //               </div>
    //               <h3 className="text-lg font-semibold text-gray-900 mb-4">
    //                 {blog.title}
    //               </h3>

    //               <Link
    //                 href={`/blogs/${blog.slug}`}
    //                 className="relative inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group"
    //               >
    //                 Read More <FaArrowRight />
    //                 <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
    //               </Link>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>

    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4b7155] mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore stories and articles from Pranto Agro’s research,
            sustainability, and innovation journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((blog) => {
            const [hovered, setHovered] = useState(false);

            return (
              <div
                key={blog.id}
                className="rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="relative w-full h-80 overflow-hidden">
                  <motion.div
                    animate={{ scale: hovered ? 1.1 : 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={1200}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>

                  <div className="absolute top-4 left-4 bg-[#5b8c51] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.date}
                  </div>
                </div>

                <div className="px-8 py-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <FaRegUser className="text-[#5b8c51]" />
                    <span>{blog.author}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#5b8c51] transition-all duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {blog.excerpt?.length > 120
                      ? blog.excerpt.slice(0, 120) + "..."
                      : blog.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-[#5b8c51] font-semibold group text-sm"
                  >
                    Read More
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}