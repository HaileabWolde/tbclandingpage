import { useCallback } from "react"
import { FaStar, FaCog, FaChartLine } from 'react-icons/fa';
import { AiOutlineBulb } from 'react-icons/ai';
import HeroSection from "../organs/Consulting/HeroSection"
import Brands from "../organs/Consulting/Brands"
import Platform from "../templates/Platforms"
import FAQ from "../templates/FAQ"
import {DataTwo} from "../particles/ConsultacyData/ConsultancyBrands"
import { DataOne } from "../particles/ConsultacyData/FAQ"
import { DataThree } from "../particles/ConsultacyData/Consultancy Solution"
import Services from "../templates/Services"
import Testimonials from "../organs/Consulting/Testimonals"
import NewsLetter from "../organs/NewsLetter"
import planning from "../../assets/Approach Two/Consulting.png"
import team from "../../assets/Approach Two/Research.png"
import development from "../../assets/Approach Two/Desgin.png"
import collabration from "../../assets/Approach Two/Implmentation.png"
import Support from "../../assets/Approach Two/Moniterring.png"
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
    const word = "Technology Consultancy"
    return (
        <>
            <HeroSection/>
            <Services DataThree={DataThree} renderIcons={renderIcons} word={word}/>
            <Brands/>
            <Testimonials/>
            <Platform DataTwo={DataTwo} renderServiceIcon={renderServiceIcon}/>
            <FAQ DataOne={DataOne}/>
            <NewsLetter/>
        </>
    )
}
export default Consulting