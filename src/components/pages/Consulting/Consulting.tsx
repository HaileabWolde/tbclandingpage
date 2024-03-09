import {
   ConsultingOne, Brands, Platform,
    FAQ, DataTwo, DataOne, DataThree, DataFour,
    TestimonialTexts, Hero, HeroSection, Services,
    Testimonials, NewsLetter, renderServiceIcon, renderIcons,
    renderBrandsIcon, renderProfileImg,
  } from "./ConsultingImage"; 
const Consulting = ()=> {
    
    const word = "Technology Consultancy"
    return (
        <>
            <HeroSection Hero={Hero} profile={ConsultingOne}/>
            <Services DataThree={DataThree} renderIcons={renderIcons} word={word}/>
            <Brands DataFour={DataFour} renderBrandsIcon={renderBrandsIcon}/>
            <Testimonials TestimonialTexts={TestimonialTexts}  renderProfileImg={renderProfileImg}/>
            <Platform DataTwo={DataTwo} renderServiceIcon={renderServiceIcon}/>
            <FAQ DataOne={DataOne}/>
            <NewsLetter/>
        </>
    )
}
export default Consulting