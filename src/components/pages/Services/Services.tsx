import { useCallback } from "react";
import {
    HeroSection, Services, FAQ, DataOne,
    DataThree, Hero, NewsLetter, FaBrain,
    FaBullseye, FaShieldAlt, FaMoneyBill,ServicesOne,
  } from "./ServicesImage";
const ManagingServices = ()=>{
  const renderIcons = useCallback((element: number) => {
    switch (element) {
        case 0:
            return <FaBrain size={15} color="currentColor" />;
        case 1:
            return <FaMoneyBill  size={15} color="currentColor"  />;
        case 2:
            return <FaBullseye size={15} color="currentColor" />;
        case 3:
            return <FaShieldAlt size={15} color="currentColor"/>;
        default:
            return "";
    }
}, [])
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