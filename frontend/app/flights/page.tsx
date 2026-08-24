import HomeNavbar from "@/components/layout/HomeNavbar";
import NewsletterFooter from "@/components/home/NewsletterFooter";
import FlightsGrid from "@/components/flights/FlightsGrid";
import FlightsHero from "@/components/flights/FlightsHero";
import FlightsIntro from "@/components/flights/FlightsIntro";

export default function FlightsPage() {
  return (
    <main className="bg-white">
      <section className="relative bg-slate-100 px-4 pb-10 pt-4 sm:px-6 md:px-10 lg:px-16 lg:pt-6">
        <div className="absolute inset-x-0 top-0 z-20">
          <HomeNavbar />
        </div>

        <div className="mx-auto max-w-7xl pt-20 sm:pt-24 lg:pt-28">
          <FlightsHero />
          <FlightsIntro />
          <FlightsGrid />
        </div>
      </section>

      <NewsletterFooter />
    </main>
  );
}