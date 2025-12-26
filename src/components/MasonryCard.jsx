import { Link } from "@tanstack/react-router";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MasonryCards() {
  const cards = [
    {
      title: "Education",
      desc: "Empowering children with the gift of education to build a brighter future.",
      img: "/images/students.png",
      span: "md:col-span-8",
      color: "border-l-4 border-[#FDCF09]",
      link: "/LearningHub"
    },
    {
      title: "Protection",
      desc: "Ensuring safety and dignity for every child, shielding them from abuse and neglect.",
      img: "/images/girls.png",
      span: "md:col-span-4",
      color: "border-l-4 border-black",
      link: "/Campaign#legal"
    },
    {
      title: "Health",
      desc: "Providing essential healthcare and nutrition to combat malnutrition and disease.",
      img: "/images/health.png",
      span: "md:col-span-4",
      color: "border-l-4 border-[#FDCF09]",
      link: "/Campaign#health"
    },
    {
      title: "Livelihood",
      desc: "Creating sustainable opportunities for families to break the cycle of poverty.",
      img: "/images/agriculture.png",
      span: "md:col-span-4",
      color: "border-l-4 border-black",
      link: "/Campaign#skills"
    },
    {
      title: "Participation",
      desc: "Giving children a voice in the decisions that affect their lives.",
      img: null,
      span: "md:col-span-4",
      color: "border-l-4 border-zinc-400",
      link: "/Volunteer"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 ${card.span} ${card.color} group overflow-hidden`}
        >
          <Link to={card.link} className="flex flex-col justify-between h-full p-8 relative z-10 block">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-[#FDCF09] transition-colors">{card.title}</h3>
              <p className="text-zinc-600 leading-relaxed mb-6 font-medium">
                {card.desc}
              </p>
            </div>

            <div className="mt-auto">
              {card.img && (
                <div className="rounded-lg overflow-hidden h-48 w-full bg-zinc-100 mb-6 relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
              )}
              <div className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Learn More <FaArrowRight size={12} className="text-[#FDCF09]" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
