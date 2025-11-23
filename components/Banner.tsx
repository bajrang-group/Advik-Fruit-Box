"use client";

import Countdown from "./Countdown";

export default function Banner() {
  return (
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
              <Countdown/>

              <a href="cart.html" className="cart-btn mt-3"><i className="fas fa-shopping-cart"></i> Order Your Fruit Box</a>
            </div>

            
          </div>
        </div>
      </section>
  );
}
