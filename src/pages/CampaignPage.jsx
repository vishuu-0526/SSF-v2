import { Link } from "@tanstack/react-router";
import { FaBook, FaStethoscope, FaTools, FaBalanceScale, FaUsers, FaArrowRight } from "react-icons/fa";

export default function Campaign() {
  const programs = [
    {
      id: "education",
      title: "Education",
      icon: <FaBook />,
      description: "We believe education is the key to breaking the cycle of poverty. Our initiatives focus on providing quality education, digital literacy, and scholarship support to underprivileged children.",
      stats: "15,000+ Children Impacted",
      color: "border-l-4 border-blue-500"
    },
    {
      id: "skills",
      title: "Livelihood & Skill Development",
      icon: <FaTools />,
      description: "Empowering youth and women with industry-relevant skills. From vocational training to soft skills workshops, we prepare them for sustainable livelihoods.",
      stats: "5,000+ Youth Trained",
      color: "border-l-4 border-[#FDCF09]"
    },
    {
      id: "health",
      title: "Health & Nutrition",
      icon: <FaStethoscope />,
      description: "Ensuring access to basic healthcare and adequate nutrition. We organize regular medical camps, awareness drives, and provide nutritional support to mothers and children.",
      stats: "50,000+ Lives Touched",
      color: "border-l-4 border-red-500"
    },
    {
      id: "legal",
      title: "Protection & Legal Rights",
      icon: <FaBalanceScale />,
      description: "Democratizing justice by spreading legal awareness. We educate communities about their rights, entitlements, and provide support for legal grievances.",
      stats: "100+ Awareness Camps",
      color: "border-l-4 border-purple-500"
    },
    {
      id: "community",
      title: "Community Development",
      icon: <FaUsers />,
      description: "Building resilient communities through infrastructure support, water conservation projects, and leadership development programs.",
      stats: "120+ Villages Covered",
      color: "border-l-4 border-green-500"
    },
  ];

  return (
    <section className="bg-white font-inria">

      {/* ================= HERO ================= */}
      <div className="bg-zinc-900 text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#FDCF09_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Our Work
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-xl leading-relaxed">
            A holistic approach to development, focusing on five key pillars to transform lives and communities.
          </p>
        </div>
      </div>

      {/* ================= PROGRAMS GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              id={program.id}
              className={`bg-zinc-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between ${program.color} bg-white`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl text-zinc-800 p-3 bg-white rounded-full shadow-sm">{program.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">Program</div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">
                  {program.title}
                </h3>

                <p className="text-zinc-600 leading-relaxed mb-6">
                  {program.description}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-200">
                <p className="font-bold text-zinc-800 flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#FDCF09]"></span>
                  {program.stats}
                </p>
                <Link
                  to="/Contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                >
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-[#FDCF09]/10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-6 text-black">Want to support these programs?</h2>
          <p className="text-zinc-600 mb-8 text-lg">
            Your contribution can help us reach more villages and change more destines.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/DonateAndSupport" className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-zinc-800 transition">
              Donate Now
            </Link>
            <Link to="/Volunteer" className="px-8 py-4 bg-white border-2 border-black text-black font-bold rounded-full hover:bg-zinc-100 transition">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
