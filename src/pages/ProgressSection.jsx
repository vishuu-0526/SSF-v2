import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ProgressTimeline = () => {
  const timelineData = [
    { year: 2013, title: "Why We Started", description: "Witnessing the lack of basic resources in rural communities, a group of friends came together to form Swastik Srijan Foundation." },
    { year: 2015, title: "First Steps", description: "We launched our first community health camp and expanded our team to 50 active volunteers." },
    { year: 2017, title: "Scaling Up Education", description: "Opened 5 learning centers, impacting over 1,000 children in remote villages." },
    { year: 2019, title: "Empowering Women", description: "Launched 'Saksham' - a livelihood program training 500+ women in tailoring and handicrafts." },
    { year: 2020, title: "Resilience in Crisis", description: "During COVID-19, we distributed 10,000+ ration kits and ensured no family went hungry." },
    { year: 2022, title: "Digital Integration", description: " Introduced smart classes and digital literacy programs to bridge the urban-rural divide." },
    { year: 2023, title: "The Learning Hub", description: "Established a dedicated center for career counseling and advanced skill development." },
    { year: 2024, title: "National Footprint", description: "Expanded operations to 5 states, planting our roots firmly across key regions in India." },
  ];

  return (
    <section className="w-full bg-zinc-50 py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm">Milestones</h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cry-title"
          >
            Our <span className="text-[#FDCF09]">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 max-w-2xl mx-auto text-lg"
          >
            From a small spark of an idea to a nationwide movement. Here is how we grew, year by year.
          </motion.p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >

                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#FDCF09] hover:shadow-md transition-shadow">
                    <span className="block text-4xl font-black text-zinc-200 mb-2">{item.year}</span>
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Marker */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#FDCF09] rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10"></div>

                {/* Empty Side (for balancing flex) */}
                <div className="hidden md:block w-1/2"></div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgressTimeline;
