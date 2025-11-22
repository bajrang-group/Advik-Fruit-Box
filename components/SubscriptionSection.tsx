"use client";

export default function SubscriptionSection() {
  return (
    <>
      {/* Subscription Section */}
      <div className="subscription-section pt-150 pb-150 bg-[#fff7f0]">
        <div className="container">

          {/* Section Title */}
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Our</span> Subscription Plans
                </h3>
                <p>
                  Choose the perfect plan for your daily fruit needs. Fresh, organic,
                  and delivered to your doorstep.
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Cards */}
          <div className="row">

            {/* Weekly Plan */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="subscription-card shadow-lg hover:scale-105 transition-all duration-300 rounded-xl p-4 bg-white text-center h-full flex flex-col justify-between">

                <div>
                  <h3 className="font-bold text-2xl mb-2">Weekly Plan</h3>
                  <p className="text-gray-600 mb-3">
                    Fresh fruits delivered 7 days a week.
                  </p>

                  <div className="price-box mb-4">
                    <span className="text-4xl font-extrabold text-orange-500"> ₹99</span>
                    <p className="text-sm text-gray-500">per week</p>
                  </div>

                  <ul className="text-left mb-4 space-y-2">
                    <li>✔ 1 Fruit Box Everyday</li>
                    <li>✔ Free Delivery</li>
                    <li>✔ Organic & Fresh Picks</li>
                  </ul>
                </div>

                <a href="#" className="subscribe-btn mt-3">Choose Plan</a>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="subscription-card featured shadow-2xl hover:scale-110 transition-all duration-300 rounded-xl p-6 bg-orange-50 text-center border-2 border-orange-500 h-full flex flex-col justify-between">

                <div>
                  <h3 className="font-bold text-2xl mb-2 text-orange-600">Monthly Plan</h3>
                  <p className="text-gray-700 mb-3">Best value for healthy fruit lovers.</p>

                  <div className="price-box mb-4">
                    <span className="text-4xl font-extrabold text-orange-600"> ₹2100</span>
                    <p className="text-sm text-gray-600">per month</p>
                  </div>

                  <ul className="text-left mb-4 space-y-2">
                    <li>✔ Daily Fruit Box</li>
                    <li>✔ Free Fast Delivery</li>
                    <li>✔ Premium Fruit Selection</li>
                    <li>✔ Priority Support</li>
                  </ul>
                </div>

                <a href="#" className="subscribe-btn mt-3">Choose Plan</a>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="subscription-card shadow-lg hover:scale-105 transition-all duration-300 rounded-xl p-4 bg-white text-center h-full flex flex-col justify-between">

                <div>
                  <h3 className="font-bold text-2xl mb-2">Yearly Plan</h3>
                  <p className="text-gray-600 mb-3">
                    Enjoy fruits all year with big savings.
                  </p>

                  <div className="price-box mb-4">
                    <span className="text-4xl font-extrabold text-orange-500"> ₹9900</span>
                    <p className="text-sm text-gray-500">per year</p>
                  </div>

                  <ul className="text-left mb-4 space-y-2">
                    <li>✔ Daily Fruit Box</li>
                    <li>✔ Free Express Delivery</li>
                    <li>✔ Exclusive Seasonal Fruits</li>
                    <li>✔ VIP Priority Support</li>
                  </ul>
                </div>

                <a href="#" className="subscribe-btn mt-3">Choose Plan</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* End Subscription Section */}
    </>
  );
}
