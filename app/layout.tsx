import "./globals.css";  
import Loader  from "../components/Loader"
import Header  from "../components/Header"
import FeaturesSection  from "../components/FeaturesSection"
import WhatsAppPopup  from "../components/WhatsAppPopup"
import Footer from "../components/Footer"
import Copyright  from "../components/Copyright"
import type { ReactNode } from "react";
import OfferPopup from "@/components/OfferPopup";


export const metadata = {
  title: "Advik Fruit Box",
  description: "Created by Bajrang Team",
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

        
       
      </head>
      <body>
  <Loader />

          <Header/>

        <WhatsAppPopup />

        {children}

          <Footer />

      <Copyright />
  <OfferPopup />

       

      </body>
    </html>
  );
}
