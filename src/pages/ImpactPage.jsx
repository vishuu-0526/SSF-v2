import { Link } from "@tanstack/react-router";
import { FaQuoteLeft, FaHandHoldingHeart, FaStar, FaUserGraduate } from "react-icons/fa";

export default function ImpactPage() {
    const studentStories = [
        {
            name: "Raju Kumar",
            role: "Class 10 Student",
            img: "/images/students_learn1.png",
            title: "From Child Labor to Class Topper",
            desc: "Raju was working in a tea shop to support his family. Identifyed during our 2023 survey, he was enrolled in our bridge course. Today, he ranks 1st in his school and dreams of becoming an engineer.",
            tags: ["Education", "Transformation"]
        },
        {
            name: "Sita Kumari",
            role: "Skill Trainee",
            img: "/images/girls.png",
            title: "Breaking Barriers with Code",
            desc: "Coming from a village where girls rarely study past 8th grade, Sita joined our Digital Literacy program. She now works as a data entry operator, supporting her entire family.",
            tags: ["Skills", "Empowerment"]
        },
        {
            name: "Amit & Sumit",
            role: "Scholarship Recipients",
            img: "/images/students.png",
            title: "Brothers in Arms",
            desc: "Both brothers lost their father during COVID. SSF's 'Shiksha Suraksha' sponsorship covered their fees. They recently cleared the polytechnic entrance exam together.",
            tags: ["Scholarship", "Resilience"]
        }
    ];

    const volunteerStories = [
        {
            name: "Priya Sharma",
            role: "Volunteer Teacher",
            quote: "I thought I was going to teach them, but these children taught me resilience. Seeing their hunger for knowledge changes you forever.",
        },
        {
            name: "Rahul Verma",
            role: "Community Mentor",
            quote: "Helping a village get clean water access was the proudest moment of my life. SSF gave me the platform to serve real people.",
        }
    ];

    return (
        <div className="w-full font-inria bg-white">

            {/* ================= HERO ================= */}
            <section className="bg-zinc-900 text-white pt-40 pb-20 relative overflow-hidden text-center px-4">
                <div className="max-w-4xl mx-auto relative z-10">
                    <p className="text-[#FDCF09] font-bold tracking-widest uppercase mb-4">Real Lives. Real Change.</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Impact <span className="text-[#FDCF09]">& Success Stories</span>
                    </h1>
                    <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed">
                        Behind every number is a name, a face, and a story of transformation.
                    </p>
                </div>
            </section>

            {/* ================= 1. STUDENT STORIES ================= */}
            <section className="py-24 px-4 bg-zinc-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-black text-black mb-12 text-center">Student Success Stories</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {studentStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group">
                                <div className="h-64 bg-zinc-200 relative overflow-hidden">
                                    <img
                                        src={story.img}
                                        alt={story.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                    <div className="absolute bottom-4 left-4 flex gap-2">
                                        {story.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-black/70 text-white text-xs font-bold rounded-full backdrop-blur-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#FDCF09] transition">{story.title}</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                                        "{story.desc}"
                                    </p>
                                    <div className="flex items-center gap-3 border-t border-zinc-100 pt-4">
                                        <div className="w-10 h-10 bg-[#FDCF09] rounded-full flex items-center justify-center font-bold text-sm">
                                            {story.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{story.name}</h4>
                                            <p className="text-xs text-zinc-500">{story.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= 2. VOLUNTEER IMPACT ================= */}
            <section className="py-24 bg-blue-600 text-white px-4 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-3xl font-black mb-12 text-center">Volunteer Voices</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {volunteerStories.map((vol, i) => (
                            <div key={i} className="bg-blue-700/50 p-8 rounded-2xl border border-blue-400/30 backdrop-blur-md relative">
                                <FaQuoteLeft className="text-4xl text-blue-300/40 absolute top-6 left-6" />
                                <p className="text-xl italic font-medium leading-relaxed mb-6 relative z-10">
                                    "{vol.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl">
                                        <FaHandHoldingHeart />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{vol.name}</h4>
                                        <p className="text-blue-200 text-sm">{vol.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= 3. RESULTS & STATS ================= */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-black mb-4">Our Results Speak</h2>
                    <p className="text-zinc-500 mb-16">Tangible impact delivered over the last decade.</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-6 border border-zinc-100 rounded-2xl shadow-sm hover:border-[#FDCF09] transition">
                            <div className="text-4xl font-black text-[#FDCF09] mb-2">15k+</div>
                            <p className="font-bold text-zinc-800">Children Educated</p>
                        </div>
                        <div className="p-6 border border-zinc-100 rounded-2xl shadow-sm hover:border-[#FDCF09] transition">
                            <div className="text-4xl font-black text-blue-600 mb-2">85%</div>
                            <p className="font-bold text-zinc-800">Exam Pass Rate</p>
                        </div>
                        <div className="p-6 border border-zinc-100 rounded-2xl shadow-sm hover:border-[#FDCF09] transition">
                            <div className="text-4xl font-black text-green-600 mb-2">2000+</div>
                            <p className="font-bold text-zinc-800">Youth Employed</p>
                        </div>
                        <div className="p-6 border border-zinc-100 rounded-2xl shadow-sm hover:border-[#FDCF09] transition">
                            <div className="text-4xl font-black text-red-500 mb-2">50+</div>
                            <p className="font-bold text-zinc-800">Villages Adopted</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-20 bg-zinc-900 text-white text-center px-4">
                <h2 className="text-3xl font-black mb-4">
                    Create More Stories Like This
                </h2>
                <p className="mb-6 text-zinc-400">
                    Your support writes the next chapter for a child in need.
                </p>
                <Link to="/DonateAndSupport">
                    <button className="bg-[#FDCF09] text-black px-8 py-3 font-bold hover:bg-white transition">
                        Donate Now
                    </button>
                </Link>
            </section>

        </div>
    );
}
