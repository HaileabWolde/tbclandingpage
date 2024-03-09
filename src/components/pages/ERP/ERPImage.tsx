import integration from "../../../assets/Approach/Integration.png";
import team from "../../../assets/Approach Two/Research.png";
import cleaning from "../../../assets/Approach/Cleaning.png";
import storage from "../../../assets/Approach/Storage.png";
import charts from "../../../assets/Approach/Charts.png";
import ERPOne from "../../../assets/ERP.jpeg";
import HeroSection from "../../templates/HeroSection";
import Services from "../../templates/Services";
import Platform from "../../templates/Platforms";
import FAQ from "../../templates/FAQ";
import { DataOne } from "../../particles/ERPData/FAQ";
import { DataTwo } from "../../particles/ERPData/ERPSolution";
import { DataThree } from "../../particles/ERPData/ERPInfo";
import { Hero } from "../../particles/ERPData/ERPInfo";
import NewsLetter from "../../templates/NewsLetter";
import { FaCog, FaSlidersH, FaLink, FaChartLine } from 'react-icons/fa';
export {
   ERPOne, HeroSection, Services,
  Platform, FAQ, DataOne, DataTwo,
  DataThree, Hero, NewsLetter,
};
export const renderServiceIcon = (element: number) => {
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
}
export const renderIcons = (element: number) => {
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
}