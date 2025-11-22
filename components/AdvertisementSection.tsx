"use client";

export default function AdvertisementSection() {
  return (
    <div className="abt-section mb-150">
      <div className="container">
        <div className="row">

          {/* LEFT — Video Thumbnail */}
          <div className="col-lg-6 col-md-12">
            <div className="abt-bg">
              <a
                href="https://www.youtube.com/watch?v=iESeunrRbcA"
                className="video-play-btn popup-youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>

          {/* RIGHT — About Text */}
          <div className="col-lg-6 col-md-12">
            <div className="abt-text">
              <p className="top-sub">Since 2024</p>

              <h2>
                We are <span className="orange-text">Advik Fruit Box</span>
              </h2>

              <p>
                At Advik Fruit Box, we deliver premium fresh-cut fruits daily, 
                ensuring hygiene, freshness, and rich nutrition in every box. 
                Perfect for busy individuals, fitness lovers, and families.
              </p>

              <p>
                Our fruit boxes are curated with love, cleaned with care, 
                and packed to stay fresh longer. Your healthy lifestyle 
                starts with one box a day!
              </p>

              <a href="/about" className="boxed-btn mt-4">
                Know More
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
