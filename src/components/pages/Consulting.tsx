import HeroSection from "../organs/Consulting/HeroSection"
import Brands from "../organs/Consulting/Brands"
import Services from "../organs/Consulting/Services"
//import Platform from "../organs/Consulting/Platforms"
import FAQ from "../organs/Consulting/FAQ"
import Testimonials from "../organs/Consulting/Testimonals"
import NewsLetter from "../organs/Consulting/Contact"
const Consulting = ()=> {
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
export default Consulting