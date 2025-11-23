"use client";

import { useEffect, useState } from "react";

export default function OfferPopup() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Show popup after scroll 150vh
  useEffect(() => {
    const handleScroll = () => {
      if (!hidden && window.scrollY > window.innerHeight * 1.5) {
        setOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hidden]);

  const closePopup = () => {
    setOpen(false);
    setHidden(true);
  };

  if (!open || hidden) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn p-4">

        {/* Popup Box */}
        <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm overflow-hidden animate-zoomIn">

          {/* Close Button */}
          <button
            onClick={closePopup}
            className="
              absolute top-3 right-3
              bg-white/90 text-gray-800
              w-9 h-9 sm:w-10 sm:h-10
              rounded-full flex items-center justify-center
              shadow-md border border-gray-200 
              hover:bg-white transition
              z-50
            "
          >
            ✕
          </button>

          {/* Offer Image */}
          <img
            src="/assets/img/offer.jpg"
            alt="Offer"
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Animations */}
      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s ease-out;
        }

        @keyframes zoomIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
