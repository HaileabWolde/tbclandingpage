import BookingSteps from "../../organs/AboutSection/About Us"
import HeroSection from "../../organs/HeroSection/HeroSection"
import NewsLetter from "../../templates/NewsLetter"
import Partners from "../../organs/Clients/Clients"
import Services from "../../organs/Services/Services"
import Testimonials from "../../organs/Testimonies/Testimonials"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Services />
            <BookingSteps />
            <hr />
            <Testimonials />
            <hr />
            <Partners />
            <hr />
            <NewsLetter />
        </div>
    )
}

export default Home