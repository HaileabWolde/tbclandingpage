import HeroSection from "../organs/Consulting/HeroSection"
import Brands from "../organs/Consulting/Brands"
import Services from "../organs/Consulting/Services"
import Platform from "../organs/Consulting/Platforms"
import FAQ from "../templates/FAQ"
import { DataOne } from "../particles/ConsultacyData/FAQ"
import Testimonials from "../organs/Consulting/Testimonals"
import NewsLetter from "../organs/NewsLetter"
const Consulting = ()=> {
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
export default Consulting