import { useCallback } from "react"
import HeroSection from "../organs/ERP/HeroSection";
//import Brands from "../organs/ERP/Brands";
import Services from "../organs/ERP/Services";
import Platform from "../templates/Platforms";
import FAQ from "../templates/FAQ";
import { DataOne } from "../particles/ERPData/FAQ";
import { DataTwo } from "../particles/ERPData/ERPSolution";
//import Testimonials from "../organs/ERP/Testimonials";
import NewsLetter from "../organs/NewsLetter";
import integration from "../../assets/Approach/Integration.png"
import team from "../../assets/Approach Two/Research.png"
import cleaning from "../../assets/Approach/Cleaning.png"
import storage from "../../assets/Approach/Storage.png"
import charts from "../../assets/Approach/Charts.png"
const ERP = ()=> {
    const renderServiceIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return team;
            case 1:
                return integration;
            case 2:
                return cleaning;
            case 3:
                return  storage;
            case 4:
                return charts;
            default:
                return "";
        }
    }, []);
    return (
        <>
        <HeroSection/>
        <Services/>
         {/*<Brands/>*/}
        {/*<Testimonials/>*/}  
        <Platform DataTwo={DataTwo} renderServiceIcon={renderServiceIcon}/>
        <FAQ DataOne={DataOne}/>
        <NewsLetter/>
        </>
    )
}
export default ERP;