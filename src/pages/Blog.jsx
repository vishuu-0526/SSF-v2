import { useEffect, useState } from "react";
import { FaBookOpen, FaBriefcase, FaBullhorn, FaSearch } from "react-icons/fa";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const BLOG_ID = import.meta.env.VITE_BLOG_ID;
  const API_KEY = import.meta.env.VITE_BLOGGER_API_KEY;

  const categories = [
    { name: "All", icon: null },
    { name: "Education", icon: <FaBookOpen /> },
    { name: "Career Guidance", icon: <FaBriefcase /> },
    { name: "Awareness", icon: <FaBullhorn /> }
  ];

  useEffect(() => {
    async function fetchPosts() {
      if (!BLOG_ID || !API_KEY) {
        // Fallback for demo if env vars are missing
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }

        const data = await response.json();
        const items = data.items || [];
        setPosts(items);
        setFilteredPosts(items);
      } catch (err) {
        setError("Unable to load knowledge center posts.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [BLOG_ID, API_KEY]);

  // Filter Logic
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(posts);
      return;
    }

    const lowerCat = activeCategory.toLowerCase();
    const filtered = posts.filter(post => {
      const content = (post.title + " " + post.content).toLowerCase();
      // Simple keyword matching for demo purposes
      if (activeCategory === "Education") return content.includes("education") || content.includes("school") || content.includes("study");
      if (activeCategory === "Career Guidance") return content.includes("career") || content.includes("job") || content.includes("skill");
      if (activeCategory === "Awareness") return !content.includes("career") && !content.includes("education"); // Fallback for others
      return true;
    });
    setFilteredPosts(filtered);
  }, [activeCategory, posts]);


  if (error) {
    return (
      <div className="pt-40 text-center text-red-600 font-semibold min-h-[50vh]">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full bg-zinc-50 pt-32 pb-20 px-4 font-inria min-h-screen">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-black">
          Knowledge <span className="text-blue-600">Center</span>
        </h1>
        <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
          Empowering you with articles on Education, Career Guidance, and Social Awareness.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="max-w-4xl mx-auto mb-12 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${activeCategory === cat.name
              ? "bg-[#FDCF09] text-black shadow-lg scale-105"
              : "bg-white text-zinc-600 hover:bg-zinc-200"
              }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* LOADING STATE */}
      {loading && (
        <div className="text-center py-20">
          <div className="animate-spin text-4xl text-blue-600 mb-4 inline-block"><FaSearch /></div>
          <p className="text-zinc-500">Loading articles...</p>
        </div>
      )}

      {/* BLOG GRID */}
      {!loading && filteredPosts.length > 0 && (
        <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {!loading && filteredPosts.length === 0 && posts.length > 0 && (
        <div className="text-center py-20 text-zinc-500">
          No articles found in this category.
        </div>
      )}

      {/* EMPTY STATE (No API Keys) */}
      {!loading && posts.length === 0 && (
        <div className="text-center py-20 opacity-50">
          <p className="text-xl font-bold">No articles available.</p>
          <p>Please check back later.</p>
        </div>
      )}

    </div>
  );
}

/* ================= BLOG CARD ================= */
function BlogCard({ post }) {
  const image = extractImage(post.content);
  const excerpt = stripHtml(post.content).slice(0, 120);

  return (
    <div className="bg-white border text-left rounded-xl overflow-hidden hover:translate-y-[-5px] hover:shadow-xl transition duration-300 flex flex-col h-full">

      {image ? (
        <img
          src={image}
          alt={post.title}
          className="h-52 w-full object-cover"
        />
      ) : (
        <div className="h-52 bg-zinc-100 flex items-center justify-center text-sm text-zinc-400">
          <FaBookOpen className="text-4xl opacity-20" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs font-bold text-[#FDCF09] uppercase tracking-wider mb-2">
          Article
        </p>

        <h2 className="text-xl font-bold line-clamp-2 mb-3 text-zinc-900 leading-tight">
          {post.title}
        </h2>

        <p className="text-sm text-zinc-600 line-clamp-3 mb-6 flex-grow">
          {excerpt}...
        </p>

        <div className="pt-4 border-t border-zinc-100 flex justify-between items-center">
          <span className="text-xs text-zinc-400">{new Date(post.published).toDateString()}</span>
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold text-sm hover:underline"
          >
            Read Article →
          </a>
        </div>
      </div>

    </div>
  );
}

/* ================= UTILS ================= */
function extractImage(html = "") {
  try {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const img = doc.querySelector("img");
    return img?.src || null;
  } catch {
    return null;
  }
}

function stripHtml(html = "") {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || "";
}
