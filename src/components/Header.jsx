import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  /* 🔒 Close dropdown on outside click (CRY-style) */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" onClick={closeAll} className="flex items-center gap-2">
          <img src="/logo.svg" alt="SSF Logo" className="w-12" />
          <span className="font-bold text-xl tracking-tight text-black hidden sm:block">
            Swastik Srijan Foundation
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-base font-bold text-zinc-800">

          <Link to="/" onClick={closeAll} className="hover:text-[#FDCF09] transition-colors">
            Home
          </Link>

          <Link to="/#about" onClick={closeAll} className="hover:text-[#FDCF09] transition-colors">
            About Us
          </Link>

          <Link to="/Campaign" onClick={closeAll} className="hover:text-[#FDCF09] transition-colors">
            Our Work
          </Link>

          <Link to="/#join-us" onClick={closeAll} className="hover:text-[#FDCF09] transition-colors">
            Join Us
          </Link>

          {/* MORE (CLICK BASED) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-[#FDCF09] transition-colors"
            >
              More
              <IoIosArrowDown
                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-12 right-0 w-64 bg-white border border-zinc-200 shadow-xl rounded-b-lg overflow-hidden">
                <ul className="flex flex-col text-sm font-semibold">
                  <Link to="/DonateAndSupport" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b border-zinc-100 last:border-0">
                    Donate & Support
                  </Link>
                  <Link to="/UpcomingProjects" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b border-zinc-100 last:border-0">
                    Upcoming Projects
                  </Link>
                  <Link to="/Impact" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b border-zinc-100 last:border-0">
                    Impact Stories
                  </Link>
                  <Link to="/Blog" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b border-zinc-100 last:border-0">
                    Blog
                  </Link>
                  <Link to="/Media" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b border-zinc-100 last:border-0">
                    Media Gallery
                  </Link>
                  <Link to="/PartnerWithUs" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b border-zinc-100 last:border-0">
                    Partner With Us
                  </Link>
                  <Link to="/Contact" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b border-zinc-100 last:border-0">
                    Contact Us
                  </Link>
                  <Link to="/TermsAndConditions" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b border-zinc-100 last:border-0">
                    Terms & Conditions
                  </Link>
                </ul>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
            target="_blank"
          >
            <button className="btn-cry-primary">
              Donate Now
            </button>
          </a>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl text-zinc-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto pb-20">
          <nav className="flex flex-col p-6 text-lg font-bold text-zinc-800 divide-y divide-zinc-100">
            <Link to="/" onClick={closeAll} className="py-4">Home</Link>
            <Link to="/#about" onClick={closeAll} className="py-4">About Us</Link>
            <Link to="/Campaign" onClick={closeAll} className="py-4">Our Work</Link>
            <Link to="/#join-us" onClick={closeAll} className="py-4">Join Us</Link>
            <Link to="/DonateAndSupport" onClick={closeAll} className="py-4">Donate & Support</Link>
            <Link to="/Blog" onClick={closeAll} className="py-4">Blog</Link>
            <Link to="/Media" onClick={closeAll} className="py-4">Media Gallery</Link>
            <Link to="/Contact" onClick={closeAll} className="py-4">Contact Us</Link>

            <div className="pt-6 mt-2">
              <a
                href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                target="_blank"
              >
                <button className="w-full btn-cry-primary text-center">
                  Donate Now
                </button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

