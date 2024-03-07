import { useCallback } from "react"
import HeroSection from "../organs/Software/HeroSection"
//import Brands from "../organs/Software/Brands"
import Services from "../organs/Software/Services"
import Platform from "../templates/Platforms"
import FAQ from "../templates/FAQ"
import {DataOne} from "../particles/SoftwareData/FAQ"
import {DataTwo} from "../particles/SoftwareData/SoftwareSolutions"
//import Testimonials from "../organs/Software/Testimonals"
import NewsLetter from "../organs/NewsLetter"
import planning from "../../assets/Approach/Planning.png"
import team from "../../assets/Approach/Team Allocation Two.png"
import development from "../../assets/Approach/Development.png"
import deployment from "../../assets/Approach Two/deployment.png"
import Support from "../../assets/Approach/Support.png"
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
    return (
       <>
       <HeroSection/>
       <Services/>
       {/*<Brands/>*/}
       {/*<Testimonials/>*/}
       <Platform DataTwo={DataTwo} renderServiceIcon={renderServiceIcon}/>
       <FAQ  DataOne={DataOne}/>
       <NewsLetter/>
       </>
    )
}
export default Software