import { useCallback } from "react"
import {
    integration, team, cleaning, storage,
    charts, ERPOne, HeroSection, Services,
  Platform, FAQ, DataOne, DataTwo,
  DataThree, Hero, NewsLetter,
  FaCog, FaSlidersH, FaLink, FaChartLine
  } from "./ERPImage"; // Import all the images from the new file
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
    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <FaCog size={15} color="currentColor" />;
            case 1:
                return <FaSlidersH size={15} color="currentColor"/>;
            case 2:
                return <FaLink size={15} color="currentColor"/>;
            case 3:
                return <FaChartLine size={15} color="currentColor"/>;
            default:
                return "";
        }
    }, [])
    const word = "ERP System"
    return (
        <>
        <HeroSection Hero={Hero} profile={ERPOne}/>
        <Services DataThree={DataThree} renderIcons={renderIcons} word={word} />
        <Platform DataTwo={DataTwo} renderServiceIcon={renderServiceIcon}/>
        <FAQ DataOne={DataOne}/>
        <NewsLetter/>
        </>
    )
}
export default ERP;