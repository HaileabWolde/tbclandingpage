import { useCallback, useRef } from "react";
import { Text } from "../atoms/Text"
import { TestimonialTexts } from "../particles/Testimonies"
import Slider from "react-slick";
import { Button } from "../atoms/Button";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { Card } from "../molecules/Card";
import ProfileImg1 from "../../assets/profile1.jpeg"
import ProfileImg2 from "../../assets/profile2.jpeg"
import ProfileImg3 from "../../assets/profile3.jpeg"
import ProfileImg4 from "../../assets/profile4.jpeg"

const Testimonials = () => {
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
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,

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
        <section id="TESTIMONIES" className="w-full  h-auto flex  flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 mt-6 gap-5">
            <main className='w-full grid md:grid-cols-1 lg:gap-0 gap-8 md:gap-5 '>
                {/* Text and Steps Container  */}
                <div className='w-full flex flex-col gap-6 '>
                    <Text as="p" className="font-light text-base text-color3/80 tracking-widest text-center">
                        {TestimonialTexts.firstText}
                    </Text>
                    <Text as="h1" className="lg:text-5xl md:text-3xl text-4xl text-color3 font-medium text-center">
                        {TestimonialTexts.secondText}
                    </Text>
                </div>
                {/* Testimonial Slides Container  */}
                <div className="w-full lg:h-[400px] flex justify-center gap-4 items-center">
                    <div className="lg:h-[250px] w-[90%] ">
                        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
                            {
                                TestimonialTexts.feedBacks.map((feedBack, index) => (
                                    <div className="w-full">
                                        <Card key={index} cardClass="bg-white shadow border-[1px] border-color3/10 relative rounded-xl p-4 lg:h-[200px] h-[260px] lg:mb-4 w-[70%] flex flex-col gap-4 justify-center items-center mx-auto" imageAlt={feedBack.person} imageSrc={renderProfileImg(index)} imageWrapperClass="  flex flex-col justify-center items-center rounded-[50%] overflow-hidden " cover="object-cover object-top" textWrapperClass="flex flex-col justify-center gap-6">
                                            <Text as="q" className="text-[0.84rem] font-light text-color3">
                                                {feedBack.text}
                                            </Text>
                                            <div className="flex flex-col gap-2 absolute top-[48px] left-[100px]">
                                                <Text as="h4" className="text-base text-color3 font-medium">
                                                    {feedBack.person}
                                                </Text>
                                                <Text as="p" className="text-sm text-color3 font-light">
                                                    {feedBack.location}
                                                </Text>
                                            </div>
                                        </Card>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    {/* Controllers  */}
                    <div className="flex flex-col gap-4 pb-5">
                        <Button onClick={previous} id="prev" className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full" type="button">
                            <CaretUp size={18} color="currentColor" weight="fill" />
                        </Button>
                        <Button onClick={next} id="next" className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full" type="button">
                            <CaretDown size={18} color="currentColor" weight="fill" />
                        </Button>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Testimonials