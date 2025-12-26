import { useEffect } from "react";

export default function PrivacyPolicy() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-zinc-50 font-inria">
            <div className="max-w-4xl mx-auto pt-32 pb-20 px-4 space-y-12">

                {/* ================= HEADER ================= */}
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-black text-zinc-900">
                        Privacy Policy
                    </h1>
                    <p className="text-zinc-600">
                        Learn how we collect, use, and protect your data.
                    </p>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 space-y-10">

                    {/* 1 */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-bold">1. Information We Collect</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            We may collect personal information such as your name, email address, phone number, and payment details (for donations) when you interact with our website.
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-bold">2. How We Use Your Information</h2>
                        <p className="text-zinc-600 leading-relaxed mb-2">
                            We use the collected information for:
                        </p>
                        <ul className="list-disc ml-5 text-zinc-600 space-y-1">
                            <li>Processing donations and issuing receipts.</li>
                            <li>Sending updates about our projects, campaigns, and events.</li>
                            <li>Responding to your queries/feedback.</li>
                            <li>Internal record keeping and compliance.</li>
                        </ul>
                    </section>

                    {/* 3 */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-bold">3. Data Protection</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. We do not sell or trade your data to third parties.
                        </p>
                    </section>

                    {/* 4 */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-bold">4. Cookies</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Our website may use cookies to enhance user experience. You can choose to accept or decline cookies through your browser settings, though this may affect site functionality.
                        </p>
                    </section>

                    {/* 5 */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-bold">5. Third-Party Links</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Our website may contain links to external sites. We are not responsible for the privacy practices or content of these third-party websites.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-bold">6. Changes to Policy</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Swastik Srijan Foundation reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with immediate effect.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-bold">7. Contact Us</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            If you have any questions about our Privacy Policy or data practices, please contact us at:
                        </p>
                        <ul className="text-zinc-600 list-disc ml-5 mt-2">
                            <li>Email: info@swastiksrijan.org</li>
                            <li>Phone: +91 9128260668</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
