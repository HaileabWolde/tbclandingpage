import integration from "../../../assets/Approach/Integration.png";
import team from "../../../assets/Approach Two/Research.png";
import cleaning from "../../../assets/Approach/Cleaning.png";
import storage from "../../../assets/Approach/Storage.png";
import charts from "../../../assets/Approach/Charts.png";
import EnginneringOne from "../../../assets/Data.jpg";
import { DataOne } from "../../particles/EnginneringData/FAQ"
import { DataTwo } from "../../particles/EnginneringData/DataSol"
import { DataThree } from "../../particles/EnginneringData/EnginneringInfo"
import { Hero } from "../../particles/EnginneringData/EnginneringInfo"
import HeroSection from "../../templates/HeroSection"
import Services from "../../templates/Services"
import Platform from "../../templates/Platforms"
import FAQ from "../../templates/FAQ"
import NewsLetter from "../../templates/NewsLetter";
import { FaCheckCircle, FaPuzzlePiece,  FaRocket, FaLock} from 'react-icons/fa';
export {
  EnginneringOne, DataOne, DataTwo,
  DataThree, Hero, HeroSection, Services,
  Platform, FAQ, NewsLetter,FaCheckCircle, FaPuzzlePiece,  FaRocket, FaLock
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
          return <FaCheckCircle size={15} color="currentColor"  />;
      case 1:
          return <FaPuzzlePiece size={15} color="currentColor" />;
      case 2:
          return <FaRocket size={15} color="currentColor" />;
      case 3:
          return <FaLock  size={15} color="currentColor"  />;
      default:
          return "";
  }
}