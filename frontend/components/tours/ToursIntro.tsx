export default function ToursIntro() {
  return (
    <section className="mt-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Featured tours
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
            Experiences tailored to your travel style
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Choose from beach holidays, adventure tours, honeymoon escapes,
            and premium city experiences with carefully curated itineraries.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Adventure
          </span>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Beach
          </span>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Honeymoon
          </span>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Luxury
          </span>
        </div>
      </div>
    </section>
  );
}