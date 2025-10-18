// "use client";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FiEye } from "react-icons/fi";

// export default function Gallery() {
//   const router = useRouter();

//   const gallery = [
//     {
//       img: "/gallery/gallery1.jpg",
//       title: "View from the balcony",
//       slug: "balcony-view",
//     },
//     {
//       img: "/gallery/gallery2.jpg",
//       title: "Balcony view of the project",
//       slug: "project-balcony",
//     },
//     {
//       img: "/gallery/gallery3.jpg",
//       title: "Interior view of the project",
//       slug: "interior-view",
//     },
//     {
//       img: "/gallery/gallery4.jpg",
//       title: "Project Top View",
//       slug: "project-top-view",
//     },
//     {
//       img: "/gallery/gallery5.jpg",
//       title: "Project building view",
//       slug: "project-building-view",
//     },
//     {
//       img: "/gallery/gallery6.jpg",
//       title: "Ground view",
//       slug: "ground-view",
//     },
//   ];

//   const subtitle = "Our Works";
//   const title = "Explore Our Gallery";

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="custom-container mx-auto py-16">
//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <p className="uppercase font-medium text-primary tracking-[0.15em] text-sm">
//           {subtitle}
//         </p>
//         <h2 className="text-secondary text-3xl md:text-4xl font-bold mt-2">
//           {title}
//         </h2>
//       </motion.div>

//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {gallery.map((itemData, idx) => (
//           <motion.div
//             key={idx}
//             variants={item}
//             className="relative overflow-hidden rounded-md group cursor-pointer"
//             onClick={() => router.push(`/gallery/${itemData.slug}`)}
//           >
//             <Image
//               src={itemData.img}
//               alt={itemData.title}
//               width={1200}
//               height={1200}
//               className="w-full h-full object-cover transition-all transform duration-1000 ease-in group-hover:scale-125"
//             />

//             <div className="absolute inset-0 flex items-end justify-center p-4">
//               <button
//                 className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
//                 transition-all duration-500 ease-out bg-primary text-white px-6 py-4 rounded-md
//                 flex items-center gap-2"
//               >
//                 <FiEye className="text-lg" />
//                 See Details
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery() {
  const gallery = [
    { img: "/gallery/gallery1.jpg", title: "View from the balcony" },
    { img: "/gallery/gallery2.jpg", title: "Balcony view of the project" },
    { img: "/gallery/gallery3.jpg", title: "Interior view of the project" },
    { img: "/gallery/gallery4.jpg", title: "Project Top View" },
    { img: "/gallery/gallery5.jpg", title: "Project building view" },
    { img: "/gallery/gallery6.jpg", title: "Ground view" },
  ];

  const subtitle = "Our Works";
  const title = "Explore Our Gallery";

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="custom-container mx-auto py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase font-medium text-primary tracking-[0.15em] text-sm">
          {subtitle}
        </p>
        <h2 className="text-secondary text-3xl md:text-4xl font-bold mt-2">
          {title}
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {gallery.map((itemData, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="relative overflow-hidden rounded-md group cursor-pointer"
            onClick={() => handleImageClick(idx)}
          >
            <Image
              src={itemData.img}
              alt={itemData.title}
              width={1200}
              height={1200}
              className="w-full h-full object-cover transition-all transform duration-1000 ease-in group-hover:scale-125"
            />

            <div className="absolute inset-0 flex items-end justify-center p-4">
              <button
                className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-out bg-primary text-white px-6 py-4 rounded-md
                flex items-center gap-2"
              >
                <FiEye className="text-lg" />
                View Photo
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={gallery.map((g) => ({ src: g.img, description: g.title }))}
          index={currentIndex}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          thumbnails={{ position: "bottom" }}
          captions={{ position: "below" }}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
          slideshow={{ autoplay: false }}
        />
      )}
    </div>
  );
}
