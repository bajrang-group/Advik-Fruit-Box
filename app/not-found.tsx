"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff7f0] text-center px-4">

      {/* Animated number */}
      <h1 className="text-[120px] md:text-[180px] font-extrabold text-orange-500 animate-float">
        404
      </h1>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-3 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="!mt-6 !bg-orange-500 hover:bg-orange-600 !text-white !px-10 py-3 !rounded-xl !shadow-lg !transition !text-lg !font-semibold"
      >
        Go Back Home
      </Link>

      {/* Tailwind Custom Animation */}
      <style>{`
        @keyframes float404 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float404 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
