import { useCallback } from "react"
import HeroSection from "../organs/Software/HeroSection"
import Services from "../templates/Services"
import Platform from "../templates/Platforms"
import FAQ from "../templates/FAQ"
import {DataOne} from "../particles/SoftwareData/FAQ"
import {DataTwo} from "../particles/SoftwareData/SoftwareSolutions"
import {DataThree} from "../particles/SoftwareData/SoftwareInfo"
import NewsLetter from "../organs/NewsLetter"
import planning from "../../assets/Approach/Planning.png"
import team from "../../assets/Approach/Team Allocation Two.png"
import development from "../../assets/Approach/Development.png"
import deployment from "../../assets/Approach Two/deployment.png"
import Support from "../../assets/Approach/Support.png"
import { FaStar, FaCog, FaLink, FaWrench } from 'react-icons/fa';
const Software = ()=> {
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
                return <FaStar size={15} color="currentColor" />;
            case 1:
                return <FaCog size={15} color="currentColor"  />;
            case 2:
                return <FaLink size={15} color="currentColor" />;
            case 3:
                return <FaWrench size={15} color="currentColor"/>;
            default:
                return "";
        }
    }, [])
    const word= "Software Application"
    return (
       <>
       <HeroSection/>
       <Services DataThree={DataThree}  renderIcons={renderIcons} word={word}/>
       <Platform DataTwo={DataTwo} renderServiceIcon={renderServiceIcon}/>
       <FAQ  DataOne={DataOne}/>
       <NewsLetter/>
       </>
    )
}
export default Software