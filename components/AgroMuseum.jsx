export default function AgroMuseum() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Agro-Museum: A Heritage Project
        </h2>
        <p className="text-gray-700">
          The Agro-Museum chronicles Bangladeshi agriculture from traditional
          hand tools to modern mechanization and acts as an educational resource
          for children and adults.
        </p>

        <div className="mt-5 grid md:grid-cols-2 gap-6">
          <div className="text-gray-700">
            <ul className="list-disc pl-6 space-y-2">
              <li>Displays of traditional and modern farming tools</li>
              <li>Indigenous seed banks</li>
              <li>Interactive exhibits and hands-on displays</li>
            </ul>
          </div>
          <div className="text-gray-700">
            <p>
              Ideal for school groups, photographers, and researchers interested
              in the cultural history of farming in Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
