"use client";

import Image from "next/image";
import Link from "next/link";

// Product List
const products = [
  {
    name: "Exotic Kiwi Strawberry Dragon Fruit Bowl",
    price: 120,
    image: "/assets/img/products/product-1.png",
  },
  {
    name: "Tropical Fusion Seasonal Fruit Platter",
    price: 199,
    image: "/assets/img/products/product-2.png",
  },
  {
    name: "Wholesome Guava & Sprout Energy Box",
    price: 349,
    image: "/assets/img/products/product-3.png",
  },
  {
    name: "Mixed Fruit Power Box",
    price: 149,
    image: "/assets/img/products/product-2.png",
  },
  {
    name: "Daily Fresh Seasonal Fruit Mix",
    price: 99,
    image: "/assets/img/products/product-1.png",
  },
  {
    name: "Daily Fresh Seasonal Fruit Mix",
    price: 99,
    image: "/assets/img/products/product-2.png",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#fff7f0] pt-32 pb-20">
      {/* Page Title */}
      <h1 className="text-center text-4xl md:text-5xl font-extrabold text-orange-600 tracking-tight">
        Our Products
      </h1>

      <p className="text-center text-gray-600 mt-3 max-w-xl mx-auto">
        Freshly cut, hygienically packed, and delivered daily to your doorstep.
      </p>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Image */}
            <div className="p-5">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={350}
                  height={350}
                  className="group-hover:scale-110 transition-all duration-500 object-cover w-full"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="!px-5 !text-lg !font-semibold !text-gray-800 !leading-tight !group-hover:text-orange-600 transition">
              {p.name}
            </h3>

            {/* Price */}
            <p className="!px-5 !mt-2 !text-xl !font-bold !text-orange-600">
              ₹ {p.price}
            </p>

            {/* Buy Button */}
            <Link
              href={`/order?name=${encodeURIComponent(
                p.name
              )}&price=${p.price}&image=${p.image}`}
              className="!m-5 !block !text-center !bg-orange-500 !hover:bg-orange-600 !text-white !py-3 !rounded-xl !font-semibold !shadow-md !transition-all"
            >
              <i className="fas fa-shopping-cart mr-2"></i>
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
