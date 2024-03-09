import HeroSection from "../../templates/HeroSection";
import Services from "../../templates/Services";
import Platform from "../../templates/Platforms";
import FAQ from "../../templates/FAQ";
import { DataOne } from "../../particles/SoftwareData/FAQ";
import { DataTwo } from "../../particles/SoftwareData/SoftwareSolutions";
import { DataThree } from "../../particles/SoftwareData/SoftwareInfo";
import { Hero } from "../../particles/SoftwareData/SoftwareInfo";
import NewsLetter from "../../templates/NewsLetter";
import planning from "../../../assets/Approach/Planning.png";
import team from "../../../assets/Approach/Team Allocation Two.png";
import development from "../../../assets/Approach/Development.png";
import deployment from "../../../assets/Approach Two/deployment.png";
import Support from "../../../assets/Approach/Support.png";
import SoftwareApp from "../../../assets/Software Development Test.jpg";
import { FaStar, FaCog, FaLink, FaWrench } from "react-icons/fa";

export {
  HeroSection, Services, Platform,
  FAQ, DataOne, DataTwo, DataThree,
  Hero, NewsLetter, SoftwareApp, 
};
export const renderServiceIcon = (element: number) => {
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
}
export const renderIcons = (element: number) => {
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
}