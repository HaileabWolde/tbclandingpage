import {
    HeroSection, Services, Platform, FAQ,
    DataOne, DataTwo, DataThree, Hero,
    NewsLetter, SoftwareApp, renderServiceIcon,
    renderIcons
  } from "./SoftwareImage";
const Software = ()=> {
   
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