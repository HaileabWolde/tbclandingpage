import HeroSection from "../organs/ERP/HeroSection";
//import Brands from "../organs/ERP/Brands";
import Services from "../organs/ERP/Services";
import Platform from "../organs/ERP/Platform";
import FAQ from "../templates/FAQ";
import { DataOne } from "../particles/ERPData/FAQ";
//import Testimonials from "../organs/ERP/Testimonials";
import NewsLetter from "../organs/NewsLetter";
const ERP = ()=> {
    return (
        <>
        <HeroSection/>
        <Services/>
         {/*<Brands/>*/}
        {/*<Testimonials/>*/}  
        <Platform/>
        <FAQ DataOne={DataOne}/>
        <NewsLetter/>
        </>
    )
}
export default ERP;