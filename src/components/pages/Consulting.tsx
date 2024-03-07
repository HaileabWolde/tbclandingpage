import { useCallback } from "react"
import HeroSection from "../organs/Consulting/HeroSection"
import Brands from "../organs/Consulting/Brands"
import Services from "../organs/Consulting/Services"
import Platform from "../templates/Platforms"
import FAQ from "../templates/FAQ"
import {DataTwo} from "../particles/ConsultacyData/ConsultancyBrands"
import { DataOne } from "../particles/ConsultacyData/FAQ"
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
    return (
        <>
            <HeroSection/>
            <Services/>
            <Brands/>
            <Testimonials/>
            <Platform DataTwo={DataTwo} renderServiceIcon={renderServiceIcon}/>
            <FAQ DataOne={DataOne}/>
            <NewsLetter/>
        </>
    )
}
export default Consulting