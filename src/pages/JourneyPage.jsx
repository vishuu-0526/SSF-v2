import { motion } from "framer-motion";

export default function JourneyPage() {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="pt-36 pb-20 bg-zinc-50 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Our Journey & Impact
        </motion.h1>

        <p className="max-w-2xl mx-auto text-zinc-600 text-lg">
          A journey of commitment, compassion, and measurable change
          across communities in India.
        </p>
      </section>

      {/* ================= IMPACT NUMBERS ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            ["50,000+", "Lives Impacted"],
            ["15,000+", "Beneficiaries"],
            ["100+", "Programs Conducted"],
            ["10+ Years", "Of Service"],
          ].map(([value, label], i) => (
            <div key={i} className="border rounded-xl p-8">
              <p className="text-4xl font-black text-blue-600 mb-2">{value}</p>
              <p className="text-zinc-600 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-24 bg-zinc-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16">
            Our Growth Over the Years
          </h2>

          <div className="space-y-12">
            {[
              ["2013", "Foundation established with a focus on education and community service."],
              ["2015", "Expanded programs into healthcare and nutrition awareness."],
              ["2017", "Women empowerment and skill development initiatives launched."],
              ["2020", "Emergency relief and community support during crisis periods."],
              ["2023", "Reached 50,000+ lives across multiple regions in India."],
            ].map(([year, text], i) => (
              <div key={i} className="flex gap-6">
                <div className="text-blue-600 font-black text-xl w-20">
                  {year}
                </div>
                <div className="text-zinc-600 leading-relaxed">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-6">
            Why Our Work Matters
          </h2>
          <p className="text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            Every initiative we undertake is designed to create long-term,
            sustainable change. We believe real impact is measured not just
            in numbers, but in transformed lives and stronger communities.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-blue-600 text-white text-center px-4">
        <h2 className="text-3xl font-black mb-4">
          Be a Part of Our Journey
        </h2>
        <p className="mb-6">
          Your support helps us continue creating meaningful impact.
        </p>
        <a
          href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
          target="_blank"
        >
          <button className="bg-white text-blue-600 px-8 py-3 font-bold">
            Support Our Mission
          </button>
        </a>
      </section>

    </div>
  );
}
