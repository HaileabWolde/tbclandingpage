import { useState, useRef } from "react";
import { Button, TestimonialTexts, Card,
  FaQuoteLeft, FaQuoteRight, Text, renderProfileImg,  settings} from "./index"
import Slider from "react-slick";
const Testimonials = ()=> {
    const sliderRef = useRef<Slider | null>();
    const [activeSlide, setActiveSlide] = useState(0);
    const [middleSlide, setMiddleSlide] = useState(1);
    const Checkup = (index:number)=> {
      if(index === 4){
          const newINDEX = 0
          return setMiddleSlide( newINDEX)
      }
      else{
          return setMiddleSlide(index)
      }
  }
    return (
        <section id="TESTIMONIES" className="w-full">
          <main className="w-full  bg-gradient-to-b from-gray-100 to-gray-100 py-[40px] md:py-[100px]">
                <div className='w-full flex flex-col gap-6 '>
                    <Text as="p" className="font-semibold bg-gradient-to-r  from-[#4698CC]  to-[#4698CC] bg-clip-text text-transparent   text-center">
                        {TestimonialTexts.firstText}
                    </Text>
                    <Text as="h1" className="text-xl md:text-4xl bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text font-semibold text-center mb-4">
                        {TestimonialTexts.secondText}
                    </Text>
                </div>
                <Slider
                    ref={(slider) => (sliderRef.current = slider)}
                    {...settings}
                    className="flex justify-between w-[90%] mx-auto overflow-hidden"
                >
              {TestimonialTexts.feedBacks.map((feedback, index) => (
                <Card
                  key={index}
                  cardClass={` ${ middleSlide === index
                    ? " bg-opacity-100 transform scale-110"
                    : " bg-opacity-100 md:opacity-50 md:pointer-events-none"} h-[400px] pt-6 shadow-md border-solid border-2  bg-white rounded-lg`}
                  imageAlt="Hello"
                  imageSrc={renderProfileImg(index)}
                  imageWrapperClass="w-[35%] h-[35%] overflow-hidden mx-auto"
                  cover="object-fit"
                >
                    <Text
                    className="w-[70%] mx-auto flex flex-col items-center mt-4 gap-2 "
                    >
                        
                        <Text>
                            <h4 className="font-semibold font-serif">{feedback.location}</h4>
                        </Text>
                        <Text>
                      
                          <FaQuoteLeft className={`${middleSlide === index ? 'text-gray-600': 'text-gray-300'} mb-2`}/>
                            <h4 className="font-serif text-xs md:text-sm">{feedback.text}</h4>
                            <div className="w-full flex flex-col items-end">
                            <FaQuoteRight className={`${middleSlide === index ? 'text-gray-600': 'text-gray-300'} mb-2`}/>
                            </div>
                           
                        </Text>
                    </Text>
                   
                </Card>
              ))}
            
            </Slider>
            <Text
              className=" flex w-full  justify-center mt-8"
              >
              {
                  ['Mike taylor', 'Gina', 'Emma', 'Loveth'].map((item, index)=> (
                    <Button
                    key={item + index}
                    className={`w-2 h-2 rounded-[50%] m-1 cursor-pointer ${
                        activeSlide === index ? "bg-[#4698CC] rounded-lg pl-[14px] pr-[14px]" : " bg-gradient-to-r from-red-200 to-red-500"
                      } transition-colors duration-200 ease-in-out p-[6px]`}
                      onClick={() => {
                        sliderRef.current?.slickGoTo(index);
                        setActiveSlide(index);
                        Checkup(index + 1);
                      }}
                    >
                      
                    </Button>
                  ))
                }
              </Text>
          </main>
        </section>
      );
}
export default Testimonials;
/*
*/