import HeroSection from "../organs/ERP/HeroSection";
import Brands from "../organs/ERP/Brands";
import Services from "../organs/ERP/Services";
//import Platform from "../organs/ERP/Platform";
import FAQ from "../organs/ERP/FAQ";
import Testimonials from "../organs/ERP/Testimonials";
import NewsLetter from "../organs/ERP/Contact";
const ERP = ()=> {
    return (
        <>
        <HeroSection/>
        <Services/>
         {/*<Brands/>*/}
        <Testimonials/>  
        {/*<Platform/>*/}
       
        <FAQ/>
        <NewsLetter/>
        </>
    )
}
export default ERP;