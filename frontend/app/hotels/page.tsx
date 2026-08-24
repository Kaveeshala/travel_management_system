import HomeNavbar from "@/components/layout/HomeNavbar";
import NewsletterFooter from "@/components/home/NewsletterFooter";
import HotelsGrid from "@/components/hotels/HotelsGrid";
import HotelsHero from "@/components/hotels/HotelsHero";
import HotelsIntro from "@/components/hotels/HotelsIntro";

export default function HotelsPage() {
  return (
    <main className="bg-white">
      <section className="relative bg-slate-100 px-4 pb-10 pt-4 sm:px-6 md:px-10 lg:px-16 lg:pt-6">
        <div className="absolute inset-x-0 top-0 z-20">
          <HomeNavbar />
        </div>

        <div className="mx-auto max-w-7xl pt-20 sm:pt-24 lg:pt-28">
          <HotelsHero />
          <HotelsIntro />
          <HotelsGrid />
        </div>
      </section>

      <NewsletterFooter />
    </main>
  );
}