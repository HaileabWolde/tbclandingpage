import { useCallback } from "react"
import {
    integration, team, cleaning, storage,
    charts, EnginneringOne, DataOne, DataTwo,
    DataThree, Hero, HeroSection, Services,
    Platform, FAQ, NewsLetter, FaCheckCircle, 
    FaPuzzlePiece,  FaRocket, FaLock
  } from "./EngineeringImage"; // Import all the images from the new file
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
       <HeroSection Hero={Hero} profile={EnginneringOne}/>
       <Services DataThree={DataThree} renderIcons={renderIcons} word={word}/>
       <Platform DataTwo={DataTwo} renderServiceIcon={renderServiceIcon}/>
       <FAQ DataOne={DataOne}/>
       <NewsLetter/>
       </>
    )
}
export default Enginnering