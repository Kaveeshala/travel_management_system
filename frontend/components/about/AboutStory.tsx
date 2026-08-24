export default function AboutStory() {
  return (
    <section className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Our story
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
          Built to simplify travel planning for everyone
        </h2>
        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
          We created this platform to bring destination inspiration, easy booking
          choices, and trusted travel information into one modern experience.
        </p>
        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
          From quick weekend escapes to once-in-a-lifetime adventures, our goal
          is to help people plan smarter and travel with confidence.
        </p>
      </div>

      <div className="overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80"
          alt="Travel planning team"
          className="h-full min-h-[320px] w-full object-cover"
        />
      </div>
    </section>
  );
}