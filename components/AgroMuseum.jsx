// export default function AgroMuseum() {
//   return (
//     <section className="py-16 px-6 bg-white">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-semibold text-green-800 mb-4">
//           Agro-Museum: A Heritage Project
//         </h2>
//         <p className="text-gray-700">
//           The Agro-Museum chronicles Bangladeshi agriculture from traditional
//           hand tools to modern mechanization and acts as an educational resource
//           for children and adults.
//         </p>

//         <div className="mt-5 grid md:grid-cols-2 gap-6">
//           <div className="text-gray-700">
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Displays of traditional and modern farming tools</li>
//               <li>Indigenous seed banks</li>
//               <li>Interactive exhibits and hands-on displays</li>
//             </ul>
//           </div>
//           <div className="text-gray-700">
//             <p>
//               Ideal for school groups, photographers, and researchers interested
//               in the cultural history of farming in Bangladesh.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  FaSeedling,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaPhotoVideo,
} from "react-icons/fa";

export default function AgroMuseum() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">
          Agro-Museum: A Heritage Project
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          The Agro-Museum at Pranto Agro proudly showcases the rich legacy of
          Bangladeshi agriculture—from ancient hand tools to modern
          mechanization. It serves as a bridge between the past and present,
          offering visitors a hands-on educational experience about the
          evolution of farming and rural life.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Traditional & Modern Tools */}
          <div className="bg-emerald-50 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <FaHandsHelping className="text-green-700 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-lg mb-2">
              Traditional & Modern Tools
            </h4>
            <p className="text-gray-700">
              Exhibits showcasing farming tools from hand-crafted ploughs to
              modern agricultural machinery.
            </p>
          </div>

          {/* Indigenous Seed Banks */}
          <div className="bg-emerald-50 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <FaSeedling className="text-green-700 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-lg mb-2">
              Indigenous Seed Banks
            </h4>
            <p className="text-gray-700">
              Preserving Bangladesh’s traditional seed varieties and promoting
              sustainable farming practices.
            </p>
          </div>

          {/* Educational Exhibits */}
          <div className="bg-emerald-50 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <FaChalkboardTeacher className="text-green-700 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-lg mb-2">
              Educational & Interactive Displays
            </h4>
            <p className="text-gray-700">
              Interactive exhibits designed for students and children to learn
              through hands-on experiences and models.
            </p>
          </div>

          {/* Photography & Research */}
          <div className="bg-emerald-50 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <FaPhotoVideo className="text-green-700 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-lg mb-2">
              For Researchers & Photographers
            </h4>
            <p className="text-gray-700">
              A nostalgic and educational space perfect for school groups,
              researchers, and photographers exploring rural heritage.
            </p>
          </div>
        </div>

        <p className="text-gray-700 max-w-3xl mx-auto mt-12">
          This museum stands as both an educational resource for students and a
          heartfelt reminder for adults of Bangladesh’s deep-rooted agricultural
          traditions.
        </p>
      </div>
    </section>
  );
}
