import Script from "next/script";
import "./globals.css";  
import Loader  from "../components/Loader"
import Header  from "../components/Header"
import FeaturesSection  from "../components/FeaturesSection"
import WhatsAppPopup  from "../components/WhatsAppPopup"
import Footer from "../components/Footer"
import Copyright  from "../components/Copyright"
import type { ReactNode } from "react";

export const metadata = {
  title: "Advik Fruit Box",
  description: "Responsive Bootstrap4 Shop Template, Created by Bajrang Group",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <link rel="shortcut icon" type="image/png" href="/assets/img/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap"
          rel="stylesheet"
        />

        {/* Keep CSS files as-is (placed in public/assets/css) */}
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
       
      </head>
      <body>
  <Loader />

          <Header/>

        <WhatsAppPopup />

        {children}

          <Footer />

      <Copyright />

        {/* Scripts: jQuery must be loaded before plugins */}
        <Script src="/assets/js/jquery-1.11.3.min.js" strategy="beforeInteractive" />
        <Script src="/assets/bootstrap/js/bootstrap.min.js" strategy="beforeInteractive" />
        {/* <Script src="/assets/js/jquery.countdown.js" strategy="afterInteractive" /> */}
        <Script src="/assets/js/jquery.isotope-3.0.6.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/waypoints.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.meanmenu.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/sticker.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
