import { useCallback } from "react"
import {
    HeroSection, Services, Brands, Platform,
    FAQ, DataTwo, DataOne, DataThree,
    DataFour, Hero, TestimonialTexts,Testimonials,
    NewsLetter, planning, team, development,
    deployment, Support, BrandOne, BrandTwo,
    ProfileImg1, ProfileImg2, ProfileImg3,ProfileImg4,
    MobileApp,FaStar, FaCog, FaLink, FaWrench
  } from "./MobileImage"; 

const Mobile_Development = ()=>{
  const renderServiceIcon = useCallback((element: number) => {
    switch (element) {
        case 0:
            return planning;
        case 1:
            return team;
        case 2:
            return development;
        case 3:
            return  Support;
        case 4:
            return deployment;
        default:
            return "";
    }
}, []);
const renderIcons = useCallback((element: number) => {
    switch (element) {
        case 0:
            return <FaStar size={15} color="currentColor"/>;
        case 1:
            return <FaCog size={15} color="currentColor"/>;
        case 2:
            return <FaLink size={15} color="currentColor"/>;
        case 3:
            return <FaWrench size={15} color="currentColor"/>;
        default:
            return "";
    }
}, [])
const renderBrandsIcon = useCallback((element: number) => {
    switch (element) {
        case 0:
            return BrandOne;
        case 1:
            return BrandTwo;
        default:
            return "";
    }
}, []);
const renderProfileImg = useCallback((element: number) => {
    switch (element) {
        case 0:
            return ProfileImg2;
        case 1:
            return ProfileImg1;
        case 2:
            return ProfileImg3;
        case 3:
            return ProfileImg4;
        default:
            return "";
    }
}, [])
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