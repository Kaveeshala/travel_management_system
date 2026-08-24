import HomeNavbar from "@/components/layout/HomeNavbar";
import NewsletterFooter from "@/components/home/NewsletterFooter";
import BlogFeatured from "@/components/blogs/BlogFeatured";
import BlogGrid from "@/components/blogs/BlogGrid";
import BlogHero from "@/components/blogs/BlogHero";

export default function BlogPage() {
  return (
    <main className="bg-white">
      <section className="relative bg-slate-100 px-4 pb-10 pt-4 sm:px-6 md:px-10 lg:px-16 lg:pt-6">
        <div className="absolute inset-x-0 top-0 z-20">
          <HomeNavbar />
        </div>

        <div className="mx-auto max-w-7xl pt-20 sm:pt-24 lg:pt-28">
          <BlogHero />
          <BlogFeatured />
          <BlogGrid />
        </div>
      </section>

      <NewsletterFooter />
    </main>
  );
}
