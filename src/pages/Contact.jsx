import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, XCircle, X } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false, // <- start false
    success: false,
    error: false,
    message: "",
  });

  const [toast, setToast] = useState({
    show: false,
    type: "", // "success" or "error"
    message: "",
  });

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
  };

  const hideToast = () => {
    setToast({ show: false, type: "", message: "" });
  };

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic front-end validation (optional)
    if (!formData.firstName || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Please fill required fields.",
      });
      return;
    }

    // basic front-end validation
    if (!formData.firstName || !formData.email || !formData.message) {
      showToast("error", "Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    setFormStatus((s) => ({ ...s, submitting: true, message: "" }));

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        }
      );

      // Simulate success (80% success rate for demo)
      if (Math.random() > 0.2) {
        showToast("success", "Message successfully submitted!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Simulated error");
      }

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });
      
    } catch (error) {
      console.error("emailjs error:", error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again!",
      });

      console.error("Error:", error);
      showToast("error", "Failed to send message. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-4 xl:p-2">

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 duration-300">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border-2 min-w-[320px] ${
              toast.type === "success"
                ? "bg-green-50 border-green-500 text-green-900"
                : "bg-red-50 border-red-500 text-red-900"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            )}
            <span className="font-semibold flex-1">{toast.message}</span>
            <button
              onClick={hideToast}
              className={`p-1 rounded-full hover:bg-white/50 transition-colors ${
                toast.type === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="wrapper max-w-6xl md:p-10 p-5 min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-3xl bg-[#E6E6E6] shadow-[7px_7px_0px_#555] mx-auto mt-22 mb-5">
        <div className="first_content space-y-8 flex flex-col justify-center">
          <h2 className="flex flex-col font-extrabold text-4xl">
            <span>Get in</span>
            <span>touch with us</span>
          </h2>
          <p>
            We’re here to support you. Whether you want to learn more about our
            projects, partner with us, volunteer, or contribute to a cause, our
            team is always ready to help.
          </p>
          <div className="email">
            <p className="font-medium">Email:</p>
            <p className="font-extrabold text-lg">
              swastiksrijanfoundation@gmail.com
            </p>
          </div>
          <div className="phone">
            <p className="font-medium">Phone:</p>
            <p className="font-extrabold text-lg">+91 9424626518</p>
          </div>
        </div>

        <div className="second_content bg-[#FFFFFF] p-6 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="name grid grid-cols-2 gap-6">
              <div className="first_name flex flex-col gap-1">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="last_name flex flex-col gap-1">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="email flex flex-col gap-1">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="message flex flex-col gap-1">
              <label htmlFor="message">How can we help you?</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Write your message..."
                className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="btn">
              <button
                type="submit"
                className="bg-[#0D0D0D] active:scale-96 transition-all duration-150 text-white font-medium flex items-center justify-center text-lg tracking-wide gap-3 px-6 py-3 cursor-pointer rounded-2xl disabled:opacity-60"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <img
                  src="./images/send_msg.svg"
                  alt=""
                  className="w-8 hover:rotate-50 transition-all duration-200"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
