"use client";

export default function Header() {
  return (
    <>
      {/* header */}
      <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">

                {/* logo */}
                <div className="site-logo">
                  <a href="/">
                    <img src="/assets/img/logo.png" alt="Advik Fruit Box Logo" />
                  </a>
                </div>

                {/* menu start */}
                <nav className="main-menu">
                  <ul>

                    <li className="current-list-item">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li><a href="/">Static Home</a></li>
                        <li><a href="/slider">Slider Home</a></li>
                      </ul>
                    </li>

                    <li><a href="/about">About</a></li>

                    <li>
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="/404">404 Page</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/checkout">Check Out</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/shop">Shop</a></li>
                      </ul>
                    </li>

                    <li>
                      <a href="/news">News</a>
                      <ul className="sub-menu">
                        <li><a href="/news">News</a></li>
                        <li><a href="/single-news">Single News</a></li>
                      </ul>
                    </li>

                    <li><a href="/contact">Contact</a></li>

                    <li>
                      <a href="/shop">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/checkout">Check Out</a></li>
                        <li><a href="/single-product">Single Product</a></li>
                        <li><a href="/cart">Cart</a></li>
                      </ul>
                    </li>

                    {/* header icons */}
                    <li>
                      <div className="header-icons">
                        <a className="shopping-cart" href="/cart">
                          <i className="fas fa-shopping-cart" />
                        </a>

                        <a className="mobile-hide search-bar-icon" href="#">
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </li>

                  </ul>
                </nav>

                {/* mobile search icon */}
                <a className="mobile-show search-bar-icon" href="#">
                  <i className="fas fa-search" />
                </a>

                <div className="mobile-menu"></div>
                {/* menu end */}

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end header */}
    </>
  );
}
