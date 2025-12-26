import { FaChalkboardTeacher, FaLaptopCode, FaHandHoldingHeart, FaBullhorn, FaUserCheck } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function Volunteer() {
  const roles = [
    {
      title: "Teaching Volunteer",
      icon: <FaChalkboardTeacher />,
      desc: "Teach subjects like Math, Science, or English at our centers. 2-3 hours/week commitment.",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "Skill Mentor",
      icon: <FaLaptopCode />,
      desc: "Train youth in computer skills, coding, or vocational crafts. Weekend batches available.",
      color: "text-[#FDCF09]",
      bg: "bg-[#FDCF09]/20"
    },
    {
      title: "Field Volunteer",
      icon: <FaHandHoldingHeart />,
      desc: "Assist in food drives, health camps, and community surveys. Ground-level impact.",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      title: "Social Media Advocate",
      icon: <FaBullhorn />,
      desc: "Amplify our voice online. Create content, write blogs, and manage campaigns from home.",
      color: "text-purple-600",
      bg: "bg-purple-100"
    }
  ];

  return (
    <div className="w-full font-inria bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-zinc-900 text-white pt-40 pb-20 relative overflow-hidden text-center px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Volunteer <span className="text-[#FDCF09]">With Us</span>
          </h1>
          <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed">
            Join a community of changemakers. Your time can rewrite a child's destiny.
          </p>
        </div>
      </section>

      {/* ================= 1. ROLES ================= */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm mb-4">Opportunities</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black">Available Roles</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:translate-y-[-5px] transition duration-300 border border-zinc-100">
                <div className={`w-16 h-16 ${role.bg} ${role.color} rounded-full flex items-center justify-center text-3xl mb-6`}>
                  {role.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-black">{role.title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 2. WHO CAN JOIN ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <h2 className="text-4xl font-black text-black mb-6">Who Can Join?</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              You don't need to be an expert to make a difference. We welcome anyone with a heart to serve and a willingness to commit time.
            </p>

            <ul className="space-y-6">
              {[
                "College Students (Internships available)",
                "Working Professionals (Weekend volunteering)",
                "Retired Seniors (Mentorship roles)",
                "Homemakers (Teaching & Coordination)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 bg-zinc-50 p-4 rounded-lg border border-zinc-100">
                  <IoCheckmarkCircleSharp className="text-[#FDCF09] text-2xl flex-shrink-0" />
                  <span className="font-bold text-zinc-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-600 rounded-2xl p-10 text-white flex flex-col justify-center h-full min-h-[400px]">
            <FaUserCheck className="text-6xl mb-6 text-[#FDCF09]" />
            <h3 className="text-3xl font-black mb-4">Values We Look For</h3>
            <div className="space-y-4 text-blue-100">
              <p>• <span className="text-white font-bold">Commitment:</span> Consistency matters more than hours.</p>
              <p>• <span className="text-white font-bold">Empathy:</span> Treating every beneficiary with dignity.</p>
              <p>• <span className="text-white font-bold">Teamwork:</span> Working together for a common goal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. APPLICATION & CTA ================= */}
      <section className="py-24 bg-zinc-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8">Ready to Start?</h2>
          <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
            <h3 className="text-2xl font-bold mb-4 text-[#FDCF09]">Application Process</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center font-bold">1</span>
                <span>Fill the Form</span>
              </div>
              <div className="hidden md:block w-16 h-[1px] bg-zinc-600"></div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center font-bold">2</span>
                <span>Intro Call</span>
              </div>
              <div className="hidden md:block w-16 h-[1px] bg-zinc-600"></div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center font-bold">3</span>
                <span>Orientation</span>
              </div>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScYeeXqB6nOsRqFD1OVXHa9-yALZ953k5i6IjuhAdaucaxDSg/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-[#FDCF09] text-black px-12 py-4 font-black rounded-full text-lg hover:bg-white hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(253,207,9,0.3)]">
                APPLY TO VOLUNTEER
              </button>
            </a>
            <p className="mt-4 text-zinc-500 text-sm">Takes only 2 minutes</p>
          </div>
        </div>
      </section>

    </div>
  );
}
