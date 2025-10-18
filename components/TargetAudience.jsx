export default function TargetAudience() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Target Audience
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>Families seeking eco-friendly vacations</li>
            <li>University students and researchers</li>
            <li>Nature photographers and documentary makers</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>Agro-enthusiasts and hobby farmers</li>
            <li>NGOs and international development agencies</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
