import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col justify-center items-center text-center">
      
        <Image
          src="/assets/hero-bg.png"
          alt="Hero Background"
         fill
           priority
           sizes="100vw"
           className="object-cover object-center"
        />

        {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
      <div className="relative z-10 mt-28">
        <h1 className="text-white font-bold text-9xl md:text-6xl drop-shadow-lg">
          Advik Fruit Box
        </h1>
        <h2 className="text-orange-500 font-bold text-3xl md:text-5xl mt-2 drop-shadow-lg">
          #OrderNow
        </h2>

        <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-10 py-3 rounded-full shadow-xl">
          Order Now
        </button>
      </div>
    


    </section>
  );
}
