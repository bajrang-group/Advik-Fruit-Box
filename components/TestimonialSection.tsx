"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Priya Deshmukh",
    role: "Software Engineer, Hinjewadi",
    avatar: "/assets/img/avaters/avatar1.png",
    text: "Advik Fruit Box has made my mornings so easy! The fruits are always fresh, neatly cut, and hygienically packed. Perfect for my office routine.",
  },
  {
    name: "Rahul Patil",
    role: "Fitness Trainer, Pune",
    avatar: "/assets/img/avaters/avatar2.png",
    text: "Super quality! I recommend Advik Fruit Box to all my clients. The freshness and portion size are just perfect for a daily healthy diet.",
  },
  {
    name: "Sneha Kulkarni",
    role: "College Student, Pimpri",
    avatar: "/assets/img/avaters/avatar3.png",
    text: "My mom loves it! Earlier she was worried about me eating outside food, but now I get a clean and fresh fruit box every day. Worth every rupee!",
  },
  {
    name: "Amit Jagtap",
    role: "Business Owner, Chinchwad",
    avatar: "/assets/img/avaters/avatar1.png",
    text: "Very impressed with the service. On-time delivery and premium fruit quality. My whole family enjoys the monthly subscription.",
  },
  {
    name: "Vaishnavi More",
    role: "Homemaker, Akurdi",
    avatar: "/assets/img/avaters/avatar2.png",
    text: "I ordered for my kids and they love the variety! Fresh fruits, no preservatives, and nicely packed. Safe and healthy option.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonail-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 text-center">

            {/* Slider container */}
            <div className="relative overflow-hidden w-full">

              {/* Slider track */}
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  width: `${testimonials.length * 100}%`,
                  transform: `translateX(-${index * (100 / testimonials.length)}%)`,
                }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="w-full flex-shrink-0"
                    style={{ width: `${100 / testimonials.length}%` }}
                  >
                    <div className="single-testimonial-slider text-center px-3">

                      <div className="client-avater mb-3">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="mx-auto rounded-full w-24 h-24"
                        />
                      </div>

                      <h3 className="text-xl font-semibold">
                        {t.name}
                        <span className="block text-sm text-gray-500">{t.role}</span>
                      </h3>

                      <p className="testimonial-body mt-3 text-gray-700 italic">
                        "{t.text}"
                      </p>

                      <div className="last-icon text-orange-500 text-3xl mt-3">
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition ${
                      index === i ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
