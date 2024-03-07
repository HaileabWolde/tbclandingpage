import HeroSection from "../organs/Services/HeroSection";
import Services from "../organs/Services/Services";
//import Brands from "../organs/Services/Brands";
//import Testimonials from "../organs/Services/Testimonals";
//import Platform from "../organs/Services/Platforms";
import FAQ from "../templates/FAQ";
import {DataOne} from "../particles/ServicesData/ServicesSolutions"
import NewsLetter from "../organs/NewsLetter";
const ManagingServices = ()=>{
    return (
       <>
       <HeroSection/>
       <Services/>
        {/*<Brands/>*/}
      {/*<Testimonials/>*/} 
       {/*<Platform/>*/}
       <FAQ DataOne={DataOne}/>
       <NewsLetter/>
       </>
    )
}
export default ManagingServices;