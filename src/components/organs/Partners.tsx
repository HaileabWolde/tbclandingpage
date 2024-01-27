import Slider from "react-slick";
import partners1 from "../../assets/partners1.png";
import partners2 from "../../assets/partners2.png";
import partners3 from "../../assets/partners3.png";
import { Text } from "../atoms/Text";
import { Card } from "../molecules/Card";
import { useAppSelector } from "../../../reduxToolkit/hooks";

const Partners = () => {
  const client = useAppSelector((state) => state.client.clientData);
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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

  return (
    <section id= "BRANDS" className="w-full lg:px-9 px-1 my-10 md:my-16 lg:my-3 bg-gradient-to-r from-[#37306B] to-[#19376D]">
      <div className="w-full flex gap-6 justify-center lg:items-center pt-6 mb-6">
        <Text
          as="h1"
          className="lg:text-5xl md:text-3xl text-4xl bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text font-semibold font-serif"
        >
          Our Best Clients
        </Text>
      </div>
      <Slider
        {...settings}
        className="w-full flex gap-6 justify-center lg:items-center mt-6 pb-6"
      >
        <Card
          clientName="ENgida"
          cardClass="p-12 bg-white rounded-lg cursor-pointer flex item-center justify-center "
          imageAlt="partenrsLogo"
          imageSrc={partners1}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-12 bg-white  rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partners2}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-12 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partners3}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-12 bg-white  rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partners1}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-12 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partners2}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-12 bg-white  rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partners3}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-12 bg-white  rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partners1}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-12 bg-white  rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partners2}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-12 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partners3}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
      </Slider>
      <div className="w-full flex gap-6 justify-center lg:items-center mt-6 mb-6"></div>
    </section>
  );
};

export default Partners;
