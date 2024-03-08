import { useCallback } from "react"
import HeroSection from "../organs/Mobile/MobileHeroS";
import Services from "../templates/Services";
import Brands from "../templates/Brands";
import Platform from "../templates/Platforms";
import FAQ from "../templates/FAQ";
import {DataTwo} from "../particles/MobileData/MobileBrands"
import { DataOne } from "../particles/MobileData/MobilePlatforms"
import { DataThree } from "../particles/MobileData/MobileSol";
import { DataFour } from "../particles/MobileData/MobileInfo";
import { TestimonialTexts } from "../particles/MobileData/MobileTestimonies";
import Testimonials from "../templates/Testimonials";
import NewsLetter from "../organs/NewsLetter";
import planning from "../../assets/Approach/Planning.png"
import team from "../../assets/Approach/Team Allocation Two.png"
import development from "../../assets/Approach/Development.png"
import deployment from "../../assets/Approach Two/deployment.png"
import Support from "../../assets/Approach/Support.png"
import BrandOne from "../../assets/tbc_logo/TBCONE.png"
import BrandTwo from "../../assets/Engida.jpg"
import ProfileImg1 from "../../assets/Engida.jpg"
import ProfileImg2 from "../../assets/tbc_logo/TBCONE.png"
import ProfileImg3 from "../../assets/Gafat.png"
import ProfileImg4 from "../../assets/Excellence.png"
import { FaStar, FaCog, FaLink, FaWrench } from 'react-icons/fa';

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
      <HeroSection/>
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