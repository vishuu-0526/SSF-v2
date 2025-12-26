export default function DonatePage() {
  return (
    <div className="w-full bg-zinc-50">

      {/* ================= HERO ================= */}
      <section className="pt-36 pb-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-6">
          Support Our Work
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-600 text-lg">
          Your contribution helps us create lasting impact in education,
          healthcare, women empowerment, and community development.
        </p>
      </section>

      {/* ================= WHY DONATE ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="border rounded-xl p-8">
            <h3 className="text-xl font-bold mb-3">Transparent Use</h3>
            <p className="text-zinc-600">
              Every donation is utilized responsibly with clear reporting
              and measurable outcomes.
            </p>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="text-xl font-bold mb-3">Tax Benefits</h3>
            <p className="text-zinc-600">
              Donations are eligible for tax exemption under 80G & 12A.
            </p>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="text-xl font-bold mb-3">Real Impact</h3>
            <p className="text-zinc-600">
              Your support directly benefits children, women,
              and underserved communities.
            </p>
          </div>
        </div>
      </section>

      {/* ================= IMPACT AMOUNTS ================= */}
      <section className="py-24 bg-zinc-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-12">
            Your Donation Can Help
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl border">
              <p className="text-2xl font-black text-blue-600 mb-2">₹1,000</p>
              <p className="text-zinc-600">
                Supports educational materials for a child
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border">
              <p className="text-2xl font-black text-blue-600 mb-2">₹2,500</p>
              <p className="text-zinc-600">
                Helps organize a health awareness session
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border">
              <p className="text-2xl font-black text-blue-600 mb-2">₹5,000</p>
              <p className="text-zinc-600">
                Contributes to skill development programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DONATE CTA ================= */}
      <section className="py-24 bg-blue-600 text-white text-center px-4">
        <h2 className="text-3xl font-black mb-4">
          Make a Difference Today
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Your generosity empowers lives and strengthens communities.
        </p>

        <a
          href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
          target="_blank"
        >
          <button className="bg-white text-blue-600 px-10 py-4 font-bold text-lg hover:scale-[1.03] transition">
            Donate Now
          </button>
        </a>

        <p className="mt-6 text-sm opacity-90">
          Secure payment powered by Razorpay
        </p>
      </section>

    </div>
  );
}
