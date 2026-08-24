import BlogCard from "@/components/blogs/BlogCard";
import { blogPosts } from "@/lib/blog-data";

export default function BlogGrid() {
  const posts = blogPosts.slice(1);

  return (
    <section className="mt-10">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Latest posts
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-gray-900">
          Fresh reads for curious travelers
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
