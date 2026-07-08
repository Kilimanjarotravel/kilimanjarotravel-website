export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Gallery
        </h1>

        <p className="mb-10 text-center text-gray-600">
          Explore some of our unforgettable Tanzania safari, Kilimanjaro trekking,
          Zanzibar and wildlife moments.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["/images/lion.jpeg", "Lion"],
            ["/images/landcruiser.jpeg", "Safari Vehicle"],
            ["/images/zanzibar.jpeg", "Zanzibar"],
            ["/images/fleet.jpeg", "Fleet"],
            ["/images/safari-vehicle.jpeg", "Safari"],
            ["/images/logo.jpeg", "Logo"],
          ].map(([src, alt]) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className="h-72 w-full rounded-xl object-cover shadow-lg transition duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </main>
  );
}