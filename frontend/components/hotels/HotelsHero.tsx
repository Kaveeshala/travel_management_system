export default function HotelsHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-950/55" />

      <div className="relative px-6 py-20 text-white sm:px-8 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-100">
            Stay in comfort
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Find Hotels That Match Your Style and Budget
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Discover luxury resorts, boutique city stays, and relaxing beachside
            escapes with trusted amenities and competitive nightly rates.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/90">
            <div className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              Best Rated Hotels
            </div>
            <div className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              Flexible Stays
            </div>
            <div className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              Great Value Deals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}