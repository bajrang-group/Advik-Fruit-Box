"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#fff7f0]">

      {/* ---------------------------------------------------- */}
      {/* ⭐ BREADCRUMB SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}>
        <div className="absolute inset-0 bg-[#051922]/80"></div>

        <div className="relative container mx-auto px-6 text-center text-white">
          <p className="text-lg text-white">We deliver fresh fruits daily</p>
          <h1 className="text-4xl md:text-5xl text-white font-extrabold mt-2">About Us</h1>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* ⭐ FEATURED SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Why <span className="text-orange-600">Advik Fruit Box</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              {/* ITEM */}
              {[
                {
                  icon: "fas fa-shipping-fast",
                  title: "Home Delivery",
                  desc: "Fast and fresh fruit delivery across Pune.",
                },
                {
                  icon: "fas fa-money-bill-alt",
                  title: "Best Price",
                  desc: "Affordable & premium quality fruits daily.",
                },
                {
                  icon: "fas fa-briefcase",
                  title: "Custom Box",
                  desc: "Choose & customise your daily fruit box.",
                },
                {
                  icon: "fas fa-sync-alt",
                  title: "Quick Refund",
                  desc: "Hassle-free quick refunds if needed.",
                },
              ].map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="text-orange-600 text-3xl">
                    <i className={f.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{f.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          <div className="flex items-center">
            <Image
              src="/assets/img/abt.jpg"
              alt="about"
              width={550}
              height={450}
              className="rounded-xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* ⭐ SHOP BANNER */}
      {/* ---------------------------------------------------- */}
      <section className="relative bg-orange-500 text-white py-24 text-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">

          <h3 className="text-4xl md:text-5xl font-extrabold">
            Big Winter <span className="text-black">Discount...</span>
          </h3>

          <div className="mt-6 text-6xl font-extrabold">
            <span className="text-white text-3xl block">Sale up to</span>
            50% <span className="text-white text-3xl">OFF</span>
          </div>

          <a
            href="/products"
            className="mt-8 inline-block bg-white text-orange-600 px-10 py-3 rounded-xl font-bold shadow-md hover:bg-orange-100 transition"
          >
            Shop Now
          </a>

        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 to-orange-400/20"></div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* ⭐ TEAM SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-28">
        <div className="container mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold">
              Our <span className="text-orange-600">Team</span>
            </h3>
            <p className="text-gray-600 mt-3">
              Meet the heart behind Advik Fruit Box — passionate, hardworking, and committed to quality.
            </p>
          </div>

          {/* TEAM CARDS */}
        {/* TEAM CARDS — FLEXBOX FIXED */}
<div className="flex flex-wrap justify-center gap-10 mt-14">

  {[
    { name: "Kundan Bhau", role: "Owner", image: "/assets/img/team/team-1.jpg" },
    { name: "Kundan Bhau", role: "Owner", image: "/assets/img/team/team-2.jpg" },
  ].map((t, i) => (
    <div
      key={i}
      className="w-full sm:w-[45%] md:w-[30%] bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
    >
      {/* IMAGE */}
      <div className="h-64 w-full">
        <Image
          src={t.image}
          alt={t.name}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="text-center py-6">
        <h4 className="text-xl font-bold">{t.name}</h4>
        <span className="block text-gray-500 text-sm mt-1">{t.role}</span>

        <div className="flex justify-center gap-4 mt-4 text-orange-600 text-xl">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  ))}

</div>

      
      
      
        </div>


      </section>

      {/* ---------------------------------------------------- */}
      {/* ⭐ PUNE MAP SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="mt-10 px-6 pb-20">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-orange-600">
          We Deliver Across Pune 🚚
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-6">
          Fast & hygienic delivery across Akurdi, Nigdi, Chinchwad, Wakad, Hinjewadi & more.
        </p>

        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-orange-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15754.75061581706!2d73.759827!3d18.650934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b94d2bdf33c5%3A0x123456789abcd!2sAkurdi%2C%20Pune!5e0!3m2!1sen!2sin!4v1700000000000"
            height="400"
            width="100%"
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
