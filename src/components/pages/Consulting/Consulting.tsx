import { useCallback } from "react"

import {
    planning, team, development, collabration,
    Support, BrandOne, BrandTwo,ProfileImg1,
    ProfileImg2, ConsultingOne, Brands, Platform,
    FAQ, DataTwo, DataOne, DataThree, DataFour,
    TestimonialTexts, Hero, HeroSection, Services,
    Testimonials, NewsLetter,FaStar, FaCog, FaChartLine,
    AiOutlineBulb
  } from "./ConsultingImage"; 
const Consulting = ()=> {
    const renderServiceIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return planning;
            case 1:
                return team;
            case 2:
                return development;
            case 3:
                return  collabration;
            case 4:
                return Support;
            default:
                return "";
        }
    }, []);
    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <FaStar size={15} color="currentColor" />;
            case 1:
                return <FaCog size={15} color="currentColor"/>;
            case 2:
                return <FaChartLine size={15} color="currentColor"/>;
            case 3:
                return <AiOutlineBulb size={15} color="currentColor"/>;
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
            default:
                return "";
        }
    }, [])
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