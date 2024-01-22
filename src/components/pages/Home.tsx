import BookingSteps from "../organs/BookingSteps"
import HeroSection from "../organs/HeroSection"
import NewsLetter from "../organs/NewsLetter"
import Partners from "../organs/Partners"
import Services from "../organs/Services"
import Testimonials from "../organs/Testimonials"
import TopDestination from "../organs/TopDestination"


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <BookingSteps />
            <hr />
            <Testimonials />
            <hr />
            <Partners />
            <hr />
            <NewsLetter />
        </>
    )
}

export default Home