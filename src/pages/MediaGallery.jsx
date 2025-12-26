import { useState, useEffect } from "react";
import { FaEye, FaTimes, FaFilter, FaCamera } from "react-icons/fa";

// Auto-generate image list based on files 1-51
const generateImages = () => {
  const imgs = [];
  const categories = ["Education", "Health", "Women Empowerment", "Events", "Distribution"];
  const years = ["2024", "2023", "2022"];

  for (let i = 1; i <= 51; i++) {
    // Deterministic pseudo-random assignment for demo purposes so it looks varied but stable
    const catIndex = (i * 7) % categories.length;
    const yearIndex = (i * 3) % years.length;

    imgs.push({
      id: i,
      src: `/Gallery_Images/image${i}.jpg`,
      category: categories[catIndex],
      year: years[yearIndex],
      alt: `Swastik Srijan Activity - ${categories[catIndex]}`,
      // Random aspect ratio simulation for masonry effect using filtered classes in rendering
      aspect: i % 3 === 0 ? "vertical" : i % 4 === 0 ? "square" : "horizontal"
    });
  }
  return imgs;
};

const ALL_IMAGES = generateImages();
const CATEGORIES = ["All", "Education", "Health", "Women Empowerment", "Events", "Distribution"];
const YEARS = ["All", "2024", "2023", "2022"];

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);
  const [filteredImages, setFilteredImages] = useState(ALL_IMAGES);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter Logic
  useEffect(() => {
    const filtered = ALL_IMAGES.filter((img) => {
      const catMatch = activeCategory === "All" || img.category === activeCategory;
      const yearMatch = activeYear === "All" || img.year === activeYear;
      return catMatch && yearMatch;
    });
    setFilteredImages(filtered);
  }, [activeCategory, activeYear]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImg]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="w-full bg-zinc-50 font-inria min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-zinc-900 text-white pt-40 pb-24 px-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDCF09] opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#FDCF09]/20 text-[#FDCF09] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            <FaCamera className="inline-block mr-2" /> Our Visual Journey
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Media <span className="text-[#FDCF09]">Gallery</span>
          </h1>
          <p className="text-zinc-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Glimpses of our impact, events, and the smiles we've spread across communities. Witness the change we are making together.
          </p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-zinc-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col xl:flex-row gap-6 items-center justify-between">

            {/* Categories */}
            <div className="flex gap-2 pb-2 xl:pb-0 overflow-x-auto w-full xl:w-auto no-scrollbar mask-gradient">
              <span className="flex items-center gap-2 text-zinc-400 font-bold mr-2 text-sm uppercase tracking-wider">
                <FaFilter /> Type:
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border
                    ${activeCategory === cat
                      ? "bg-[#FDCF09] text-black border-[#FDCF09] shadow-md transform scale-105"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-[#FDCF09] hover:text-black"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Years */}
            <div className="flex gap-2 overflow-x-auto w-full xl:w-auto no-scrollbar">
              <span className="flex items-center gap-2 text-zinc-400 font-bold mr-2 text-sm uppercase tracking-wider">
                Year:
              </span>
              {YEARS.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setActiveYear(yr)}
                  className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border
                    ${activeYear === yr
                      ? "bg-black text-white border-black shadow-md transform scale-105"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-black hover:text-black"}`}
                >
                  {yr}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="max-w-[1600px] mx-auto py-12 px-4">

        {filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl text-zinc-200 mb-4">📷</div>
            <h3 className="text-2xl font-bold text-zinc-400">No images found</h3>
            <p className="text-zinc-500">Try adjusting your filters.</p>
          </div>
        ) : (
          /* Masonry-like CSS Columns */
          <div className="columns-2 md:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-zinc-200 cursor-zoom-in"
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="bg-[#FDCF09] text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                      {img.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">{img.category} Drive</h3>
                    <p className="text-zinc-300 text-sm mt-1">{img.year}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <FaEye />
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all"
            onClick={() => setSelectedImg(null)}
          >
            <FaTimes size={24} />
          </button>

          <div
            className="relative max-w-7xl w-full max-h-[90vh] flex flex-col md:flex-row bg-zinc-900 rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="flex-1 bg-black flex items-center justify-center p-4 md:p-8">
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="max-w-full max-h-[70vh] md:max-h-[85vh] object-contain shadow-2xl"
              />
            </div>

            {/* Sidebar Details (Visible on Desktop, stacked on Mobile) */}
            <div className="w-full md:w-80 bg-zinc-900 p-8 border-l border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-[#FDCF09] font-bold tracking-wider text-sm uppercase mb-2 block">
                  {selectedImg.year}
                </span>
                <h3 className="text-2xl font-white font-bold text-white mb-4">
                  {selectedImg.category} Activity
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {selectedImg.alt}. Every picture tells a story of change, hope, and progress.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-zinc-300 text-sm border-b border-zinc-800 pb-2">
                    <span className="text-zinc-500 w-24">Date:</span> {selectedImg.year}
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300 text-sm border-b border-zinc-800 pb-2">
                    <span className="text-zinc-500 w-24">Category:</span> {selectedImg.category}
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300 text-sm border-b border-zinc-800 pb-2">
                    <span className="text-zinc-500 w-24">Location:</span> Bihar, India
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  className="w-full bg-white text-black font-bold py-3 rounded hover:bg-[#FDCF09] transition-colors"
                  onClick={() => setSelectedImg(null)}
                >
                  Close Gallery
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
