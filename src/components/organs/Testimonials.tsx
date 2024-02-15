import {Text} from "../atoms/Text";
import { useState } from "react";
import { useCallback, useRef } from "react";
import Slider from "react-slick";
import { Button } from "../atoms/Button";
import { TestimonialTexts } from "../particles/Testimonies"
import { Card } from "../molecules/Card";
import ProfileImg1 from "../../assets/Engida.png"
import ProfileImg2 from "../../assets/tbc_logo/TBCONE.png"
import ProfileImg3 from "../../assets/Gafat.png"
import ProfileImg4 from "../../assets/Excellence.png"
import {  FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials = ()=> {
    const sliderRef = useRef<Slider | null>();
    const [activeSlide, setActiveSlide] = useState(0);
    const [middleSlide, setMiddleSlide] = useState(1);
    // Function for next button
    

    // Slider settings
    const settings = {
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

    const renderProfileImg = useCallback((element: number) => {
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
    }, [])
    const Checkup = (index:number)=> {
        if(index === 4){
            const newINDEX = 0
            return setMiddleSlide( newINDEX)
        }
        else{
            return setMiddleSlide(index)
        }
    }
    console.log(middleSlide)
    return (
        <section id="TESTIMONIES" className="w-full">
          <main className="w-full  bg-gradient-to-b from-gray-100 to-gray-100 py-[100px]">
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
                            <h4 className="font-serif text-sm">{feedback.text}</h4>
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