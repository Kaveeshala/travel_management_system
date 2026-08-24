export default function BlogHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-950/55" />

      <div className="relative px-6 py-20 text-white sm:px-8 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-100">
            Travel journal
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Stories, Guides, and Inspiration for Better Travel
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Read destination ideas, booking tips, hotel insights, and practical
            travel advice curated for modern explorers.
          </p>
        </div>
      </div>
    </section>
  );
}