import HeroSection from "../organs/Software/HeroSection"
//import Brands from "../organs/Software/Brands"
import Services from "../organs/Software/Services"
import Platform from "../organs/Software/Platforms"
import FAQ from "../templates/FAQ"
import {DataOne} from "../particles/SoftwareData/FAQ"
//import Testimonials from "../organs/Software/Testimonals"
import NewsLetter from "../organs/NewsLetter"
const Software = ()=> {
    return (
       <>
       <HeroSection/>
       <Services/>
       {/*<Brands/>*/}
       {/*<Testimonials/>*/}
       <Platform/>
       <FAQ  DataOne={DataOne}/>
       <NewsLetter/>
       </>
    )
}
export default Software