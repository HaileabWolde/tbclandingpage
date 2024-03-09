import {
    HeroSection, Services, FAQ, DataOne,
    DataThree, Hero, NewsLetter,ServicesOne,
    renderIcons
  } from "./ServicesImage";
const ManagingServices = ()=>{
 
    const word = "Managing Services"
    return (
       <>
       <HeroSection Hero={Hero} profile={ServicesOne}/>
       <Services DataThree={DataThree} renderIcons={renderIcons} word={word}/>
       <FAQ DataOne={DataOne}/>
       <NewsLetter/>
       </>
    )
}
export default ManagingServices;