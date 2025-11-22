"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const products = [
  {
    name: "Strawberry Box",
    image: "/assets/img/products/product-img-1.jpg",
  },
  {
    name: "Mixed Fruit Box",
    image: "/assets/img/products/product-img-2.jpg",
  },
  {
    name: "Citrus Box",
    image: "/assets/img/products/product-img-3.jpg",
  },
  {
    name: "Tropical Pack",
    image: "/assets/img/products/product-img-4.jpg",
  },
  {
    name: "Seasonal Box",
    image: "/assets/img/products/product-img-5.jpg",
  },
  {
    name: "Seasonal Box",
    image: "/assets/img/products/product-img-6.jpg",
  },
];

export default function FeaturedProductsCarousel() {
  return (
    <div className="py-20 bg-[#fff7f0]">
      <div className="container text-center mb-10">
        <h3 className="text-3xl font-bold">
          <span className="orange-text">Featured</span> Products
        </h3>
        <p className="text-gray-600">
          Explore our best-selling fruit boxes curated for freshness & taste.
        </p>
      </div>

      <div className="container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.3}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="h-full bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-all duration-300">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-[180px] object-cover rounded-lg"
                />
                <h4 className="text-xl font-semibold text-center mt-3">{p.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
