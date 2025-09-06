"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SearchAndFilter from "@/components/SearchAndFilter";
import StayInLoop from "@/components/StayInLoop";
import { blogPosts } from "@/app/data/blogPosts";


// Dummy blog posts
// const blogPosts = [
//   {
//     title: "Creating Engaging UI with Framer Motion",
//     slug: "engaging-ui-framer-motion",
//     description:
//       "Learn how to craft interactive, animated interfaces with Framer Motion in modern React apps.",
//     content: ``,
//     image: "/assets/blog/social.png",
//     date: "July 5, 2025",
//     readTime: "6 min read",
//     tags: ["Animation", "React", "Framer Motion"],
//   },
//   {
//     title: "From Zero to Hero: Building with Next.js & MongoDB",
//     slug: "nextjs-mongodb-guide",
//     description:
//       "A complete guide to developing and deploying fullstack apps using Next.js and MongoDB.",
//     image: "/assets/blog/fullstack.png",
//     date: "June 28, 2025",
//     readTime: "8 min read",
//     tags: ["Fullstack", "Next.js", "MongoDB"],
//   },
//   {
//     title: "Modern React Patterns You Should Know",
//     slug: "modern-react-patterns",
//     description:
//       "Explore advanced hooks, context usage, and scalable architecture for React applications.",
//     image: "/assets/blog/react.jpg",
//     date: "June 10, 2025",
//     readTime: "7 min read",
//     tags: ["React", "Best Practices", "Frontend"],
//   },
//   {
//     title: "The Ultimate Guide to Next.js Performance Optimization",
//     slug: "nextjs-performance-tips",
//     description:
//       "Improve performance with caching, image optimization, and lazy loading in Next.js apps.",
//     image: "/assets/blog/nextjs.webp",
//     date: "June 15, 2025",
//     readTime: "9 min read",
//     tags: ["Next.js", "Performance", "Optimization"],
//   },
//   {
//     title: "Design Hacks for Standout Developer Portfolios",
//     slug: "developer-portfolio-design",
//     description:
//       "Learn simple but effective UI techniques to make your dev portfolio look professional.",
//     image: "/assets/blog/portfolio.png",
//     date: "June 12, 2025",
//     readTime: "6 min read",
//     tags: ["Design", "UI", "Portfolio"],
//   },
//   {
//     title: "Mastering the Art of Personal Branding for Developers",
//     slug: "developer-branding-guide",
//     description:
//       "Tips and tools to showcase your work and personality as a developer online.",
//     image: "/assets/blog/portfolio.png",
//     date: "June 18, 2025",
//     readTime: "5 min read",
//     tags: ["Branding", "Career", "Portfolio"],
//   },
//   {
//     title: "Top 5 Mistakes to Avoid in Your Developer Portfolio",
//     slug: "portfolio-mistakes-to-avoid",
//     description:
//       "Learn common design and content pitfalls developers make when building their personal websites.",
//     image: "/assets/blog/portfolio.png",
//     date: "June 22, 2025",
//     readTime: "5 min read",
//     tags: ["Portfolio", "Design", "Tips"],
//   },
//   {
//     title: "Essential Tools for Modern Web Development in 2025",
//     slug: "web-dev-tools-2025",
//     description:
//       "Stay ahead of the curve with this list of must-have tools and libraries for frontend and fullstack devs.",
//     image: "/assets/blog/portfolio.png",
//     date: "June 25, 2025",
//     readTime: "6 min read",
//     tags: ["Tools", "Web Development", "2025"],
//   },
// ];

const slideFromTop = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const slideFromBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const uniqueTags = [...new Set(blogPosts.flatMap((post) => post.tags || []))];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const featuredPost = blogPosts[0];

  const remainingPosts = blogPosts.filter(
    (post) => post.slug !== featuredPost.slug
  );

  const filteredPosts = remainingPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === "All" || selectedTag === ""
        ? true
        : post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <motion.section
      className="min-h-screen py-6 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <motion.div
        variants={slideFromTop}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-accent">My Blog</h2>
        <p className="text-white/60 mt-2 max-w-xl mx-auto">
          Insights, tutorials, and thoughts on modern development.
        </p>
      </motion.div>

      <motion.div
        variants={slideFromBottom}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <SearchAndFilter
          search={searchTerm}
          setSearch={(val) => {
            setSearchTerm(val);
            setCurrentPage(1);
          }}
          filter={selectedTag}
          setFilter={(val) => {
            setSelectedTag(val);
            setCurrentPage(1);
          }}
          filterOptions={["All", ...uniqueTags]}
        />
      </motion.div>

      {/* Featured Post */}
      <motion.div
        variants={slideFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white border-l-4 border-accent pl-4 mb-6">
              Featured Post
            </h2>
            <motion.div
              className="bg-[#111218] border border-white/10 rounded-xl overflow-hidden hover:border-accent transition-all grid md:grid-cols-2"
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative w-full h-64 md:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center space-y-3">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {featuredPost.title}
                </h3>
                <p className="text-white/60">{featuredPost.description}</p>
                <p className="text-xs text-accent">
                  {featuredPost.date} • {featuredPost.readTime}
                </p>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="text-accent text-sm hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* All Posts */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold text-white border-l-4 border-accent pl-4 mb-6">
          All Post
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
            <motion.div
              key={post.slug}
              className="bg-[#111218] border border-white/10 rounded-xl overflow-hidden hover:border-accent transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full h-[180px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm">{post.description}</p>
                <p className="text-xs text-accent">
                  {post.date} • {post.readTime}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-accent hover:underline text-sm mt-2"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-10 gap-2"
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-full text-sm ${
                currentPage === i + 1
                  ? "bg-accent text-black"
                  : "bg-white/10 text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </motion.div>
      )}
      <StayInLoop />
    </motion.section>
  );
};

export default Blog;
