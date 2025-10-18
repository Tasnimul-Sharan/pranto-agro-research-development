export default function AgroTourism() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Agro-Tourism Experience
        </h2>
        <p className="text-gray-700">
          Pranto Agro’s agro-tourism offers stay-in-the-farm experiences,
          hands-on workshops, nature exploration and cultural immersion.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold">Stay & Meals</h4>
            <p className="text-gray-700">
              Accommodation for individuals, families and research teams with
              traditional meals prepared from farm-fresh ingredients.
            </p>

            <h4 className="font-semibold mt-4">Activities</h4>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Crop planting & harvesting</li>
              <li>Aquaculture participation</li>
              <li>
                Workshops on composting, irrigation and greenhouse techniques
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Natural & Cultural</h4>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Boat rides around the island</li>
              <li>Bird watching & nature trails</li>
              <li>Evening bonfires and traditional cooking classes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
