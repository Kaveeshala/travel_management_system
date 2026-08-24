import DestinationCard from "@/components/destinations/DestinationCard";
import { destinations } from "@/lib/destination-data";

export default function DestinationsGrid() {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
}