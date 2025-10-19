export default function FisheriesAquaculture() {
  const species = [
    "Rui (Rohu)",
    "Katla",
    "Silver Carp",
    "Pangas",
    "Tilapia",
    "Shrimp",
  ];

  const activities = [
    "Feeding sessions",
    "Fish harvesting activities",
    "Learning modules on aquaculture",
  ];

  return (
    <section className="py-16 px-6 bg-emerald-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Fisheries & Aquaculture
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          The island hosts <strong>9 large fisheries ponds</strong>, each
          specializing in different native and exotic freshwater species. The
          fish farming practice follows a{" "}
          <strong>semi-intensive polyculture model</strong>, maintaining
          ecological balance while maximizing yield.
        </p>

        {/* Key Species */}
        <div className="bg-white rounded-lg shadow p-5 mb-6">
          <h3 className="font-semibold text-lg mb-2 text-green-700">
            Key Species
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {species.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Visitor Activities */}
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="font-semibold text-lg mb-2 text-green-700">
            Visitor Activities
          </h3>
          <p className="text-gray-700 mb-3">
            Visitors can actively engage in several enriching aquaculture
            experiences including:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
