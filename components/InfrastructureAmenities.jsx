export default function InfrastructureAmenities() {
  return (
    <section className="py-16 px-6 bg-emerald-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Infrastructure & Amenities
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-5">
            <h4 className="font-semibold mb-2">Lodging</h4>
            <p className="text-gray-700">
              10 cottages with twin beds, private bathrooms, and verandas.
            </p>

            <h4 className="font-semibold mt-4 mb-2">Dining & Seminar</h4>
            <p className="text-gray-700">
              Dining hall serving organic food and a 60-seat seminar hall for
              workshops and training.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-5">
            <h4 className="font-semibold mb-2">Other Facilities</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Observation deck overlooking the island</li>
              <li>Fishing gear and farm equipment for visitors</li>
              <li>Solar lighting and rainwater harvesting systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
