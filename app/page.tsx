import './globals.css';
import CountDown from "../components/Countdown"
import DynamicMonth from "../components/DynamicMonth"
import FeaturedProductsCarousel from "../components/FeaturedProductsCarousel"
import Footer from "../components/Footer"
import Copyright  from "../components/Copyright"
import Loader  from "../components/Loader"
import Header  from "../components/Header"
import FeaturesSection  from "../components/FeaturesSection"
import WhatsAppPopup  from "../components/WhatsAppPopup"
import SubscriptionSection  from "../components/SubscriptionSection"

export default function Home() {
  return (
    <>

          <Loader />

          <Header/>

        <WhatsAppPopup />


      {/* search area */}
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn">
                <i className="fas fa-window-close"></i>
              </span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Search For:</h3>
                  <input type="text" placeholder="Keywords" />
                  <button type="submit">
                    Search <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* end search area */}

   
   
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
      <div className="product-section mt-24 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3><span className="orange-text">Our</span> Products</h3>
                <p>n antioxidant powerhouse! Indulge in a premium, vibrant mix of exotic Dragon Fruit, Kiwi, and fresh Strawberries, paired with protein-rich sprouts. Your perfect ready-to-eat detox meal.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src="/assets/img/products/product-1.png" alt="" /></a>
                </div>
                <h3>Exotic Kiwi Strawberry Dragon Fruit Bowl.</h3>
                <p className="product-price"><span>Per Box</span> ₹ 120 </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src="/assets/img/products/product-2.png" alt="" /></a>
                </div>
                <h3>Tropical Fusion Seasonal Fruit Platter</h3>
                <p className="product-price"><span>Per Box</span> ₹ 199 </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center ">
              <div className="single-product-item ">
                <div className="product-image">
                  <a href="single-product.html"><img src="/assets/img/products/product-3.png" alt="" /></a>
                </div>
                <h3>Wholesome Guava & Sprout Energy Box</h3>
                <p className="product-price"><span>Per Box</span> ₹ 349 </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* end product section */}

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
      <div className="testimonail-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <div className="testimonial-sliders">
                <div className="single-testimonial-slider">
                  <div className="client-avater">
                    <img src="/assets/img/avaters/avatar1.png" alt="" />
                  </div>
                  <div className="client-meta">
                    <h3>Saira Hakim <span>Local shop owner</span></h3>
                    <p className="testimonial-body">
                      " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>

                <div className="single-testimonial-slider">
                  <div className="client-avater">
                    <img src="/assets/img/avaters/avatar2.png" alt="" />
                  </div>
                  <div className="client-meta">
                    <h3>David Niph <span>Local shop owner</span></h3>
                    <p className="testimonial-body">
                      " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>

                <div className="single-testimonial-slider">
                  <div className="client-avater">
                    <img src="/assets/img/avaters/avatar3.png" alt="" />
                  </div>
                  <div className="client-meta">
                    <h3>Jacob Sikim <span>Local shop owner</span></h3>
                    <p className="testimonial-body">
                      " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end testimonail-section */}

      {/* advertisement section */}
      <div className="abt-section mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="abt-bg">
                <a href="https://www.youtube.com/watch?v=DBLlFWYcIGQ" className="video-play-btn popup-youtube">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="abt-text">
                <p className="top-sub">Since Year 1999</p>
                <h2>We are <span className="orange-text">Fruitkha</span></h2>
                <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
                <a href="about.html" className="boxed-btn mt-4">know more</a>
              </div>
            </div>

          </div>
        </div>
      </div>
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

      <Footer />

      <Copyright />

  
  </>);
}
