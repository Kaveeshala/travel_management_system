import TourCard from "@/components/tours/TourCard";
import { tours } from "@/lib/tour-data";

export default function ToursGrid() {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}