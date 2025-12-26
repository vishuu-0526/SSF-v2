import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "@tanstack/react-router";

function Impactstories() {
  const stories = [
    {
      img: "/images/impact/crisis.png",
      category: "DISASTER RELIEF",
      title: "Hope in Crisis",
      desc: "When floods devastated the village, your support helped us deliver 500+ food kits within 24 hours.",
      link: "/DonateAndSupport"
    },
    {
      img: "/images/impact/education.png",
      category: "EDUCATION",
      title: "Dreams Taking Flight",
      desc: "Riya, once out of school, now tops her class thanks to the SSF Learning Hub's scholarship program.",
      link: "/LearningHub"
    },
    {
      img: "/images/impact/environment.png",
      category: "ENVIRONMENT",
      title: "Green Warriors",
      desc: "Over 1,000 students joined hands to plant 5,000 saplings, transforming their city's lungs.",
      link: "/Campaign"
    }
  ];

  return (
    <div className="w-full bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">

        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cry-title"
          >
            Stories of <span className="text-[#FDCF09]">Change</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 font-medium max-w-2xl mx-auto"
          >
            See how your contribution is rewriting destinies across India.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <Link to={story.link} className="block h-full">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden rounded-2xl mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                  <img
                    src={story.img}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    alt={story.title}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#FDCF09] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 px-2">
                  <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-[#e5bc08] transition-colors leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm line-clamp-3">
                    {story.desc}
                  </p>
                  <div className="pt-2 flex items-center text-sm font-bold text-black uppercase tracking-wide group-hover:gap-2 transition-all">
                    Read Full Story <FaArrowRight className="ml-2 text-[#FDCF09]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="mt-12 text-center">
          <Link to="/Impact">
            <button className="px-8 py-3 border-2 border-zinc-300 text-zinc-800 font-bold hover:border-[#FDCF09] hover:bg-[#FDCF09] hover:text-black transition uppercase tracking-widest text-sm">
              View All Stories
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
export default Impactstories;

