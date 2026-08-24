import HomeNavbar from "@/components/layout/HomeNavbar";
import DestinationsHero from "@/components/destinations/DestinationsHero";
import DestinationsIntro from "@/components/destinations/DestinationsIntro";
import DestinationsGrid from "@/components/destinations/DestinationsGrid";
import NewsletterFooter from "@/components/home/NewsletterFooter";

export default function DestinationsPage() {
  return (
    <main className="bg-white">
      <section className="relative bg-slate-100 px-4 pb-10 pt-4 sm:px-6 md:px-10 lg:px-16 lg:pt-6">
        <div className="absolute inset-x-0 top-0 z-20">
          <HomeNavbar />
        </div>

        <div className="mx-auto max-w-7xl pt-20 sm:pt-24 lg:pt-28">
          <DestinationsHero />
          <DestinationsIntro />
          <DestinationsGrid />
        </div>
      </section>

      <NewsletterFooter />
    </main>
  );
}