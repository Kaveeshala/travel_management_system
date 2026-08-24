import HotelCard from "@/components/hotels/HotelCard";
import { hotels } from "@/lib/hotel-data";

export default function HotelsGrid() {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}