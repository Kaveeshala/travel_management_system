import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    price: "$450",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    price: "$620",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Santorini",
    country: "Greece",
    price: "$580",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Dubai",
    country: "UAE",
    price: "$500",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function PopularDestinations() {
  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Popular Destinations
            </h2>
          </div>

          <Button
            variant="outline"
            className="cursor-pointer rounded-full border-blue-200 px-5 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {destination.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>{destination.country}</span>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Starting from
                    </p>
                    <p className="mt-1 text-base font-semibold text-blue-700">
                      {destination.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
