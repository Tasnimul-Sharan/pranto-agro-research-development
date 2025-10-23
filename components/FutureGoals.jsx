export default function FutureGoals() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Future Goals
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Develop a 50-bed eco-lodge with extended amenities</li>
          <li>Introduce exotic crops and hydroponic farming</li>
          <li>Launch certified agro-education programs</li>
          <li>Create a digital archive of agricultural knowledge</li>
          <li>Host an annual "Agro-Fair Festival"</li>
        </ul>
      </div>
    </section>
  );
}

// import Image from "next/image";

// export default function FutureGoals() {
//   const goals = [
//     {
//       number: "01",
//       title: "Develop a 50-bed eco-lodge with extended amenities",
//       description:
//         "A sustainable eco-lodge designed to host visitors, offering extended hospitality and eco-friendly accommodations within the island.",
//     },
//     {
//       number: "02",
//       title: "Introduce exotic crops and hydroponic farming",
//       description:
//         "Implement advanced hydroponic systems and cultivate high-value exotic crops to enhance agricultural diversity and productivity.",
//     },
//     {
//       number: "03",
//       title: "Launch certified agro-education programs",
//       description:
//         "Provide practical training and workshops for students and farmers to promote innovation and hands-on agricultural learning.",
//     },
//     {
//       number: "04",
//       title: "Create a digital archive of agricultural knowledge",
//       description:
//         "Build an open-access online repository featuring research, best practices, and success stories from local agricultural initiatives.",
//     },
//     {
//       number: "05",
//       title: `Host an annual "Agro-Fair Festival"`,
//       description:
//         "Celebrate sustainable agriculture through an annual event showcasing innovation, local produce, and cultural exchange.",
//     },
//   ];

//   return (
//     <section className="bg-[#5B8C51] text-white py-20 px-6 relative overflow-hidden">
//       <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 max-w-7xl mx-auto">
//         <div>
//           <span className="bg-white text-[#5B8C51] px-3 py-1 rounded-full text-sm font-semibold">
//             Our Vision
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mt-3">
//             Future Goals for Agricultural Excellence
//           </h2>
//         </div>

//         <p className="text-white/90 md:w-1/2 mt-4 md:mt-6 md:text-left leading-relaxed">
//           To ensure long-term sustainability, innovation, and prosperity, we aim
//           to strengthen our agricultural initiatives through research,
//           education, and modern technology.
//         </p>
//       </div>
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
//         {/* Left Image */}
//         <div className="md:w-1/2 relative">
//           <div className="overflow-hidden rounded-2xl shadow-lg">
//             <Image
//               src="/images/future-vission.jpg" // 🖼️ replace with your image path
//               alt="Future Goals"
//               width={600}
//               height={400}
//               className="object-cover w-full h-full transform hover:scale-105 transition duration-700"
//             />
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="md:w-1/2">
//           {/* Header split into two columns */}

//           {/* Goals */}
//           <div className="space-y-5">
//             {goals.map((goal) => (
//               <div
//                 key={goal.number}
//                 className="flex items-start gap-4 border-b border-white/20 pb-4"
//               >
//                 <div className="text-3xl font-bold text-white/80 min-w-[40px]">
//                   {goal.number}
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold">{goal.title}</h4>
//                   <p className="text-white/80 text-sm mt-1">
//                     {goal.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // import Image from "next/image";

// // export default function FutureGoals() {
// //   const goals = [
// //     {
// //       number: "01",
// //       title: "Develop a 50-bed eco-lodge with extended amenities",
// //       description:
// //         "A sustainable eco-lodge designed to host visitors, offering extended hospitality and eco-friendly accommodations within the island.",
// //     },
// //     {
// //       number: "02",
// //       title: "Introduce exotic crops and hydroponic farming",
// //       description:
// //         "Implement advanced hydroponic systems and cultivate high-value exotic crops to enhance agricultural diversity and productivity.",
// //     },
// //     {
// //       number: "03",
// //       title: "Launch certified agro-education programs",
// //       description:
// //         "Provide practical training and workshops for students and farmers to promote innovation and hands-on agricultural learning.",
// //     },
// //     {
// //       number: "04",
// //       title: "Create a digital archive of agricultural knowledge",
// //       description:
// //         "Build an open-access online repository featuring research, best practices, and success stories from local agricultural initiatives.",
// //     },
// //     {
// //       number: "05",
// //       title: 'Host an annual "Agro-Fair Festival"',
// //       description:
// //         "Celebrate sustainable agriculture through an annual event showcasing innovation, local produce, and cultural exchange.",
// //     },
// //   ];

// //   return (
// //     <section className="bg-[#5B8C51] text-white py-20 px-6 relative overflow-hidden">
// //       {/* Top Title Section */}
// //       <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between mb-12">
// //         <div className="md:w-1/2">
// //           <span className="bg-white text-[#5B8C51] px-3 py-1 rounded-full text-sm font-semibold">
// //             Our Vision
// //           </span>
// //           <h2 className="text-3xl md:text-4xl font-bold mt-3">
// //             Future Goals for Agricultural Excellence
// //           </h2>
// //         </div>

// //         <p className="md:w-1/2 mt-4 md:mt-0 text-white/90 leading-relaxed">
// //           To ensure long-term sustainability, innovation, and prosperity, we aim
// //           to strengthen our agricultural initiatives through research,
// //           education, and modern technology.
// //         </p>
// //       </div>

// //       {/* Content Section */}
// //       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
// //         {/* Left Image */}
// //         <div className="md:w-1/2 h-full flex">
// //           <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
// //             <Image
// //               src="/images/future-vission.jpg"
// //               alt="Future Goals"
// //               width={1200}
// //               height={1200}
// //               className="object-cover w-full h-full transform hover:scale-105 transition duration-700"
// //             />
// //           </div>
// //         </div>

// //         {/* Right Goals */}
// //         <div className="md:w-1/2 flex flex-col justify-between bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
// //           <div className="space-y-6">
// //             {goals.map((goal) => (
// //               <div
// //                 key={goal.number}
// //                 className="flex items-start gap-4 border-b border-white/20 pb-4 last:border-0"
// //               >
// //                 <div className="text-3xl font-bold text-white/80 min-w-[40px]">
// //                   {goal.number}
// //                 </div>
// //                 <div>
// //                   <h4 className="text-lg font-semibold">{goal.title}</h4>
// //                   <p className="text-white/80 text-sm mt-1">
// //                     {goal.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
