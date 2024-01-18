import { Image } from "../atoms/Image";
import bgImage from "../../assets/HeroVector.png";
import heroImage from "../../assets/tbc_logo/TBCTEST.png";
import bgWhite from "../../assets/bgWhite.png";
import { Text } from "../atoms/Text";
import { HeroTexts } from "../particles/DataLists";
import { Button } from "../atoms/Button";
import { Play, Chat } from "@phosphor-icons/react";
import { Fade, Slide } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section id="HOME" className="w-full lg:h-[100vh] overflow-hidden md:h-[550px] h-[700px] relative overflow-x-hidden flex justify-end  bg-cover bg-center"  style={{ backgroundImage: `url(${bgWhite})` }}>
      <Image
        className="h-[50%] w-[80%] lg:h-[75vh] md:h-[50vh] lg:w-1/2 md:w-[55%]"
        image={bgImage}
        alt="Hero Background Vector"
      />
      <main className="w-full lg:h-[750px] grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
        <div className="flex flex-col justify-center gap-6 md:order-2">
          <Text
            as="p"
            className="text-color1 uppercase tracking-widest lg:text-base  text-sm font-normal font-bold"
          >
            {HeroTexts.firstText}
          </Text>
          <Text
            as="h1"
            className=" text-color3 lg:text-7xl md:text-5xl text-3xl font-medium bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent"
          >
            <Fade>{HeroTexts.secondText}</Fade>
          </Text>
          <Text
            as="p"
            className="text-color3 md:text-base text-sm text-justify font-semibold font-serif"
          >
            <Fade>{HeroTexts.thirdText}</Fade>
          </Text>
          <div className="w-full flex md:justify-start justify-between items-center lg:gap-12 md:gap-6 gap-0">
            {/* <Button type="button" className="outline-none border-none lg:px-7 px-5 py-3 bg-color3 text-color5 font-extralight rounded-lg">
                            CONTACT US
                        </Button> */}
            <div className="flex items-center lg:gap-6 gap-3 cursor-pointer">
              <Text as="span" className="relative flex h-14 w-14">
                <Text
                  as="span"
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color1 opacity-75"
                ></Text>
                <Text
                  as="span"
                  className="relative flex justify-center items-center text-white rounded-full h-14 w-14 bg-color1"
                >
                  <Chat size={20} color="currentColor" weight="fill" />
                </Text>
              </Text>
              <Button type="button" className="outline-none border-none">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:order-1 bg-gray-50 bg-opacity-50  " >
          <Slide direction="left">
            <Image
              image={heroImage}
              alt="Hero Image"
              className=" lg:h-[90%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] h-[50vh]"
            />
          </Slide>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
