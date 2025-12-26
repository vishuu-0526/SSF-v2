import { motion } from "framer-motion";
import { FaHeart, FaHandshake, FaGlobeAmericas, FaBalanceScale, FaCheckCircle, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="w-full font-inria">

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-24 bg-zinc-900 text-white text-center px-4 relative overflow-hidden">
        {/* Abstract BG */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 relative z-10"
        >
          About <span className="text-[#FDCF09]">Swastik</span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-zinc-300 text-xl md:text-2xl font-medium relative z-10 leading-relaxed">
          Building a future where every child has a voice, a choice, and a chance to thrive.
        </p>
      </section>

      {/* ================= 1. FOUNDATION INTRO ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black leading-tight">
              A Decade of <br /> Unwavering Commitment.
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Founded in 2013, Swastik Srijan Foundation started with a simple belief: that meaningful change begins at the grassroots. What began as a small volunteer group has grown into a movement touching thousands of lives across India.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We work tirelessly to address the root causes of poverty and inequality—focusing on education, healthcare, and sustainable livelihoods to build resilient communities.
            </p>
          </div>
          <div className="bg-zinc-50 rounded-2xl p-12 relative overflow-hidden text-center border-l-8 border-[#FDCF09]">
            <h4 className="text-8xl font-black text-black/10 absolute top-4 right-4">2013</h4>
            <div className="relative z-10 space-y-2">
              <span className="block text-6xl font-black text-black">10+</span>
              <span className="block text-xl font-bold text-zinc-500 uppercase tracking-widest">Years of Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. VISION & MISSION ================= */}
      <section className="py-24 bg-zinc-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-black"
            >
              <div className="w-16 h-16 bg-[#FDCF09] rounded-full flex items-center justify-center mb-6">
                <FaGlobeAmericas className="text-2xl text-black" />
              </div>
              <h3 className="text-3xl font-black mb-4">Our Vision</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                A society where every individual, regardless of their background, has access to education, healthcare, dignity, and equal opportunities to reach their full potential.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-[#FDCF09]"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <FaHandshake className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-black mb-4">Our Mission</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                To empower underprivileged communities through sustainable, integrated programs in education, health, women empowerment, and skill development, fostering self-reliance and ownership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 3. CORE VALUES ================= */}
      <section className="py-24 bg-zinc-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm mb-4">What Drives Us</h2>
            <h3 className="text-4xl md:text-5xl font-black">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaBalanceScale />, title: "Integrity", desc: "We are transparent, honest, and accountable in every action we take." },
              { icon: <FaHeart />, title: "Compassion", desc: "Empathy is at the heart of our work. We serve with kindness and respect." },
              { icon: <FaUsers />, title: "Inclusion", desc: "We ensure no one is left behind, regardless of caste, creed, or gender." },
              { icon: <FaCheckCircle />, title: "Ownership", desc: "We don't just give aid; we empower communities to own their development." },
            ].map((val, i) => (
              <div key={i} className="bg-zinc-800 p-8 rounded-xl hover:bg-zinc-700 transition-colors duration-300">
                <div className="text-[#FDCF09] text-4xl mb-6">{val.icon}</div>
                <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. ALL-INDIA PRESENCE ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-zinc-50 rounded-xl p-2 flex items-center justify-center border-2 border-dashed border-zinc-200">
            <img src="/images/map.png" alt="Map of India Presence" className="w-full h-full object-contain rounded-lg" />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm">Where We Work</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black">All-India Presence</h3>

            <p className="text-xl text-zinc-600 leading-relaxed">
              From the remote villages of rural India to the urban slums of metropolitan cities, Swastik Srijan Foundation is building bridges of hope.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <span className="block text-4xl font-black text-zinc-900 border-b-4 border-[#FDCF09] w-fit mb-2">5+</span>
                <span className="text-zinc-500 font-bold uppercase text-sm">States</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-zinc-900 border-b-4 border-black w-fit mb-2">120+</span>
                <span className="text-zinc-500 font-bold uppercase text-sm">Villages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST & COMPLIANCE ================= */}
      <section className="py-20 bg-zinc-50 px-4 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 text-zinc-400 uppercase tracking-widest">
            Compliance & Transparency
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-bold text-zinc-600 uppercase tracking-wide">
            <div className="bg-white py-4 rounded-lg shadow-sm">Registered NGO</div>
            <div className="bg-white py-4 rounded-lg shadow-sm">12A Certified</div>
            <div className="bg-white py-4 rounded-lg shadow-sm">80G Compliant</div>
            <div className="bg-white py-4 rounded-lg shadow-sm">CSR Compatible</div>
          </div>
        </div>
      </section>

    </div>
  );
}
