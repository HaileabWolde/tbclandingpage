import {
    HeroSection, Services, Brands, Platform,
    FAQ, DataTwo, DataOne, DataThree,
    DataFour, Hero, TestimonialTexts,Testimonials,
    NewsLetter, MobileApp,renderServiceIcon,renderIcons,
    renderBrandsIcon,renderProfileImg
  } from "./MobileImage"; 

const Mobile_Development = ()=>{
    
    const word="Mobile Applications"
    return (
      <>
      <HeroSection  Hero={Hero} profile={MobileApp}/>
      <Services DataThree={DataThree} renderIcons={renderIcons} word={word}/>
      <Brands DataFour={DataFour} renderBrandsIcon={renderBrandsIcon}/>
      <Testimonials TestimonialTexts={TestimonialTexts} renderProfileImg={renderProfileImg}/>
     <Platform DataTwo={DataTwo}  renderServiceIcon={renderServiceIcon}/> 
      <FAQ DataOne={DataOne}/>
      <NewsLetter/>
     
      </>
    )
}
export default Mobile_Development;