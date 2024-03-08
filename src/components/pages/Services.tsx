import { useCallback } from "react";
import HeroSection from "../organs/Services/HeroSection";
import Services from "../templates/Services";
import FAQ from "../templates/FAQ";
import {DataOne} from "../particles/ServicesData/ServicesInfo"
import { DataThree } from "../particles/ServicesData/ServicesSolutions";
import NewsLetter from "../organs/NewsLetter";
import { FaBrain,  FaBullseye, FaShieldAlt, FaMoneyBill } from 'react-icons/fa';
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
       <HeroSection/>
       <Services DataThree={DataThree} renderIcons={renderIcons} word={word}/>
       <FAQ DataOne={DataOne}/>
       <NewsLetter/>
       </>
    )
}
export default ManagingServices;