import { Link } from "@tanstack/react-router";
import { FaGraduationCap, FaChalkboardTeacher, FaLaptopCode, FaRocket, FaBookOpen, FaUserCheck, FaRupeeSign } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function LearningHub() {
  return (
    <div className="w-full font-inria bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-zinc-900 text-white pt-40 pb-20 relative overflow-hidden text-center px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SSF National Academy <span className="text-[#FDCF09]">& Learning Hub</span>
          </h1>
          <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed">
            A hybrid education ecosystem blending physical centers with a state-of-the-art online learning hub.
          </p>
        </div>
      </section>

      {/* ================= 1. OBJECTIVE ================= */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-[#FDCF09]/20 text-[#FDCF09] rounded-2xl flex items-center justify-center text-3xl mb-6">
              <FaGraduationCap />
            </div>
            <h2 className="text-4xl font-black text-black mb-6">Our Objective</h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              To provide high-quality, free, and accessible education to underprivileged students across India. We aim to remove financial barriers and create a level playing field where every child can dream of a professional career.
            </p>
            <ul className="space-y-4">
              {[
                "Democratizing quality education",
                "Mentorship by industry experts",
                "Focus on holistic development"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-zinc-800">
                  <IoCheckmarkCircleSharp className="text-[#FDCF09] text-xl" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-zinc-100 rounded-2xl p-8 h-full min-h-[400px] flex items-center justify-center">
            {/* Placeholder for Image/Graphic */}
            <div className="text-center">
              <h3 className="text-6xl font-black text-zinc-200 mb-2">GOAL</h3>
              <p className="text-xl font-bold text-zinc-400">Educate. Empower. Elevate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. COURSES (NEW) ================= */}
      <section className="py-24 bg-zinc-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm mb-4">What We Teach</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black">Our Courses</h3>
            <p className="text-zinc-600 max-w-2xl mx-auto mt-4">Comprehensive curriculum covering school subjects, competitive exams, and future-ready skills.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-blue-600 text-4xl mb-6"><FaBookOpen /></div>
              <h4 className="text-xl font-bold mb-3">Foundational Learning</h4>
              <p className="text-zinc-500 mb-4 text-sm">Classes 6 to 10</p>
              <ul className="space-y-2 text-zinc-700 text-sm">
                <li>• Mathematics & Science</li>
                <li>• English Grammar</li>
                <li>• Social Studies</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-[#FDCF09] text-4xl mb-6"><FaLaptopCode /></div>
              <h4 className="text-xl font-bold mb-3">Skill Development</h4>
              <p className="text-zinc-500 mb-4 text-sm">Vocational & Digital</p>
              <ul className="space-y-2 text-zinc-700 text-sm">
                <li>• Basic Computer Course (BCC)</li>
                <li>• Coding for Kids</li>
                <li>• Spoken English & Personality</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-green-600 text-4xl mb-6"><FaRocket /></div>
              <h4 className="text-xl font-bold mb-3">Competitive Prep</h4>
              <p className="text-zinc-500 mb-4 text-sm">Career Focus</p>
              <ul className="space-y-2 text-zinc-700 text-sm">
                <li>• Navodaya / Sainik School</li>
                <li>• NTSE & Olympiads</li>
                <li>• Govt. Job Foundation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. REGISTRATION & FEE (NEW) ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Registration Process */}
          <div>
            <h3 className="text-3xl font-black text-black mb-8">Registration Process</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Apply</h4>
                  <p className="text-zinc-600">Fill out our simple online form or visit your nearest SSF Center to register.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Assessment</h4>
                  <p className="text-zinc-600">Take a basic baseline test so we can understand your current learning level.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#FDCF09] text-black rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Start Learning</h4>
                  <p className="text-zinc-600">Get allocated to a batch, receive your ID card, and begin your journey!</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/Contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                Register Now
              </Link>
            </div>
          </div>

          {/* Fee Model */}
          <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-full text-green-600 text-2xl"><FaRupeeSign /></div>
              <h3 className="text-3xl font-black text-black">Affordable Model</h3>
            </div>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              We believe cost should never be a barrier. Our dual-model ensures sustainability while serving the neediest.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
                <h4 className="text-xl font-bold text-black mb-1">100% Free</h4>
                <p className="text-zinc-500 text-sm mb-3">For Extreme Need</p>
                <p className="text-zinc-700 text-sm">
                  Orphans, children of widows, and Antyodaya card holders receive education, materials, and support completely free of cost.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-l-4 border-[#FDCF09] shadow-sm">
                <h4 className="text-xl font-bold text-black mb-1">Nominal Fee</h4>
                <p className="text-zinc-500 text-sm mb-3">For Sustainability</p>
                <p className="text-zinc-700 text-sm">
                  A highly subsidized monthly fee for others to help cover center rent, electricity, and teacher stipends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. EDUCATIONAL MODEL (EXISTING) ================= */}
      <section className="py-24 bg-zinc-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm mb-4">Delivery Modes</h2>
            <h3 className="text-4xl md:text-5xl font-black">How We Teach</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-black">
            {/* Offline */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-black hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl text-black mb-6"><FaChalkboardTeacher /></div>
              <h4 className="text-2xl font-bold mb-4">Offline Centers</h4>
              <p className="text-zinc-600">
                Physical learning centers in rural villages providing direct mentorship and discipline.
              </p>
            </div>

            {/* Online */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#FDCF09] hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl text-[#FDCF09] mb-6"><FaLaptopCode /></div>
              <h4 className="text-2xl font-bold mb-4">Online Hub</h4>
              <p className="text-zinc-600">
                Access to recorded lectures, live webinars, and digital notes via our app/portal.
              </p>
            </div>

            {/* Hybrid */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl text-blue-600 mb-6"><FaRocket /></div>
              <h4 className="text-2xl font-bold mb-4">Hybrid Learning</h4>
              <p className="text-zinc-600">
                Regular doubt-clearing sessions locally, supported by digital expert classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. EXPANSION PLAN ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-12">Our Expansion Plan</h2>
          <div className="relative border-l-4 border-zinc-200 ml-6 md:ml-auto md:mr-auto md:w-2 space-y-16">
            {/* Item 1 */}
            <div className="relative md:w-[50vw] md:ml-[20px] md:text-left text-left pl-8 md:pl-12">
              <div className="absolute top-0 left-[-11px] md:left-[-11px] w-6 h-6 bg-black rounded-full border-4 border-white"></div>
              <h4 className="text-2xl font-bold">2025: Establish 50 Centers</h4>
              <p className="text-zinc-600">Targeting 50 rural districts in Bihar and UP.</p>
            </div>
            {/* Item 2 */}
            <div className="relative md:w-[50vw] md:ml-[20px] md:text-left text-left pl-8 md:pl-12">
              <div className="absolute top-0 left-[-11px] md:left-[-11px] w-6 h-6 bg-[#FDCF09] rounded-full border-4 border-white"></div>
              <h4 className="text-2xl font-bold">2027: Digital Integrated Grid</h4>
              <p className="text-zinc-600">Connecting all centers via a centralized digital learning grid.</p>
            </div>
            {/* Item 3 */}
            <div className="relative md:w-[50vw] md:ml-[20px] md:text-left text-left pl-8 md:pl-12">
              <div className="absolute top-0 left-[-11px] md:left-[-11px] w-6 h-6 bg-zinc-400 rounded-full border-4 border-white"></div>
              <h4 className="text-2xl font-bold">2030: Pan-India Academy</h4>
              <p className="text-zinc-600">Reaching 100,000+ students across 20 states.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-blue-600 text-white text-center px-4">
        <h2 className="text-3xl font-black mb-4">
          Help Build the Future
        </h2>
        <p className="mb-6">
          Sponsor a child's education today.
        </p>
        <Link to="/DonateAndSupport">
          <button className="bg-white text-blue-600 px-8 py-3 font-bold">
            Donate to Academy
          </button>
        </Link>
      </section>

    </div>
  );
}
