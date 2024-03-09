import planning from "../../../assets/Approach Two/Consulting.png";
import team from "../../../assets/Approach Two/Research.png";
import development from "../../../assets/Approach Two/Desgin.png";
import collabration from "../../../assets/Approach Two/Implmentation.png";
import Support from "../../../assets/Approach Two/Moniterring.png";
import BrandOne from "../../../assets/Gafat.png";
import BrandTwo from "../../../assets/Excellence.png";
import ProfileImg1 from "../../../assets/Gafat.png";
import ProfileImg2 from "../../../assets/Excellence.png";
import ConsultingOne from "../../../assets/ConsultingOne.jpg";
import Brands from "../../templates/Brands";
import Platform from "../../templates/Platforms"
import FAQ from "../../templates/FAQ"
import {DataTwo} from "../../particles/ConsultacyData/ConsultationInfo"
import { DataOne } from "../../particles/ConsultacyData/FAQ"
import { DataThree } from "../../particles/ConsultacyData/Consultancy Solution"
import { DataFour } from "../../particles/ConsultacyData/ConsultancyBrands";
import { TestimonialTexts } from "../../particles/ConsultacyData/Consultancy Testimonies";
import { Hero } from "../../particles/ConsultacyData/Consultancy Solution";
import HeroSection from "../../templates/HeroSection";
import Services from "../../templates/Services"
import Testimonials from "../../templates/Testimonials";
import NewsLetter from "../../templates/NewsLetter";
import { FaStar, FaCog, FaChartLine } from 'react-icons/fa';
import { AiOutlineBulb } from 'react-icons/ai';
export {
 ConsultingOne, Brands, Platform,
  FAQ, DataTwo, DataOne, DataThree,DataFour,
  TestimonialTexts, Hero, HeroSection, Services,
  Testimonials, NewsLetter,FaStar, FaCog, FaChartLine,
  AiOutlineBulb
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
          return collabration;
      case 4:
          return Support;
      default:
          return "";
  }
};

export const renderIcons = (element: number) => {
  switch (element) {
      case 0:
          return <FaStar size={15} color="currentColor" />;
      case 1:
          return <FaCog size={15} color="currentColor" />;
      case 2:
          return <FaChartLine size={15} color="currentColor" />;
      case 3:
          return <AiOutlineBulb size={15} color="currentColor" />;
      default:
          return "";
  }
};

export const renderBrandsIcon = (element: number) => {
  switch (element) {
      case 0:
          return BrandOne;
      case 1:
          return BrandTwo;
      default:
          return "";
  }
};

export const renderProfileImg = (element: number) => {
  switch (element) {
      case 0:
          return ProfileImg2;
      case 1:
          return ProfileImg1;
      default:
          return "";
  }
};