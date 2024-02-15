import HeroSection from "../organs/Services/HeroSection";
import Services from "../organs/Services/Services";
import Brands from "../organs/Services/Brands";
import Testimonials from "../organs/Services/Testimonals";
//import Platform from "../organs/Services/Platforms";
import FAQ from "../organs/Services/FAQ";
import NewsLetter from "../organs/Services/Contact";
const ManagingServices = ()=>{
    return (
       <>
       <HeroSection/>
       <Services/>
       <Brands/>
       <Testimonials/>
       {/*<Platform/>*/}
       <FAQ/>
       <NewsLetter/>
       </>
    )
}
export default ManagingServices;