import HeroSection from "../organs/Mobile/MobileHeroS";
import Services from "../organs/Mobile/MobileService";
import Brands from "../organs/Mobile/MobileBrands";
import Platform from "../organs/Mobile/MobilePlatforms";
import FAQ from "../templates/FAQ";
import {DataOne} from "../particles/MobileData/MobilePlatforms"
import Testimonials from "../organs/Mobile/Testimonials";
import NewsLetter from "../organs/NewsLetter";
const Mobile_Development = ()=>{
    return (
      <>
      <HeroSection/>
      <Services/>
      <Brands/>
      <Testimonials/>
     <Platform/> 
      <FAQ DataOne={DataOne}/>
      <NewsLetter/>
     
      </>
    )
}
export default Mobile_Development;