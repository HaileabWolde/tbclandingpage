import {Text} from "../../atoms/Text";
import { useCallback, useRef } from "react";
import Slider from "react-slick";
import { Button } from "../../atoms/Button";
import { TestimonialTexts } from "../../particles/Testimonies"
import { Card } from "../../molecules/Card";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import ProfileImg1 from "../../../assets/profile1.jpeg"
import ProfileImg2 from "../../../assets/profile2.jpeg"
import ProfileImg3 from "../../../assets/profile3.jpeg"
import ProfileImg4 from "../../../assets/profile4.jpeg"
import Feedback from "react-bootstrap/esm/Feedback";

const Testimonials = ()=> {
    const sliderRef = useRef<Slider | null>();

    // Function for next button
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    // function for previous button
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

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
    return (
        <section id="TESTIMONIALS" className="w-full mb-4">
          <main className="w-full  bg-gradient-to-b from-gray-100 to-gray-100 py-[100px]">
            <Slider ref={(slider) => (sliderRef.current = slider)} {...settings} className="flex  justify-between w-[90%] mx-auto overflow-hidden">
              {TestimonialTexts.feedBacks.map((feedback, index) => (
                <Card
                  key={index}
                  cardClass="pb-[100px] pt-6 shadow-md border-solid border-2  bg-white rounded-lg bg-opacity-20"
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
              className=" flex "
              >
              {
                  ['Mike taylor', 'Gina', 'Emma', 'Loveth'].map((item, index)=> (
                    <Button
                    key={item + index}
                    className="w-3 h-3 rounded-[50%] bg-[white] m-1 cursor-pointer hover:bg-[#4169E1] transition-colors duration-200 ease-in-out p-3"
                    onClick={next}
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