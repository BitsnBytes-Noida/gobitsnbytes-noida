export default function Gallery() {
  const galleryImages = [
    "/events/varchasva/1.jpg",
    "/events/varchasva/2.jpg",
    "/events/varchasva/3.jpg",
    "/events/varchasva/4.jpg",
    "/events/varchasva/5.jpg",
    "/events/varchasva/6.jpg",
  ];

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          COMMUNITY HIGHLIGHTS
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Bits&Bytes Moments
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          A glimpse into the builders, events and moments that shape the
          Bits&Bytes community.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {/* Large Left */}
          <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20 lg:row-span-2">
            <img
              src={galleryImages[0]}
              alt="Gallery Image 1"
              className="h-[520px] w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>

          {/* Top Right */}
          <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20">
            <img
              src={galleryImages[1]}
              alt="Gallery Image 2"
              className="h-[250px] w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>

          <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20">
            <img
              src={galleryImages[2]}
              alt="Gallery Image 3"
              className="h-[250px] w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>

          <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20">
            <img
              src={galleryImages[3]}
              alt="Gallery Image 4"
              className="h-[250px] w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>

          <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20">
            <img
              src={galleryImages[4]}
              alt="Gallery Image 5"
              className="h-[250px] w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>

          {/* Large Bottom Right */}
          <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20 lg:col-span-2">
            <img
              src={galleryImages[5]}
              alt="Gallery Image 6"
              className="h-[250px] w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}