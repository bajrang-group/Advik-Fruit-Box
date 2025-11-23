"use client";

import { useRouter } from "next/navigation";

interface Product {
  name: string;
  price: number;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    name: "Exotic Kiwi Strawberry Dragon Fruit Bowl",
    price: 120,
    image: "/assets/img/products/product-1.png",
    link: "/product/exotic-kiwi-strawberry",
  },
  {
    name: "Tropical Fusion Seasonal Fruit Platter",
    price: 199,
    image: "/assets/img/products/product-2.png",
    link: "/product/tropical-fusion",
  },
  {
    name: "Wholesome Guava & Sprout Energy Box",
    price: 349,
    image: "/assets/img/products/product-3.png",
    link: "/product/guava-sprout-box",
  },
];

export default function ProductSection() {
  const router = useRouter(); // ✅ FIXED – router added

  return (
    <div className="product-section mt-24 mb-150">
      <div className="container">

        {/* TITLE */}
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h3>
                <span className="orange-text">Our</span> Products
              </h3>
              <p>
                An antioxidant powerhouse! Indulge in a premium, vibrant mix of
                exotic Dragon Fruit, Kiwi, and fresh Strawberries, paired with
                protein-rich sprouts. Your perfect ready-to-eat detox meal.
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="row">
          {products.map((p, i) => (
            <div
              key={i}
              className={`col-lg-4 col-md-6 text-center ${
                i === 2 ? "offset-md-3 offset-lg-0" : ""
              }`}
            >
              <div className="single-product-item">

                {/* IMAGE */}
                <div className="product-image">
                  <a href={p.link}>
                    <img src={p.image} alt={p.name} />
                  </a>
                </div>

                {/* NAME */}
                <h3>{p.name}</h3>

                {/* PRICE */}
                <p className="product-price">
                  <span>Per Box</span> ₹ {p.price}
                </p>

                {/* ADD TO CART BUTTON */}
                <button
  onClick={() =>
    router.push(
      `/order?name=${encodeURIComponent(p.name)}&price=${p.price}&image=${p.image}`
    )
  }
  className="cart-btn !bg-orange-500 !text-white !py-3 !px-6 !rounded-3xl !font-medium !shadow-md !hover:bg-orange-600 !transition-all inline-flex items-center gap-2"
>
  <i className="fas fa-shopping-cart"></i>
  Add to Cart
</button>


              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
