"use client";

export default function Hero() {
  return (
   <div className="hero-area relative w-full h-[90vh] overflow-hidden">
    
   
     {/* Background Video */}
     <video
       className="absolute top-0 left-0 w-full h-full object-cover"
       autoPlay
       loop
       muted
         preload="none"
         poster="/assets/img/hero-bg-png"
       playsInline
     >
       <source src="/assets/img/herobg-vid.mp4" type="video/mp4" />
     </video>
   
     {/* Dark Overlay */}
     <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
   
     {/* Hero Content */}
     <div className="container relative z-10">
       <div className="row">
         <div className="col-lg-9 offset-lg-2 text-center">
           <div className="hero-text">
             <div className="hero-text-tablecell">
               <p className="subtitle text-orange-400">Fresh &amp; Organic</p>
               <h1 className="text-white">Fresh Fruits Packed With Love & Care</h1>
               <div className="hero-btns mt-4">
                 <a href="/products" className="boxed-btn">
                   Explore Fruit Boxes
                 </a>
                 <a href="contact.html" className="bordered-btn">
                   Get in Touch
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div> 
   </div>
  );
}
