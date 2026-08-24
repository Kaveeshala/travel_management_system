export default function AboutHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative px-6 py-20 text-white sm:px-8 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-100">
            About us
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            We Help Travelers Discover Better Journeys
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Our team is passionate about making travel easier, more inspiring,
            and more reliable through curated destinations, flights, tours, and stays.
          </p>
        </div>
      </div>
    </section>
  );
}