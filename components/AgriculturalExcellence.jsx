export default function AgriculturalExcellence() {
  const highValue = [
    "Rock Melon (Cantaloupe)",
    "Honeydew Melon",
    "Capsicum (Bell Peppers)",
    "Squash (Zucchini)",
    "Commercial Grapevines",
  ];
  const yearRound = ["Tomatoes", "Green Chilies"];
  const orchards = ["Mango", "Guava", "Papaya", "Lemon", "Kul Boroi (Jujube)"];

  return (
    <section id="agriculture" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">
          Agricultural Excellence
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-lg p-5">
            <h3 className="font-semibold mb-2">High-Value Foreign Crops</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {highValue.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Year-Round Farming</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {yearRound.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Fruit Orchards</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {orchards.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-gray-700">
          Farming uses Controlled Environment Agriculture (CEA), greenhouses,
          drip irrigation, and bio-organic soil treatments to enable multiple
          harvests per year and high yields.
        </p>
      </div>
    </section>
  );
}
