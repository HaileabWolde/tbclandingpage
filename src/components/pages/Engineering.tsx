import { useCallback } from "react"
import HeroSection from "../organs/Enginnering/HeroSection"
import Services from "../organs/Enginnering/Services"
//import Brands from "../organs/Enginnering/Brands"
//import Testimonials from "../organs/Enginnering/Testimonials"
import Platform from "../templates/Platforms"
import FAQ from "../templates/FAQ"
import NewsLetter from "../organs/NewsLetter"
import { DataOne } from "../particles/EnginneringData/FAQ"
import { DataTwo } from "../particles/EnginneringData/DataSol"
import integration from "../../assets/Approach/Integration.png"
import team from "../../assets/Approach Two/Research.png"
import cleaning from "../../assets/Approach/Cleaning.png"
import storage from "../../assets/Approach/Storage.png"
import charts from "../../assets/Approach/Charts.png"
const Enginnering = ()=> {
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
export default Enginnering