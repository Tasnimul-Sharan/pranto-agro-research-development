// export default function InfrastructureAmenities() {
//   return (
//     <section className="py-16 px-6 bg-emerald-50">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-semibold text-green-800 mb-4">
//           Infrastructure & Amenities
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-lg shadow p-5">
//             <h4 className="font-semibold mb-2">Lodging</h4>
//             <p className="text-gray-700">
//               10 cottages with twin beds, private bathrooms, and verandas.
//             </p>

//             <h4 className="font-semibold mt-4 mb-2">Dining & Seminar</h4>
//             <p className="text-gray-700">
//               Dining hall serving organic food and a 60-seat seminar hall for
//               workshops and training.
//             </p>
//           </div>

//           <div className="bg-white rounded-lg shadow p-5">
//             <h4 className="font-semibold mb-2">Other Facilities</h4>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2">
//               <li>Observation deck overlooking the island</li>
//               <li>Fishing gear and farm equipment for visitors</li>
//               <li>Solar lighting and rainwater harvesting systems</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  FaHome,
  FaUtensils,
  FaChalkboardTeacher,
  FaBinoculars,
  FaFish,
  FaSolarPanel,
} from "react-icons/fa";

export default function InfrastructureAmenities() {
  return (
    <section className="py-20 px-6 bg-emerald-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">
          Infrastructure & Amenities
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          Pranto Agro offers comfortable lodging, organic dining, and
          sustainable facilities designed to provide both comfort and a deep
          connection with nature.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Lodging */}
          <div className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition">
            <FaHome className="text-green-700 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-lg mb-2">Lodging</h4>
            <p className="text-gray-700">
              10 cottages with twin beds, private bathrooms, and verandas
              overlooking the greenery.
            </p>
          </div>

          {/* Dining Hall */}
          <div className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition">
            <FaUtensils className="text-green-700 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-lg mb-2">Dining Hall</h4>
            <p className="text-gray-700">
              Serves organic, locally grown meals prepared fresh from the farm’s
              own produce.
            </p>
          </div>

          {/* Seminar Hall */}
          <div className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition">
            <FaChalkboardTeacher className="text-green-700 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-lg mb-2">Seminar Hall</h4>
            <p className="text-gray-700">
              60-seat capacity hall for workshops, presentations, and training
              programs.
            </p>
          </div>

          {/* Observation Deck */}
          <div className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition">
            <FaBinoculars className="text-green-700 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-lg mb-2">Observation Deck</h4>
            <p className="text-gray-700">
              Elevated viewpoint offering panoramic views of the river and the
              surrounding island.
            </p>
          </div>

          {/* Fishing & Equipment */}
          <div className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition">
            <FaFish className="text-green-700 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-lg mb-2">
              Fishing & Farm Equipment
            </h4>
            <p className="text-gray-700">
              Fishing gear and farm tools available for visitors to experience
              rural activities.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition">
            <FaSolarPanel className="text-green-700 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-lg mb-2">
              Sustainable Facilities
            </h4>
            <p className="text-gray-700">
              Solar-powered lighting and rainwater harvesting systems across the
              property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
