import HeroSection from "../../templates/HeroSection";
import Services from "../../templates/Services";
import FAQ from "../../templates/FAQ";
import { DataOne } from "../../particles/ServicesData/ServicesInfo";
import { DataThree } from "../../particles/ServicesData/ServicesSolutions";
import { Hero } from "../../particles/ServicesData/ServicesInfo";
import NewsLetter from "../../templates/NewsLetter";
import { FaBrain, FaBullseye, FaShieldAlt, FaMoneyBill } from "react-icons/fa";
import ServicesOne from "../../../assets/Service.jpeg";

export {
  HeroSection, Services, FAQ,
  DataOne, DataThree, Hero,
  NewsLetter, ServicesOne,
};
export const renderIcons = (element: number) => {
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
}