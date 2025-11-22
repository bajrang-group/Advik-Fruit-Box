"use client";

export default function FeaturesSection() {
  return (
    <>
      {/* features list section */}
      <div className="list-section pt-80 pb-80">
        <div className="container">
          <div className="row">

            {/* Feature 1 */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-truck"></i>
                </div>
                <div className="content">
                  <h3>Fresh Delivery</h3>
                  <p>Cut fruits delivered within hours</p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="content">
                  <h3>24/7 Support</h3>
                  <p>We’re here anytime you need us</p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="list-box d-flex justify-content-start align-items-center">
                <div className="list-icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <div className="content">
                  <h3>Easy Refunds</h3>
                  <p>Quick refund for any issue!</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* end features list section */}
    </>
  );
}
