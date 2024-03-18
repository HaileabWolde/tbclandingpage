import Slider from "react-slick";
import { partners1, partners2, partners3,
  partner4, Text, Card, settings} from "./index"
import "./Clients.css"
const Partners = () => {
  return (
    <section id= "CLIENTS" className="w-full lg:px-9 px-1  bg-gradient-to-r from-[#37306B] to-[#19376D]">
      <div className="w-full flex gap-6 justify-center lg:items-center pt-6 mb-6">
        <Text
          as="h1"
          className="lg:text-5xl md:text-3xl text-2xl bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text font-semibold font-serif"
        >
          Our Best Clients
        </Text>
      </div>
      <Slider
        {...settings}
        className="w-full flex gap-6 justify-center lg:items-center mt-6 pb-6"
      >
        <Card    
          cardClass="px-5 py-5 bg-white rounded-lg cursor-pointer flex item-center justify-center h-[180px]"
          imageAlt="partenrsLogo"
          imageSrc={partners1}
          imageWrapperClass="w-[90%] h-[90%]"
          cover="object-contain"
        />
        <Card
          cardClass="px-5 py-5 bg-white  rounded-lg cursor-pointer flex item-center justify-center h-[180px]"
          imageAlt="partenrsLogo"
          imageSrc={partners2}
          imageWrapperClass="w-[90%] h-[90%]"
          cover="object-contain"
        />
        <Card
          cardClass="px-5 py-5 bg-white rounded-lg cursor-pointer flex item-center justify-center h-[180px]"
          imageAlt="partenrsLogo"
          imageSrc={partners3}
          imageWrapperClass="w-[90%] h-[90%]"
          cover="object-contain"
        />
        <Card
          cardClass="px-5 py-5 bg-white  rounded-lg cursor-pointer flex item-center justify-center h-[180px]"
          imageAlt="partenrsLogo"
          imageSrc={partner4}
          imageWrapperClass="w-[90%] h-[90%]"
          cover="object-contain"
        />
       <Card    
          cardClass="px-5 py-5 bg-white rounded-lg cursor-pointer flex item-center justify-center h-[180px]"
          imageAlt="partenrsLogo"
          imageSrc={partners1}
          imageWrapperClass="w-[90%] h-[90%]"
          cover="object-contain"
        />
        <Card
          cardClass="px-5 py-5 bg-white  rounded-lg cursor-pointer flex item-center justify-center h-[180px]"
          imageAlt="partenrsLogo"
          imageSrc={partners2}
          imageWrapperClass="w-[90%] h-[90%]"
          cover="object-contain"
        />
        <Card
          cardClass="px-5 py-5 bg-white rounded-lg cursor-pointer flex item-center justify-center h-[180px]"
          imageAlt="partenrsLogo"
          imageSrc={partners3}
          imageWrapperClass="w-[90%] h-[90%]"
          cover="object-contain"
        />
        <Card
          cardClass="px-5 py-5 bg-white  rounded-lg cursor-pointer flex item-center justify-center h-[180px]"
          imageAlt="partenrsLogo"
          imageSrc={partner4}
          imageWrapperClass="w-[90%] h-[90%]"
          cover="object-contain"
        />
       
      </Slider>
      
    </section>
  );
};

export default Partners;