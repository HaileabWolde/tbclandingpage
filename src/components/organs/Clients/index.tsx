import partners1 from "../../../assets/Engida.jpg";
import partners2 from "../../../assets/tbc_logo/TBCONE.png";
import partners3 from "../../../assets/Gafat.png";
import partner4 from "../../../assets/Excellence.png"
import { Text } from "../../atoms/Text";
import { Card } from "../../molecules/Card";

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
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
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
export {
    partners1, partners2, partners3,
    partner4, Text, Card, settings
}