import { Link } from "@tanstack/react-router";
import { FaBuilding, FaHeartbeat, FaMicrochip, FaMapMarkedAlt } from "react-icons/fa";

export default function UpcomingProjects() {
    return (
        <div className="w-full font-inria bg-white">

            {/* ================= HERO ================= */}
            <section className="bg-black text-white pt-40 pb-20 relative overflow-hidden text-center px-4">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Building The <span className="text-[#FDCF09]">Future</span>
                    </h1>
                    <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed">
                        Our vision for 2026 and beyond. Expanding our footprint, embracing technology, and deepening our impact.
                    </p>
                </div>
            </section>

            {/* ================= 1. NEW ACADEMIES & HUBS ================= */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="w-16 h-16 bg-[#FDCF09] text-black rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg">
                            <FaMapMarkedAlt />
                        </div>
                        <h2 className="text-4xl font-black text-black mb-6">New Centers & Hubs</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                            We are aggressively expanding our physical presence to reach the most remote corners of Bihar and Uttar Pradesh.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 text-2xl text-blue-600"><FaBuilding /></div>
                                <div>
                                    <h4 className="text-xl font-bold">5 New Academies</h4>
                                    <p className="text-zinc-500">Scheduled for Q3 2025: Patna, Gaya, Muzaffarpur, Varanasi, and Gorakhpur.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-2xl text-green-600"><FaMicrochip /></div>
                                <div>
                                    <h4 className="text-xl font-bold">10 Digital Learning Hubs</h4>
                                    <p className="text-zinc-500">Solar-powered, internet-enabled micro-hubs in deep rural villages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-100 rounded-2xl p-2 h-full min-h-[400px] flex items-center justify-center border-2 border-dashed border-zinc-300">
                        <img
                            src="/images/map.png"
                            alt="Map of Future Sites"
                            className="w-full h-full object-contain rounded-xl"
                        />
                    </div>
                </div>
            </section>

            {/* ================= 2. HEALTH CAMPS (TARGETED) ================= */}
            <section className="py-24 bg-zinc-900 text-white px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-block p-4 bg-red-600 rounded-full text-3xl mb-6 text-white shadow-lg shadow-red-600/20">
                        <FaHeartbeat />
                    </div>
                    <h2 className="text-4xl font-black mb-4">Mega Health Camps</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
                        Moving beyond basic checkups. We are launching specialized camps for targeted interventions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-zinc-800 p-8 rounded-xl border-t-4 border-red-500 hover:bg-zinc-750 transition">
                            <h4 className="text-2xl font-bold mb-2">Maternal Health</h4>
                            <p className="text-zinc-400 mb-4">100+ Camps</p>
                            <p className="text-sm text-zinc-500">Focusing on anemia detection and nutrition for pregnant women in tribal belts.</p>
                        </div>
                        <div className="bg-zinc-800 p-8 rounded-xl border-t-4 border-blue-500 hover:bg-zinc-750 transition">
                            <h4 className="text-2xl font-bold mb-2">Eye Care & Surgery</h4>
                            <p className="text-zinc-400 mb-4">Vision 2026</p>
                            <p className="text-sm text-zinc-500">Free cataract surgeries and spectacle distribution for 5,000 elderly citizens.</p>
                        </div>
                        <div className="bg-zinc-800 p-8 rounded-xl border-t-4 border-green-500 hover:bg-zinc-750 transition">
                            <h4 className="text-2xl font-bold mb-2">Child Immunity</h4>
                            <p className="text-zinc-400 mb-4">Zero Disease</p>
                            <p className="text-sm text-zinc-500">Deworming and vitamin supplementation drives for school children.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 3. TECHNOLOGY VISION ================= */}
            <section className="py-24 bg-zinc-50 text-zinc-900 px-4 relative overflow-hidden">
                {/* Abstract Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDCF09]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm mb-4">Innovation</h2>
                        <h3 className="text-4xl md:text-5xl font-black mb-6">Technology Vision</h3>
                        <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                            We are building the "SSF Connect" App — a unified platform to track student progress, manage donations transparently, and connect volunteers in real-time.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#FDCF09] rounded-full"></div>
                                <span className="font-bold text-zinc-800">Real-time Impact Dashboard for Donors</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#FDCF09] rounded-full"></div>
                                <span className="font-bold text-zinc-800">AI-Driven Learning Paths for Students</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#FDCF09] rounded-full"></div>
                                <span className="font-bold text-zinc-800">Blockchain for Fund Transparency</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <FaMicrochip className="text-4xl text-[#FDCF09]" />
                            <h4 className="text-2xl font-bold">Smart Classrooms</h4>
                        </div>
                        <p className="text-zinc-600">
                            By 2026, every SSF Academy will be a "Smart Classroom" equipped with interactive panels and gigabit internet, connecting rural students to the world's best teachers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-20 bg-black text-white text-center px-4">
                <h2 className="text-3xl font-black mb-4">
                    Invest in Our Future
                </h2>
                <p className="mb-6 text-zinc-400">
                    Partner with us to build these new centers.
                </p>
                <Link to="/Contact">
                    <button className="bg-[#FDCF09] text-black px-8 py-3 font-bold hover:bg-white transition">
                        Become a Vision Partner
                    </button>
                </Link>
            </section>

        </div>
    );
}
