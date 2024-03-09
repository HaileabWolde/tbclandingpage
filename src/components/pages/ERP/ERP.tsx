import {
     ERPOne, HeroSection, Services,
  Platform, FAQ, DataOne, DataTwo,
  DataThree, Hero, NewsLetter,
  renderServiceIcon, renderIcons
  } from "./ERPImage"; // Import all the images from the new file
const ERP = ()=> {
    
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