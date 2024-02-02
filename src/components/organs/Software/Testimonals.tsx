import {Text} from "../../atoms/Text";
import { useState } from "react";
import { useCallback, useRef } from "react";
import Slider from "react-slick";
import { Button } from "../../atoms/Button";
import { TestimonialTexts } from "../../particles/Testimonies"
import { Card } from "../../molecules/Card";
import ProfileImg1 from "../../../assets/profile1.jpeg"
import ProfileImg2 from "../../../assets/profile2.jpeg"
import ProfileImg3 from "../../../assets/profile3.jpeg"
import ProfileImg4 from "../../../assets/profile4.jpeg"
import "./Testimonals.css"

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
        adaptiveHeight: true, // Adjust the height of the carousel to the current slide

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
    const Checkup = (index)=> {
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
        <section id="TESTIMONIALS" className="w-full mb-4">
          <main className="w-full  bg-gradient-to-b from-gray-100 to-gray-100 py-[100px]">
            
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
                    : "disabled"} h-[400px] pt-6 shadow-md border-solid border-2  bg-white rounded-lg`}
                  imageAlt={feedback.person}
                  imageSrc={renderProfileImg(index)}
                  imageWrapperClass="w-[90px] h-[90px] rounded-[50%] overflow-hidden mx-auto"
                  cover="object-fit"
                >
                    <Text
                    className="w-[70%] mx-auto flex flex-col items-center mt-4 gap-2 "
                    >
                        <Text
                        >
                            <h4>{feedback.person}</h4>
                            
                        </Text>
                        <Text>
                            <h4>{feedback.location}</h4>
                        </Text>
                        <Text>
                            <h4>{feedback.text}</h4>
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
                    className={`w-2 h-2 rounded-[50%] bg-[white] m-1 cursor-pointer ${
                        activeSlide === index ? "bg-[#4797C6] rounded-lg pl-[14px] pr-[14px]" : ""
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