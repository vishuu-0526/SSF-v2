

import childrenImg from "../assets/childrens.svg";
import { easeOut } from "motion/react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart, FaHandHoldingHeart, FaChild } from "react-icons/fa";

export default function Home() {
  function AnimatedCounter({ value }) {
    const motionValue = useMotionValue(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
      const controls = animate(motionValue, value, {
        duration: 2.5,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }, [value]);

    return <span>{count.toLocaleString()}</span>;
  }

  return (
    <div className="w-full bg-white font-inria">

      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-black">
              DON'T JUST GIVE. <br />
              <span className="text-[#FDCF09] inline-block mt-2">CHANGE A DESTINY.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-zinc-600 font-medium leading-relaxed max-w-lg"
          >
            Your contribution isn't just a donation. It's a pencil for a student, a vaccine for a toddler, and a voice for the unheard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view" target="_blank" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#FDCF09] text-black font-bold text-lg uppercase tracking-wide hover:bg-[#e5bc08] hover:scale-105 transition-all shadow-lg rounded-lg">
                Start a Ripple Effect
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="pt-2"
          >
            <p className="text-xl md:text-2xl font-black tracking-wider text-black uppercase">
              &mdash; A Non-Profit, Volunteer-Driven Initiative
            </p>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Yellow Abstract Shape */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FDCF09] rounded-full mix-blend-multiply opacity-20 filter blur-3xl animate-pulse"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white z-10">
            <img
              src={childrenImg}
              alt="Happy children"
              className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-[20s]"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            {/* Floating Label */}
            <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-full shadow-lg">
              <p className="font-bold text-sm uppercase tracking-wider text-black flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FDCF09] rounded-full animate-ping"></span>
                Transforming Lives
              </p>
            </div>
          </div>
        </motion.div>
      </section>


      {/* ================= MISSION STATEMENT ================= */}
      <section className="bg-white py-12 px-4 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif italic text-zinc-800 leading-relaxed"
          >
            "To empower underprivileged communities by ensuring access to <span className="text-[#FDCF09] font-bold not-italic">education</span>, <span className="text-[#FDCF09] font-bold not-italic">healthcare</span>, and sustainable <span className="text-[#FDCF09] font-bold not-italic">livelihood</span>."
          </motion.h2>
        </div>
      </section>

      {/* ================= IMPACT BANNER ================= */}
      <section className="bg-black py-16 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#FDCF09_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          {[
            { value: 50000, label: "Lives Touched", icon: <FaHeart className="text-[#FDCF09] text-3xl mb-4 mx-auto" /> },
            { value: 120, label: "Villages Covered", icon: <FaHandHoldingHeart className="text-white text-3xl mb-4 mx-auto" /> },
            { value: 15000, label: "Children Educated", icon: <FaChild className="text-[#FDCF09] text-3xl mb-4 mx-auto" /> }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              {stat.icon}
              <div className="text-5xl lg:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter value={stat.value} />+
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= THE "DIFFERENT WAY" MESSAGE ================= */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="max-w-5xl mx-auto text-center space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#FDCF09] font-black uppercase tracking-widest text-sm mb-4">Why We Are Different</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              You don't just give money.<br />
              You give <span className="bg-[#FDCF09] px-2 italic">ownership.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Rights, Not Charity", desc: "We don't just distribute aid. We empower communities to demand and access their rights to education and health." },
              { title: "Root Cause Approach", desc: "We tackle the systemic issues—poverty, caste, and gender—that keep children out of school." },
              { title: "Sustainable Change", desc: "We build local leadership so that the change lasts long after we leave." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.2) }}
                className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-black hover:border-[#FDCF09] transition-colors duration-300"
              >
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
