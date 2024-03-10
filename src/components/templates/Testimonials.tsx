import {Text} from "../atoms/Text";
import { useState } from "react";
import {useRef } from "react";
import Slider from "react-slick";
import { Button } from "../atoms/Button";
import { Card } from "../molecules/Card";

import {  FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface FAQProps {
  TestimonialTexts: {
    firstText: string;
    secondText: string;
    feedBacks: {
        text: string;
        location: string;
    }[];
},
renderProfileImg: (element: number) => string
}

const Testimonials = ({TestimonialTexts, renderProfileImg}: FAQProps)=> {
    const sliderRef = useRef<Slider | null>();
    const [activeSlide, setActiveSlide] = useState(0);
   
    // Function for next button
    

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
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

  
   
    return (
        <section id="TESTIMONIES" className="w-full">
          <main className="w-full  bg-gradient-to-b from-gray-100 to-gray-100 py-[100px]">
                    <Text as="h1" className="font-semibold bg-gradient-to-r  from-[#4698CC]  to-[#4698CC] bg-clip-text text-transparent text-center text-xl md:text-3xl mb-4">
                        {TestimonialTexts.firstText}
                    </Text>
                <Slider
                    ref={(slider) => (sliderRef.current = slider)}
                    {...settings}
                    className="flex justify-center w-[80%] mx-auto overflow-hidden"
                >
              {TestimonialTexts.feedBacks.map((feedback, index) => (
                <Card
                  key={index}
                  cardClass={` ${ activeSlide === index
                    ? " bg-opacity-100 transform scale-110"
                    : " bg-opacity-100 md:opacity-50 md:pointer-events-none"} h-[400px] pt-6 shadow-md border-solid border-2  bg-white rounded-lg`}
                  imageAlt="Hello"
                  imageSrc={renderProfileImg(index)}
                  imageWrapperClass="w-[30%] h-[30%] overflow-hidden mx-auto"
                  cover="object-fit"
                >
                    <Text
                    className="w-[70%] mx-auto flex flex-col items-center mt-4 gap-2 "
                    >
                        
                        <Text>
                            <h4 className="font-semibold font-serif text-sm md:text-base">{feedback.location}</h4>
                        </Text>
                        <Text>
                      
                          <FaQuoteLeft className={`${activeSlide === index ? 'text-gray-600': 'text-gray-300'} mb-2`}/>
                            <h4 className="font-serif text-xs md:text-sm">{feedback.text}</h4>
                            <div className="w-full flex flex-col items-end">
                            <FaQuoteRight className={`${activeSlide === index ? 'text-gray-600': 'text-gray-300'} mb-2`}/>
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
                  TestimonialTexts.feedBacks.map((_, index)=> (
                    <Button      
                    className={`w-2 h-2 rounded-[50%] m-1 cursor-pointer ${
                        activeSlide === index ? "bg-[#4698CC] rounded-lg pl-[14px] pr-[14px]" : " bg-gradient-to-r from-red-200 to-red-500"
                      } transition-colors duration-200 ease-in-out p-[6px]`}
                      onClick={() => {
                        sliderRef.current?.slickGoTo(index);
                        setActiveSlide(index);
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