import React from "react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-ashen-psi.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <>
<section>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
            Get in touch.
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                rows="5"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all"
            >
              Send
            </button>
          </form>
          <p className="mt-4 text-sm text-slate-600">{status}</p>
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-slate-200">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
            Let's work together.
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            I'm currently available for freelance projects and open to new
            opportunities. If you have a project in mind or just want to say hi,
            feel free to reach out.
          </p>
          <a
            href="mailto:hello@johndoe.com"
            className="text-2xl font-medium text-slate-900 border-b-2 border-slate-900 hover:text-slate-600 hover:border-slate-600 transition-all"
          >
            hello@johndoe.com
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
