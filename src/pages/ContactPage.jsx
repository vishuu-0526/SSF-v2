import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    const whatsappMessage = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919128260668?text=${whatsappMessage}`, "_blank");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="w-full font-inria bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-zinc-900 text-white pt-40 pb-20 relative overflow-hidden text-center px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-[#FDCF09]">Us</span>
          </h1>
          <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed">
            Have a question or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="py-20 px-4 -mt-16 relative z-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Phone & WhatsApp */}
          <div className="bg-white p-8 rounded-xl shadow-xl text-center border-b-4 border-[#FDCF09] hover:translate-y-[-5px] transition duration-300">
            <div className="w-16 h-16 bg-[#FDCF09]/20 text-[#FDCF09] rounded-full mx-auto flex items-center justify-center text-3xl mb-4">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-bold mb-2">Call & WhatsApp</h3>
            <p className="text-zinc-600 mb-4">Mon-Sat from 10am to 6pm</p>
            <a href="tel:+919128260668" className="block text-xl font-black text-zinc-900 hover:text-[#FDCF09] transition">+91 91282 60668</a>
            <a href="https://wa.me/919128260668" target="_blank" className="inline-flex items-center gap-2 text-green-600 font-bold mt-2 hover:underline">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow-xl text-center border-b-4 border-black hover:translate-y-[-5px] transition duration-300">
            <div className="w-16 h-16 bg-zinc-100 text-black rounded-full mx-auto flex items-center justify-center text-3xl mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-zinc-600 mb-4">We usually reply within 24 hours</p>
            <a href="mailto:swastiksrijanfoundation@gmail.com" className="block text-lg font-black text-zinc-900 hover:text-[#FDCF09] transition break-words">swastiksrijanfoundation@gmail.com</a>
          </div>

          {/* Location */}
          <div className="bg-white p-8 rounded-xl shadow-xl text-center border-b-4 border-blue-600 hover:translate-y-[-5px] transition duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center text-3xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-zinc-600 mb-4">Head Office</p>
            <p className="text-lg font-bold text-zinc-900">
              Rajendra Nagar,<br /> Patna, Bihar, India
            </p>
          </div>
        </div>
      </section>

      {/* ================= FORM & MAP ================= */}
      <section className="pb-24 px-4 bg-zinc-50 pt-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 className="text-3xl font-black mb-6">Send a Message</h2>
            <p className="text-zinc-600 mb-8">
              Fill out the form below and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-bold text-sm text-zinc-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-[#FDCF09] transition"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm text-zinc-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-[#FDCF09] transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-sm text-zinc-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-[#FDCF09] transition"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-bold text-sm text-zinc-700">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-[#FDCF09] transition"
                >
                  <option value="">Select a Topic</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Donation">Donation</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-sm text-zinc-700">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-[#FDCF09] transition h-32"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-[#FDCF09] hover:text-black transition duration-300 shadow-lg">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] bg-zinc-200 rounded-2xl overflow-hidden shadow-lg border border-zinc-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.056972418518!2d85.1583!3d25.5947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6436f5b%3A0x629555c82c2354e3!2sRajendra%20Nagar%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}
