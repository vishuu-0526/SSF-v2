import { Link } from "@tanstack/react-router";
import { FaBuilding, FaHandshake, FaUniversity, FaChalkboardTeacher, FaGlobeAsia } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function PartnerWithUs() {
    return (
        <div className="w-full font-inria bg-white">

            {/* ================= HERO ================= */}
            <section className="bg-zinc-900 text-white pt-40 pb-20 relative overflow-hidden text-center px-4">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Partner <span className="text-[#FDCF09]">With Us</span>
                    </h1>
                    <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed">
                        Alone we can do so little; together we can do so much. Join forces with SSF to amplify impact.
                    </p>
                </div>
            </section>

            {/* ================= 1. CSR COLLABORATION ================= */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <div className="order-2 md:order-1">
                        <div className="w-16 h-16 bg-[#FDCF09] text-black rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                            <FaBuilding />
                        </div>
                        <h2 className="text-4xl font-black text-black mb-6">CSR Partnerships</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                            We help corporates fulfill their social responsibility goals with transparent, continuous, and measurable impact projects.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-zinc-50 p-4 border-l-4 border-black">
                                <h4 className="font-bold text-lg">Compliance Ready</h4>
                                <p className="text-zinc-500 text-sm">We are 12A, 80G, and CSR-1 certified.</p>
                            </div>
                            <div className="bg-zinc-50 p-4 border-l-4 border-[#FDCF09] ">
                                <h4 className="font-bold text-lg">Impact Reporting</h4>
                                <p className="text-zinc-500 text-sm">Quarterly detailed reports with financial transparency.</p>
                            </div>
                            <div className="bg-zinc-50 p-4 border-l-4 border-blue-600">
                                <h4 className="font-bold text-lg">Employee Engagement</h4>
                                <p className="text-zinc-500 text-sm">Volunteering opportunities for your workforce.</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 bg-zinc-100 rounded-2xl h-[400px] flex items-center justify-center">
                        <div className="text-center">
                            <FaHandshake className="text-8xl text-zinc-300 mx-auto mb-4" />
                            <h3 className="text-3xl font-black text-zinc-400">CORPORATE</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 2. OTHER PARTNERSHIPS ================= */}
            <section className="py-24 bg-zinc-900 text-white px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm mb-4">Ecosystem</h2>
                        <h3 className="text-4xl md:text-5xl font-black">Collaboration Models</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-black">
                        {/* Institutions */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-blue-600">
                            <FaUniversity className="text-4xl text-blue-600 mb-6" />
                            <h4 className="text-2xl font-bold mb-4">Institutions</h4>
                            <p className="text-zinc-600 mb-6">
                                Schools, colleges, and training institutes can partner with us for student exchange, internship programs, and knowledge sharing.
                            </p>
                            <ul className="text-sm font-bold text-zinc-700 space-y-2">
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-blue-600" /> Campus Chapters</li>
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-blue-600" /> Research Projects</li>
                            </ul>
                        </div>

                        {/* Trainers */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-[#FDCF09]">
                            <FaChalkboardTeacher className="text-4xl text-[#FDCF09] mb-6" />
                            <h4 className="text-2xl font-bold mb-4">Expert Trainers</h4>
                            <p className="text-zinc-600 mb-6">
                                Subject matter experts and industry veterans can join as guest faculty or curriculum advisors for our National Academy.
                            </p>
                            <ul className="text-sm font-bold text-zinc-700 space-y-2">
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-[#FDCF09]" /> Guest Lectures</li>
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-[#FDCF09]" /> Curriculum Design</li>
                            </ul>
                        </div>

                        {/* NGOs */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-green-600">
                            <FaGlobeAsia className="text-4xl text-green-600 mb-6" />
                            <h4 className="text-2xl font-bold mb-4">NGO Partners</h4>
                            <p className="text-zinc-600 mb-6">
                                Grassroot organizations can collaborate to implement our models in new geographies. Let's scale impact together.
                            </p>
                            <ul className="text-sm font-bold text-zinc-700 space-y-2">
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-green-600" /> Joint Implementation</li>
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-green-600" /> Resource Sharing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-20 bg-[#FDCF09] text-black text-center px-4">
                <h2 className="text-3xl font-black mb-4">
                    Become a Partner
                </h2>
                <p className="mb-6 text-zinc-800 text-lg">
                    Reach out to our partnership team today.
                </p>
                <Link to="/Contact">
                    <button className="bg-black text-white px-8 py-3 font-bold hover:bg-white hover:text-black transition border-2 border-black">
                        Contact Partnership Team
                    </button>
                </Link>
            </section>

        </div>
    );
}
