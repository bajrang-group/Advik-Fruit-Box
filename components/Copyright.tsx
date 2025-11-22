"use client";

export default function Copyright() {
  return (
    <>
      {/* copyright */}
      <div className="copyright">
        <div className="container">
          <div className="row">

            {/* Left side copyright text */}
            <div className="col-lg-6 col-md-12">
              <p>
                Copyright &copy; {new Date().getFullYear()} 
                {" "} <strong>Advik Fruit Box</strong>. All Rights Reserved.
                <br />
                Designed & Developed by <a href="#">Bajrang Team</a>
              </p>
            </div>

            {/* Right side social icons */}
            <div className="col-lg-6 text-right col-md-12">
              <div className="social-icons">
                <ul>

                  <li>
                    <a href="https://facebook.com" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://instagram.com" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://linkedin.com" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* end copyright */}
    </>
  );
}
