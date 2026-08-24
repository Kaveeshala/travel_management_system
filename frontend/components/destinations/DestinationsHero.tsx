export default function DestinationsHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-950/45" />

      <div className="relative px-6 py-20 text-white sm:px-8 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-100">
            Explore the world
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Discover Your Next Favorite Destination
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Browse handpicked destinations with stunning views, unforgettable
            experiences, and travel packages tailored for every kind of explorer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/90">
            <div className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              50+ Destinations
            </div>
            <div className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              Best Price Deals
            </div>
            <div className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              Trusted Travel Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}