import CountDown from "../components/Countdown"
import DynamicMonth from "../components/DynamicMonth"
import FeaturedProductsCarousel from "../components/client/FeaturedProductsCarousel"
import Footer from "../components/Footer"
import Copyright  from "../components/Copyright"
import Loader  from "../components/Loader"
import Header  from "../components/Header"
import FeaturesSection  from "../components/FeaturesSection"
import WhatsAppPopup  from "../components/WhatsAppPopup"
import SubscriptionSection  from "../components/SubscriptionSection"
import AdvertisementSection from "@/components/AdvertisementSection";
import SearchArea from "@/components/SearchArea";
import TestimonialSection from "@/components/TestimonialSection";
import ProductSection from "@/components/ProductSection";


export default function Home() {
  return (
    <>

        


   


   
   
      {/* hero area */}
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
              <a href="shop.html" className="boxed-btn">
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

      {/* end hero area */}

      {/* features list section */}
     <FeaturesSection />
      

      {/* product section */}
   

<ProductSection />


      {/* cart banner section */}
      <section className="cart-banner pt-100 pb-100">
        <div className="container">
          <div className="row clearfix">
    <div className="image-column col-lg-6  ">
  <div className="image relative w-full min-h-[450px] flex items-center justify-center  -mt-28">

    {/* Price badge */}
    <div className="price-box absolute top-5 left-5 z-20 border-4  p-2">
      <div className="inner-price border-2  p-1">
        <span className="price">
          <strong>34%</strong><br />off per kg
        </span>
      </div>
    </div>

    {/* BIG centered image */}
    <img
      src="/assets/img/fruitbox.png"
      alt=""
      className="absolute inset-0 m-auto w-[80%] max-w-[750px] object-contain z-10 border-4 border-purple-500"
    />
    
  </div>
</div>


            <div className="content-column col-lg-6">
              <h3><span className="orange-text">Deal</span> of the month</h3>
              <h4>Special Discount Fruit Box</h4>
              <div className="text">Freshly hand-picked fruits delivered straight to your doorstep. Packed with nutrition, flavor, and care in every box.</div>

              {/* Countdown Timer */}
              {/* <div className="time-counter">
                <div className="time-countdown clearfix" data-countdown="2020/2/01">
                  <div className="counter-column">
                    <div className="inner"><span className="count">00</span>Days</div>
                  </div>
                  <div className="counter-column">
                    <div className="inner"><span className="count">00</span>Hours</div>
                  </div>
                  <div className="counter-column">
                    <div className="inner"><span className="count">00</span>Mins</div>
                  </div>
                  <div className="counter-column">
                    <div className="inner"><span className="count">00</span>Secs</div>
                  </div>
                </div>
              </div> */}
              <CountDown/>

              <a href="cart.html" className="cart-btn mt-3"><i className="fas fa-shopping-cart"></i> Order Your Fruit Box</a>
            </div>

            
          </div>
        </div>
      </section>
      {/* end cart banner section */}

      {/* testimonail-section */}
      <TestimonialSection />

      {/* end testimonail-section */}

      {/* advertisement section */}
     <AdvertisementSection />
      {/* end advertisement section */}

    
      <section className="shop-banner">
  <div className="container">
    <h3>
      <DynamicMonth /> sale is on! <br />
      with big <span className="orange-text">Discount...</span>
    </h3>

    <div className="sale-percent">
      <span>Sale! <br /> Upto</span>45% <span>off</span>
    </div>

    <a href="shop.html" className="cart-btn btn-lg">Grab Your Box</a>
   
  </div>
</section>
      {/* end shop banner */}


      <SubscriptionSection/>

      <FeaturedProductsCarousel />

    

  
  </>);
}
