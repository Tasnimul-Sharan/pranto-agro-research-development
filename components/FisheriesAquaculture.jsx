export default function FisheriesAquaculture() {
  const species = [
    "Rui (Rohu)",
    "Katla",
    "Silver Carp",
    "Pangas",
    "Tilapia",
    "Shrimp",
  ];

  return (
    <section className="py-16 px-6 bg-emerald-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Fisheries & Aquaculture
        </h2>

        <p className="text-gray-700 mb-4">
          The island hosts multiple large ponds operating under a semi-intensive
          polyculture model that balances ecology and yield.
        </p>

        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="font-semibold mb-2">Key Species</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {species.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="mt-4 text-gray-700">
            Visitor activities include feeding sessions, participatory
            harvesting, and aquaculture learning modules.
          </p>
        </div>
      </div>
    </section>
  );
}
