import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/app/data/blogPosts"; // assuming this is your data file

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-white grid md:grid-cols-4 gap-10">
      {/* Left (Main Content) */}
      <div className="md:col-span-3">
        <Link
          href="/blog"
          className="text-sm text-accent hover:underline mb-4 inline-block"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-4xl md:text-3xl font-bold mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-white/70 mb-6 flex-wrap">
          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">
            {post.tags[0]}
          </span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <button className="ml-auto text-sm hover:underline">Share ↗</button>
        </div>

        <div className="rounded-lg border border-white/10 overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <article
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Right (Sidebar) */}
      <aside className="md:col-span-1">
        <div className="bg-[#0e0f11] border border-white/10 rounded-lg p-4 sticky top-20">
          <h3 className="text-lg font-semibold text-white mb-3">📂 Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-accent">Career Growth (1)</li>
            <li className="hover:text-accent transition">Full Stack Development (2)</li>
            <li className="hover:text-accent transition">Web Development (3)</li>
          </ul>
        </div>
      </aside>
    </main>
  );
}
