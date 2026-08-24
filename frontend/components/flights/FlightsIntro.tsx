export default function FlightsIntro() {
  return (
    <section className="mt-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Flight offers
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
            Popular routes at competitive prices
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Browse featured flight deals with top airlines, clear timings,
            flexible routes, and prices that make trip planning easier.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            One Way
          </span>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Round Trip
          </span>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Budget
          </span>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Premium
          </span>
        </div>
      </div>
    </section>
  );
}