"use client";

export default function Footer() {
  return (
    <>
      {/* footer */}
      <div className="footer-area">
        <div className="container">
          <div className="row">

            {/* About Section */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">About Us</h2>
                <p>
                  Advik Fruit Box delivers the freshest, seasonal & organic fruits directly 
                  to your home. Quality, hygiene & customer satisfaction is our priority.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">Get in Touch</h2>
                <ul>
                  <li>12/ Shivnagari, Near Ganesh Mandir, Bijali Nagar, Akurdi - 411035</li>
                  <li>support@advikfruitbox.com</li>
                  <li>+91 8855996633</li>
                </ul>
              </div>
            </div>

            {/* Pages */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">Pages</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/shop">Shop</a></li>
                  <li><a href="/subscription">Subscription</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>

            {/* Subscribe */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-box subscribe">
                <h2 className="widget-title">Subscribe</h2>
                <p>Subscribe to our mailing list to get fresh fruit offers & updates.</p>
                <form action="#">
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* end footer */}
    </>
  );
}
