"use client";

export default function PuneMapNoApi() {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-6 pb-20">
      
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-orange-600">
        We Deliver Across Pune 🚚
      </h2>

      <p className="text-center text-gray-600 mt-2 mb-6">
        Akurdi, Nigdi, Chinchwad, Wakad, Hinjewadi & nearby areas.
      </p>

      {/* MAP CONTAINER */}
      <div className="relative w-full rounded-2xl overflow-hidden border-2 border-orange-300 shadow-xl animate-fadeIn">

        {/* Static Map Image */}
        <img
          src="/assets/img/dd.jpg" 
          alt="Pune Map"
          className="w-full h-auto object-cover"
        />

        {/* Animated Marker */}
        <div
          className="
            absolute 
            top-[48%] left-[52%]   /* adjust marker position */
            -translate-x-1/2 -translate-y-1/2
            z-20
          "
        >
          <div className="w-10 h-10 bg-red-500 rounded-full border-4 border-white shadow-xl animate-bounceMarker"></div>

          {/* Marker Glow */}
          <div className="w-14 h-14 bg-red-500/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
        </div>

      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes bounceMarker {
          0%, 100% { transform: translate(-50%, -60%); }
          50% { transform: translate(-50%, -75%); }
        }
        .animate-bounceMarker {
          animation: bounceMarker 0.8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
