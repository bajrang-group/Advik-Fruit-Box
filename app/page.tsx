"use client";

import Image from "next/image";
import HeroImg from "../public/heroImg.png"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">

      {/* NAVBAR */}
      <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-green-600">Advik Fruit Box</h1>
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-500">Home</a>
            <a href="#" className="hover:text-green-500">Shop</a>
            <a href="#" className="hover:text-green-500">Subscriptions</a>
            <a href="#" className="hover:text-green-500">Build Your Bowl</a>
            <a href="#" className="hover:text-green-500">Contact</a>
          </nav>
          <button className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700">
            Cart (0)
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="w-full bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Freshly Cut Fruits,<br />
              Delivered to Your Doorstep 🍉
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Clean • Hygienic • Ready-To-Eat fruit bowls, subscriptions & custom mixes.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 text-lg">
                Start Subscription
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 text-lg">
                Build Your Bowl
              </button>
            </div>
          </div>

          <div className="flex-1 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-80 h-80">
              <Image
                src={HeroImg}
                alt="Fruit Bowl"
                fill
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            Explore Our Range 🍓
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">

            <div className="p-6 bg-white shadow-md rounded-xl text-center hover:scale-105 transition">
              <Image
                src={HeroImg}
                alt="Fresh Bowls"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h4 className="mt-4 font-semibold text-gray-700 text-lg">Fresh Cut Bowls</h4>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl text-center hover:scale-105 transition">
              <Image
                src={HeroImg}
                alt="Subscriptions"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h4 className="mt-4 font-semibold text-gray-700 text-lg">Subscriptions</h4>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl text-center hover:scale-105 transition">
              <Image
                src={HeroImg}
                alt="Custom Bowl"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h4 className="mt-4 font-semibold text-gray-700 text-lg">Build Your Bowl</h4>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl text-center hover:scale-105 transition">
              <Image
                src={HeroImg}
                alt="Premium Fruits"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h4 className="mt-4 font-semibold text-gray-700 text-lg">Premium Cut Fruits</h4>
            </div>

          </div>
        </div>
      </section>

      {/* SUBSCRIPTION SECTION */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Flexible Subscriptions 🍍</h3>
          <p className="text-gray-600 mt-2 text-lg">Choose daily, weekly, monthly or yearly plans.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            
            {["Daily", "Weekly", "Monthly", "Yearly"].map((plan) => (
              <div key={plan} className="p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transition">
                <h4 className="text-2xl font-bold text-green-600">{plan}</h4>
                <p className="mt-2 text-gray-600">Fresh fruits delivered on schedule.</p>
                <button className="mt-6 px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700">
                  Subscribe
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">What Our Customers Say ❤️</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <div className="p-6 rounded-xl bg-gray-50 shadow">
              <p className="text-gray-600">“Super fresh and hygienic fruits. Loved the packaging!”</p>
              <h4 className="mt-4 font-semibold text-gray-700">Amit Sharma</h4>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 shadow">
              <p className="text-gray-600">“Perfect for busy professionals. Daily subscription is amazing!”</p>
              <h4 className="mt-4 font-semibold text-gray-700">Sneha Patil</h4>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 shadow">
              <p className="text-gray-600">“Build your bowl is my favourite feature!”</p>
              <h4 className="mt-4 font-semibold text-gray-700">Rajeev Gupta</h4>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-green-700 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-white grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold">Advik Fruit Box</h4>
            <p className="mt-3 text-gray-200">
              Fresh & hygienic cut fruits delivered at your convenience.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-200">
              <li>Shop</li>
              <li>Subscriptions</li>
              <li>Build Your Bowl</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
            <p className="text-gray-200">support@advikfruitbox.com</p>
            <p className="text-gray-200 mt-1">+91 98765 43210</p>
          </div>
        </div>

        <p className="text-center text-gray-300 mt-10">© 2025 Advik Fruit Box • All Rights Reserved</p>
      </footer>
    </main>
  );
}
