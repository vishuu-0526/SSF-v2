import TeamProfileSection from "../components/TeamProfileSection";

export default function Team() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-10">

        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900">
            Meet Our Team
          </h1>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Dedicated leaders, advisors, and volunteers working together to
            create lasting social impact.
          </p>
        </div>

        <TeamProfileSection />

      </div>
    </section>
  );
}
