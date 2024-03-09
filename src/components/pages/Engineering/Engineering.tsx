import {
     EnginneringOne, DataOne, DataTwo,
    DataThree, Hero, HeroSection, Services,
    Platform, FAQ, NewsLetter,renderServiceIcon,
    renderIcons 
  } from "./EngineeringImage"; // Import all the images from the new file
const Enginnering = ()=> {
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