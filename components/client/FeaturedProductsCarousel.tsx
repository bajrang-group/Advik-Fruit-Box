"use client";

import { useEffect, useRef } from "react";

const products = [
  { name: "Strawberry Box", image: "/assets/img/products/product-img-1.jpg" },
  { name: "Mixed Fruit Box", image: "/assets/img/products/product-img-2.jpg" },
  { name: "Citrus Box", image: "/assets/img/products/product-img-3.jpg" },
  { name: "Tropical Pack", image: "/assets/img/products/product-img-4.jpg" },
  { name: "Seasonal Box", image: "/assets/img/products/product-img-5.jpg" },
  { name: "Seasonal Box", image: "/assets/img/products/product-img-6.jpg" },
];

export default function FeaturedProductsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;

    const animate = () => {
      position -= 0.4; // speed
      track.style.transform = `translateX(${position}px)`;

      // Reset when half track scrolls
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="py-20 bg-[#fff7f0] overflow-hidden -mt-16">
      <div className="container text-center mb-10">
        <h3 className="text-3xl font-bold">
          <span className="orange-text">Featured</span> Products
        </h3>
        <p className="text-gray-600">
          Explore our best-selling fruit boxes curated for freshness & taste.
        </p>
      </div>

      {/* Infinite Loop Track */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-5 w-max"
          style={{ whiteSpace: "nowrap" }}
        >
          {[...products, ...products].map((p, i) => (
            <div key={i} className="inline-block">
              <div className="bg-white rounded-xl shadow-md p-4 w-[240px] hover:scale-105 transition-all duration-300">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-[180px] object-cover rounded-lg"
                />
                <h4 className="text-lg font-semibold text-center mt-3">
                  {p.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
