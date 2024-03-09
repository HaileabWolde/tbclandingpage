import { useCallback } from "react"
import {
    HeroSection, Services, Platform, FAQ,
    DataOne, DataTwo, DataThree, Hero,
    NewsLetter, planning, team, development,
    deployment, Support, SoftwareApp, FaStar,
    FaCog, FaLink, FaWrench,
  } from "./SoftwareImage";
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
       <HeroSection Hero={Hero} profile={SoftwareApp}/>
       <Services DataThree={DataThree}  renderIcons={renderIcons} word={word}/>
       <Platform DataTwo={DataTwo} renderServiceIcon={renderServiceIcon}/>
       <FAQ  DataOne={DataOne}/>
       <NewsLetter/>
       </>
    )
}
export default Software