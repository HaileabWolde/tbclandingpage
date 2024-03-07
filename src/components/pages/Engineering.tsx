import HeroSection from "../organs/Enginnering/HeroSection"
import Services from "../organs/Enginnering/Services"
//import Brands from "../organs/Enginnering/Brands"
//import Testimonials from "../organs/Enginnering/Testimonials"
import Platform from "../organs/Enginnering/Platform"
import FAQ from "../templates/FAQ"
import NewsLetter from "../organs/NewsLetter"
import { DataOne } from "../particles/EnginneringData/FAQ"
const Enginnering = ()=> {
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
export default Enginnering