export default function ResearchEducation() {
  return (
    <section className="py-16 px-6 bg-emerald-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Research & Education
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Pranto Agro is not just a tourism destination — it is a living
          laboratory dedicated to fostering agricultural innovation and
          education. Through research, experimentation, and collaboration, we
          aim to create a model for sustainable and modern farming practices.
        </p>

        <div className="bg-white rounded-lg shadow p-6">
          {/* <h3 className="font-semibold mb-3 text-green-800">
            Key Initiatives & Opportunities
          </h3> */}
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Free support for agricultural students and researchers</li>
            <li>Land access for pilot experiments and field trials</li>
            <li>
              Assistance in land preparation, planting, weeding, and harvesting
            </li>
            <li>On-site lodging and meals for research teams</li>
            <li>
              Partnerships with universities, agricultural colleges, and NGOs
              for long-term collaboration
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
