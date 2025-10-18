export default function ImageGallery() {
  const images = [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80",
    "https://images.unsplash.com/photo-1501004318642-4f3f9b6b6e2f?w=1200&q=80",
    "https://images.unsplash.com/photo-1501004318643-8f5a2b9b5b2e?w=1200&q=80",
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-green-800 mb-6">
          Gallery (Sample Images)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="rounded overflow-hidden shadow">
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
