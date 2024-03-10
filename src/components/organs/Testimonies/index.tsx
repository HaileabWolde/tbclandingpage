import { Button } from "../../atoms/Button";
import { TestimonialTexts } from "../../particles/Testimonies"
import { Card } from "../../molecules/Card";
import ProfileImg1 from "../../../assets/Engida.jpg"
import ProfileImg2 from "../../../assets/tbc_logo/TBCONE.png"
import ProfileImg3 from "../../../assets/Gafat.png"
import ProfileImg4 from "../../../assets/Excellence.png"
import {  FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import {Text} from "../../atoms/Text";

export const renderProfileImg = (element: number) => {
    switch (element) {
        case 0:
            return ProfileImg2;
        case 1:
            return ProfileImg1;
        case 2:
            return ProfileImg3;
        case 3:
            return ProfileImg4;
        default:
            return "";
    }
}
export const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true, // Allow swiping on mobile devices
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ] // Adjust the height of the carousel to the current slide

};

export {
    Button, TestimonialTexts, Card,
    FaQuoteLeft, FaQuoteRight, Text
}
