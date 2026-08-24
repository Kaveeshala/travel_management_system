import { blogPosts } from "@/lib/blog-data";

export default function BlogFeatured() {
  const featured = blogPosts[0];

  return (
    <section className="mt-10">
      <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-gray-100 lg:grid-cols-2">
        <div className="h-full">
          <img
            src={featured.image}
            alt={featured.title}
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
            Featured Post
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-gray-900">
            {featured.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            {featured.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{featured.author}</span>
            <span>{featured.date}</span>
            <span>{featured.readTime}</span>
          </div>

          <button className="mt-8 w-fit rounded-full bg-blue-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800">
            Read Article
          </button>
        </div>
      </div>
    </section>
  );
}