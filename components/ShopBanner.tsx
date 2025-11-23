"use client";

import DynamicMonth from "./DynamicMonth";

export default function Hero() {
  return (
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
  );
}
