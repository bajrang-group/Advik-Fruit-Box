"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  // Transparent → Solid only on homepage
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Active link style
  const activeLink = (path: string) =>
    pathname === path ? "text-orange-500 font-bold" : "";

  return (
    <>
      {/* KEEP ALL CSS FILES EXACT SAME */}
      <link rel="stylesheet" href="/assets/css/all.min.css" />
      <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
      <link rel="stylesheet" href="/assets/css/main.css" />
      <link rel="stylesheet" href="/assets/css/responsive.css" />

      <header
        id="sticker"
        className={`
          fixed w-full z-50 transition-all duration-500 
          ${isHome ? (scrolled ? "bg-[#051922] shadow-lg" : "bg-transparent") : "bg-[#051922] shadow-lg"}
        `}
      >
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-12 text-center">

              <div className="main-menu-wrap">
                
                {/* Logo */}
                <div className="site-logo">
                  <Link href="/">
                    <img src="/assets/img/logo.png" alt="Advik Fruit Box Logo" />
                  </Link>
                </div>

                {/* Navigation Menu */}
                <nav className="main-menu">
                  <ul>

                    {/* HOME */}
                    <li>
                      <Link href="/" className={activeLink("/")}>
                        Home
                      </Link>
                    </li>

                    {/* ABOUT */}
                    <li>
                      <Link href="/about" className={activeLink("/about")}>
                        About
                      </Link>
                    </li>

                    {/* CONTACT */}
                    <li>
                      <Link href="/contact" className={activeLink("/contact")}>
                        Contact
                      </Link>
                    </li>

                    {/* HELP */}
                    <li>
                      <Link href="/help" className={activeLink("/help")}>
                        Help
                      </Link>
                    </li>

                    {/* SHOP */}
                    <li>
                      <Link href="/products" className={activeLink("/products")}>
                        Shop
                      </Link>
                    </li>

                    {/* Icons */}
                    <li>
                      <div className="header-icons">
                        <Link href="/cart" className="shopping-cart">
                          <i className="fas fa-shopping-cart" />
                        </Link>

                        <a className="mobile-hide search-bar-icon" href="#">
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </li>

                  </ul>
                </nav>

                {/* Mobile Search Icon */}
                <a className="mobile-show search-bar-icon" href="#">
                  <i className="fas fa-search" />
                </a>

                {/* Mobile Menu placeholder */}
                <div className="mobile-menu"></div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Fix menu item hover color override */}
      <style jsx global>{`
        .main-menu ul li a {
          transition: 0.3s ease;
        }
        .main-menu ul li a.text-orange-500 {
          color: #ff7a00 !important;
        }
      `}</style>
    </>
  );
}
