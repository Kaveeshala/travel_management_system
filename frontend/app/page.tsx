import HomeNavbar from '@/components/layout/HomeNavbar';
import SearchTabs from '@/components/home/SearchTabs';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full min-h-screen bg-[url('/images/homescreen.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />

        <HomeNavbar />

        <div className="relative z-10 flex min-h-screen items-center px-4 pt-24 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-xl text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-2 backdrop-blur-sm sm:mb-6 sm:px-4">
              <span className="text-base sm:text-lg">✈️</span>
              <span className="text-[11px] font-medium tracking-wide sm:text-sm">
                EXPLORE, DREAM, DISCOVER
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Discover Amazing
            </h1>
            <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Places with Us
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-100 sm:mt-6 sm:text-base">
              Find the best tours, hotels and flights: everything you need for
              the perfect trip.
            </p>

            <button className="mt-6 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 sm:mt-8 sm:px-6">
              Explore Now
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 z-20 w-full max-w-6xl -translate-x-1/2 translate-y-1/3 px-4 sm:translate-y-1/2 sm:px-6">
          <SearchTabs />
        </div>
      </section>

      <section className="min-h-screen px-4 pb-16 pt-56 sm:px-6 sm:pt-64 md:px-10 lg:px-16">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Popular travel options
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
          Add destinations, hotel cards, tour packages, and offers here.
        </p>
      </section>
    </main>
  );
}