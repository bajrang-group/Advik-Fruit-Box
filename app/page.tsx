import FeaturedProductsCarousel from "../components/client/FeaturedProductsCarousel"
import FeaturesSection  from "../components/FeaturesSection"
import SubscriptionSection  from "../components/SubscriptionSection"
import AdvertisementSection from "@/components/AdvertisementSection";
import TestimonialSection from "@/components/TestimonialSection";
import ProductSection from "@/components/ProductSection";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner"




export default function Home() {
  return (
    <>    
        <Hero/>

     <FeaturesSection />
      
     <ProductSection />

     <Banner/>
      <TestimonialSection />
    
     <AdvertisementSection />
   
      <SubscriptionSection/>

      <FeaturedProductsCarousel />

  
  
  </>);
}
