import {useRef } from "react";
import Slider from "react-slick";
import {motion} from "framer-motion"
import {renderProfileImg, CaretLeft, CaretRight,
  Text, Card, Button, Chat,
  DataOne } from "./index"
const HeroSection = () => {
  const sliderRef = useRef<Slider | null>();

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true, // Allow swiping on mobile devices
    adaptiveHeight: true, // Adjust the height of the carousel to the current slide
};

  return (
    <div id="HOME" className="w-full mt-[90px]">
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings} className="flex w-full justify-center">
        {DataOne.cards.map((card, index) => (
          <div className="w-full flex overflow-hidden" key={index}>
            <Card
              cardClass="w-full relative overflow-hidden "
              imageAlt={card.firstText}
              imageSrc={renderProfileImg(index)}
              imageWrapperClass="w-full overflow-hidden h-[500px] md:h-[700px]"
              cover="object-fit opacity-80"
              textWrapperClass=" h-full"
            >
              <div className=" absolute top-0 left-0 right-0  flex justify-between items-center h-full ">
              <Text >
              <Button onClick={previous} id="prev" className="cursor-pointer outline-none border-none text-white p-2 rounded-full bg-gray-800 hover:bg-gray-900"  type="button">
                            <CaretLeft size={24} color="currentColor" weight="fill" />
                        </Button>
              </Text>
              <Text >
              <Button onClick={next} id="next"  className="cursor-pointer outline-none border-none text-white p-2 rounded-full bg-gray-800 hover:bg-gray-900" type="button">
                            <CaretRight size={24}  color="currentColor" weight="fill" />
                        </Button>
              </Text>
              </div>
              <div className="absolute bottom-[60px] right-[110px] md:right-[200px] flex ">
                {
                  ['TBC TECHNOLOGY SOLUTIONS', 'Adverstiment Technology', 'Software Outsorcing Project', 'It Consultancy', 'Software Development'].map((item, index)=> (
                    <Button
                    key={item + index}
                    className="w-3 h-3 rounded-[50%] bg-[white] m-1 cursor-pointer hover:bg-[#4169E1] transition-colors duration-200 ease-in-out p-2 md:p-3"
                    style={card.firstText === item ? {backgroundColor: '#4169E1'} : {}}
                    onClick={next}
                    >
                      
                    </Button>
                  ))
                }
              </div>
             
              <motion.div
              whileInView={{x:[-100, 0], opacity: [0, 1]}}
              transition={{duration: 0.6,  delayChildren: 10}}
              className="absolute top-[70px] md:top-[100px]  left-[80px] flex flex-col items-center justify-center gap-8 bg-white bg-opacity-80 w-[65%] h-[65%] md:w-[55%] px-2  md:h-[60%] xl:w-[50%]">
              <motion.div
               whileInView={{opacity:[0, 1]}}
               transition={{duration: 1, ease: 'easeInOut'}}
              >
              <Text
            as="h1"
            className=" md:text-6xl xl:text-7xl  text-2xl font-bold text-gradient bg-gradient-to-r  from-[#4698CC]  to-[#4698CC] bg-clip-text text-transparent  font-serif w-full text-center"
           >
            {card.firstText}
          </Text>
          
              </motion.div>
              
          <Text
           
           className="text-black md:text-lg text-sm  font-light font-serif px-4 text-center"
         >
           {card.secondText}
         </Text>
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
              <Button type="button" className="outline-none border-none font-serif text-sm md:text-base">
                CONTACT US
              </Button>
            </div>
              </motion.div>
             
            </Card>
             
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;