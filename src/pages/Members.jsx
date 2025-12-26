import { FaArrowRightLong } from "react-icons/fa6";

const Members = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ================= HERO ================= */}
        <div>
          <img
            src="./images/members_pics.png"
            alt="SSF Members"
            className="w-full"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-zinc-900">
              Membership Program
            </h2>

            <p className="text-zinc-600 leading-relaxed">
              Swastik Srijan Foundation’s Membership Program is built on the
              values of long-term commitment, collective responsibility, and
              sustainable impact. Members support our mission consistently and
              play a vital role in strengthening communities beyond short-term
              involvement.
            </p>

            <img
              src="./images/mem_image1.png"
              alt="Members supporting communities"
              className="w-full"
            />

            <h3 className="text-xl font-semibold text-zinc-900">
              Start Your Membership Journey
            </h3>

            <p className="text-zinc-600 leading-relaxed">
              By becoming a member, you contribute to a future where education,
              empowerment, and opportunity reach those who need it most.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-zinc-900">
              Be a Member. Be Part of Lasting Change.
            </h2>

            <ul className="space-y-3 text-zinc-600">
              <li>• Support programs focused on long-term community development</li>
              <li>• Receive regular updates, reports, and impact stories</li>
              <li>• Connect with individuals committed to social responsibility</li>
              <li>• Early access to initiatives and volunteering opportunities</li>
              <li>• Recognition as a supporter driving meaningful change</li>
            </ul>

            <img
              src="./images/member_pic2.png"
              alt="Community engagement"
              className="w-full"
            />
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center space-y-6 pt-10">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Member Benefits
          </h2>

          <img
            src="./images/members_text.svg"
            alt="Membership benefits"
            className="mx-auto"
          />

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3Wb-839SLDzv3A9QkbfpnJt_ORBQZbVByModSfDjQs-JuBQ/viewform"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#005EFF] text-white font-medium hover:opacity-90 transition"
          >
            Join as a Member <FaArrowRightLong />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Members;
