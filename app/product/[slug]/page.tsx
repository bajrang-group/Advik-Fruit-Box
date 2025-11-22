"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetailsPage() {
  const params = useSearchParams();
  const router = useRouter();

  const name = params.get("name") || "Fruit Box";
  const price = params.get("price") || "0";
  const image = params.get("image") || "/assets/img/products/product-1.png";

  // --- Image zoom state ---
  const [zoom, setZoom] = useState(false);

  return (
    <div className="bg-[#fff7f0] min-h-screen pb-20 ">

      {/* --- PAGE HEADER BAR --- */}
      <div className="w-full bg-[#051922] h-32 mb-10"></div>

      <div className="container mx-auto px-4 -mt-20 mt-9">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 md:p-10 rounded-2xl shadow-xl">

          {/* ------------------- PRODUCT IMAGE SECTION ------------------- */}
          <div>
            <div
              className={`w-full overflow-hidden rounded-xl shadow-xl border relative ${
                zoom ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setZoom(!zoom)}
            >
              <img
                src={image}
                alt={name}
                className={`transition-transform duration-300 mx-auto ${
                  zoom ? "scale-150" : "scale-100"
                }`}
              />
            </div>

            {/* thumbnail strip */}
            <div className="flex gap-3 mt-4 justify-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-20 rounded-lg overflow-hidden border shadow cursor-pointer">
                  <img src={image} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* ------------------- PRODUCT DETAILS SECTION ------------------- */}
          <div className="flex flex-col justify-center">

            <h1 className="text-4xl md:text-5xl font-bold leading-snug text-gray-900">
              {name}
            </h1>

            <p className="text-orange-600 font-extrabold text-4xl mt-4">
              ₹ {price}
            </p>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Experience premium fresh-cut fruits cleaned and packed under strict hygiene.
              Perfect for your daily diet, fitness routine, and healthy mornings.
            </p>

            {/* Highlights */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Why this Fruit Box?</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🍎 100% Fresh & Hygienic</li>
                <li>🚚 Daily Morning Delivery</li>
                <li>❌ No Sugar • No Preservatives</li>
                <li>⭐ Premium Seasonal Fruits</li>
                <li>🥗 Ready-to-Eat, Nutrition Rich</li>
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={() =>
                router.push(
                  `/order?name=${name}&price=${price}&image=${image}`
                )
              }
              className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              Buy Now
            </button>

          </div>
        </div>

        {/* ------------------- NUTRITION INFO ------------------- */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Nutrition Information</h2>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="py-2 font-semibold">Calories</td>
                <td>82 kcal</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vitamin C</td>
                <td>65 mg</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Fiber</td>
                <td>2.5 g</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Natural Sugar</td>
                <td>10 g</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ------------------- CUSTOMER REVIEWS ------------------- */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <p className="font-semibold">⭐️⭐️⭐️⭐️⭐️ Priya Deshmukh</p>
              <p className="text-gray-600 mt-2">
                “Fresh, tasty and hygienic! Perfect for office mornings.”
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-semibold">⭐️⭐️⭐️⭐️ Rahul Patil</p>
              <p className="text-gray-600 mt-2">
                “Great for fitness lovers. Excellent quality fruits.”
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* MOBILE STICKY BUY BUTTON */}
      <div className="fixed bottom-0 left-0 w-full bg-orange-600 text-white py-3 text-center font-semibold text-xl md:hidden shadow-xl cursor-pointer"
        onClick={() =>
          router.push(`/order?name=${name}&price=${price}&image=${image}`)
        }
      >
        Buy Now — ₹{price}
      </div>

    </div>
  );
}
