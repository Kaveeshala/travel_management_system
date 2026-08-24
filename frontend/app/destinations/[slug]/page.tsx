import { notFound } from "next/navigation";
import { destinations } from "@/lib/destination-data";
import HomeNavbar from "@/components/layout/HomeNavbar";
import NewsletterFooter from "@/components/home/NewsletterFooter";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export default function DestinationDetailsPage({ params }: Props) {
  const destination = destinations.find(
    (item) => item.slug === params.slug
  );

  if (!destination) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="relative bg-slate-100 px-4 pb-10 pt-4 sm:px-6 md:px-10 lg:px-16 lg:pt-6">
        <div className="absolute inset-x-0 top-0 z-20">
          <HomeNavbar />
        </div>

        <div className="mx-auto max-w-7xl pt-24 sm:pt-28 lg:pt-32">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-gray-100">
            <img
              src={destination.image}
              alt={destination.name}
              className="h-[320px] w-full object-cover sm:h-[420px]"
            />

            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Destination details
                </p>

                <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                  {destination.name}, {destination.country}
                </h1>

                <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                  {destination.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Duration
                    </p>
                    <p className="mt-2 font-semibold text-gray-900">
                      {destination.duration}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Rating
                    </p>
                    <p className="mt-2 font-semibold text-gray-900">
                      {destination.rating} / 5
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Price
                    </p>
                    <p className="mt-2 font-semibold text-gray-900">
                      {destination.price}
                    </p>
                  </div>
                </div>
              </div>

              <aside className="rounded-[1.75rem] bg-slate-50 p-6 ring-1 ring-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  Plan this trip
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Perfect for travelers looking for a smooth, memorable holiday
                  experience with curated stays and flexible packages.
                </p>

                <button className="mt-6 w-full rounded-full bg-blue-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800">
                  Book Now
                </button>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <NewsletterFooter />
    </main>
  );
}