"use client";

import { useState } from "react";

export default function AdvertisementSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SECTION */}
      <section className="py-20 bg-[#fff7f0]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT - Thumbnail */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/assets/img/abt.jpg"
              alt="about-video"
              className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Play Button */}
            <button
              onClick={() => setOpen(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                <i className="fas fa-play text-white text-2xl ml-1"></i>
              </div>
            </button>
          </div>

          {/* RIGHT - Text */}
          <div className="flex flex-col justify-center">
            <p className="text-orange-500 font-semibold tracking-wide">
              Since 2024
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 leading-snug">
              We are <span className="text-orange-600">Advik Fruit Box</span>
            </h2>

            <p className="text-gray-600 mt-4">
              At Advik Fruit Box, we deliver premium fresh-cut fruits daily,
              ensuring hygiene, freshness, and rich nutrition in every box.
            </p>

            <p className="text-gray-600 mt-3">
              Our fruit boxes are curated with love, cleaned with care,
              and packed to stay fresh longer. Your healthy lifestyle
              starts with one box a day!
            </p>

            <a
              href="/about"
              className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Know More
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO POPUP MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn p-4">

          {/* MODAL CARD */}
          <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-3xl">

            {/* CLOSE BUTTON (Now always visible) */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-3 right-3 
                z-50
                w-12 h-12 
                bg-white/95 
                text-black text-xl font-bold
                rounded-full shadow-xl 
                flex items-center justify-center
                border border-gray-300
                hover:bg-gray-100 active:scale-95 transition
              "
            >
              ✕
            </button>

            {/* RESPONSIVE VIDEO */}
            <div className="w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/iESeunrRbcA?autoplay=1"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
