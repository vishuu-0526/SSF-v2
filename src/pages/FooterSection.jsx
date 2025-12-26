import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="w-full bg-zinc-900 text-white mt-0 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP: Newsletter & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-zinc-800 pb-12">

          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              {/* Using text logo if image not optimized for dark mode, or filter it */}
              <div className="text-2xl font-bold tracking-tighter text-white">
                SWASTIK <span className="text-[#FDCF09]">SRIJAN</span>
              </div>
            </Link>
            <p className="text-zinc-400 leading-relaxed">
              Ensuring that every child has a happy, healthy, and creative childhood. Join the movement to change lives today.
            </p>

            {/* Socials */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaYoutube, href: "#" }
              ].map((Item, i) => (
                <a key={i} href={Item.href} className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-[#FDCF09] hover:text-black transition-all">
                  <Item.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-[#FDCF09] uppercase tracking-wider mb-6 text-sm">About Us</h4>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li><Link to="/#about" className="hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link to="/Journey" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/Members" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/Media" className="hover:text-white transition-colors">Media Centre</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#FDCF09] uppercase tracking-wider mb-6 text-sm">Get Involved</h4>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li><Link to="/DonateAndSupport" className="hover:text-white transition-colors">Donate</Link></li>
                <li><Link to="/Volunteer" className="hover:text-white transition-colors">Volunteer</Link></li>
                <li><Link to="/Campaign" className="hover:text-white transition-colors">Campaigns</Link></li>
                <li><Link to="/Contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#FDCF09] uppercase tracking-wider mb-6 text-sm">Legal</h4>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li><Link to="/TermsAndConditions" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link to="/PrivacyPolicy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/CookiePolicy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-sm">Subscribe</h4>
              <p className="text-zinc-500 text-xs mb-4">Latest updates on our work.</p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-2 rounded focus:outline-none focus:border-[#FDCF09] text-sm"
                />
                <button
                  onClick={() => alert("Thank you for subscribing!")}
                  className="w-full bg-[#FDCF09] text-black font-bold uppercase text-xs py-2 rounded hover:bg-white transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Swastik Srijan Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Registered NGO</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> 80G Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
