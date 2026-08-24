export default function ToursHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-950/50" />

      <div className="relative px-6 py-20 text-white sm:px-8 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-100">
            Curated experiences
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Find Tours Designed for Every Kind of Traveler
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Explore handpicked tour packages with flexible durations, trusted
            support, and unforgettable destinations around the world.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/90">
            <div className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              Guided Tours
            </div>
            <div className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              Flexible Packages
            </div>
            <div className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              Best Travel Deals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}