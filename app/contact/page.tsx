"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const update = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-[#fff7f0] pt-24 pb-20">

      {/* ------------------------------------------------------ */}
      {/* ⭐ HERO / BREADCRUMB */}
      {/* ------------------------------------------------------ */}
      <section className="bg-orange-600 text-white py-20 bg-[url('/assets/img/breadcrumb-bg.jpg')] bg-cover bg-center bg-blend-multiply">
        <div className="text-center px-4">
          <p className="text-lg opacity-90">Get 24/7 Support</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* ⭐ CONTACT SECTION */}
      {/* ------------------------------------------------------ */}
      <section className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT: FORM */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-orange-600">
            Have any questions?
          </h2>
          <p className="text-gray-600 mt-2">
            We’re always here to support you. Contact us for orders, bulk
            enquiries, partnerships, or general questions.
          </p>

          <form
            className="mt-10 space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Name"
                className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="Email"
                className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={update}
                placeholder="Phone"
                className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={update}
                placeholder="Subject"
                className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows={5}
              placeholder="Message"
              className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none w-full"
            ></textarea>

            <button
              type="button"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT: BUSINESS INFO */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <h3 className="text-xl font-bold text-orange-600 flex items-center gap-3">
              <i className="fas fa-map-marker-alt"></i> Address
            </h3>
            <p className="text-gray-600 mt-2">
              Akurdi, Pune <br/> Maharashtra, India
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <h3 className="text-xl font-bold text-orange-600 flex items-center gap-3">
              <i className="far fa-clock"></i> Hours
            </h3>
            <p className="text-gray-600 mt-2">
              Mon–Sat: 7 AM – 9 PM <br /> Sunday: 8 AM – 2 PM
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <h3 className="text-xl font-bold text-orange-600 flex items-center gap-3">
              <i className="fas fa-phone"></i> Contact
            </h3>
            <p className="text-gray-600 mt-2">
              Phone: +91 91721 21327 <br />
              Email: support@advikfruitbox.com
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* ⭐ LOCATION HEADER */}
      {/* ------------------------------------------------------ */}
      <section className="mt-24 bg-orange-600 text-white py-10 text-center">
        <p className="text-xl">
          <i className="fas fa-map-marker-alt mr-2"></i> Find Our Location
        </p>
      </section>

      {/* ------------------------------------------------------ */}
      {/* ⭐ PUNE MAP */}
      {/* ------------------------------------------------------ */}
      <section className="w-full h-[380px] mt-1">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps?q=Akurdi%20Pune&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      {/* ------------------------------------------------------ */}
      {/* ⭐ WHATSAPP FLOATING BUTTON */}
      {/* ------------------------------------------------------ */}
      <a
        href="https://wa.me/919172121327"
        target="_blank"
        className="
          fixed bottom-6 right-6
          bg-green-500 text-white w-16 h-16 
          rounded-full shadow-xl 
          flex items-center justify-center
          text-3xl hover:bg-green-600 transition animate-bounce
          z-50
        "
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Animations */}
      <style >{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
