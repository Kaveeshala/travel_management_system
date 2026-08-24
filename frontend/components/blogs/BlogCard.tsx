import type { BlogPost } from "@/lib/blog-data";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={post.image}
        alt={post.title}
        className="h-56 w-full object-cover"
      />

      <div className="space-y-4 p-5">
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
          {post.category}
        </span>

        <h3 className="text-xl font-semibold leading-snug text-gray-900">
          {post.title}
        </h3>

        <p className="text-sm leading-6 text-gray-600">{post.excerpt}</p>

        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
          Read More
        </button>
      </div>
    </article>
  );
}