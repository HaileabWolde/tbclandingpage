import { useCallback } from "react"
import HeroSection from "../organs/Enginnering/HeroSection"
import Services from "../templates/Services"
//import Brands from "../organs/Enginnering/Brands"
//import Testimonials from "../organs/Enginnering/Testimonials"
import Platform from "../templates/Platforms"
import FAQ from "../templates/FAQ"
import NewsLetter from "../organs/NewsLetter"
import { DataOne } from "../particles/EnginneringData/FAQ"
import { DataTwo } from "../particles/EnginneringData/DataSol"
import { DataThree } from "../particles/EnginneringData/EnginneringInfo"
import integration from "../../assets/Approach/Integration.png"
import team from "../../assets/Approach Two/Research.png"
import cleaning from "../../assets/Approach/Cleaning.png"
import storage from "../../assets/Approach/Storage.png"
import charts from "../../assets/Approach/Charts.png"
import { FaCheckCircle, FaPuzzlePiece,  FaRocket, FaLock} from 'react-icons/fa';
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

    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <FaCheckCircle size={15} color="currentColor"  />;
            case 1:
                return <FaPuzzlePiece size={15} color="currentColor" />;
            case 2:
                return <FaRocket size={15} color="currentColor" />;
            case 3:
                return <FaLock  size={15} color="currentColor"  />;
            default:
                return "";
        }
    }, [])
    const word = "Enginnering Project"
    return (
       <>
       <HeroSection/>
       <Services DataThree={DataThree} renderIcons={renderIcons} word={word}/>
        {/*<Brands/>*/}
       {/*<Testimonials/>*/}

       <Platform DataTwo={DataTwo} renderServiceIcon={renderServiceIcon}/>
       <FAQ DataOne={DataOne}/>
       <NewsLetter/>
       </>
    )
}
export default Enginnering