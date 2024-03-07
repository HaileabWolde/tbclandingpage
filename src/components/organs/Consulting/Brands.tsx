import { useCallback } from "react"
import { DataTwo } from "../../particles/ConsultacyData/ConsultancyBrands"
import {motion} from "framer-motion"
import { Text } from "../../atoms/Text"
import { Card } from "../../molecules/Card"
import BrandOne from "../../../assets/Gafat.png"
import BrandTwo from "../../../assets/Excellence.png"

const Brands = ()=> {
    const renderServiceIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return BrandOne;
            case 1:
                return BrandTwo;
    
            default:
                return "";
        }
    }, []);
    return (
        <section id="CLIENTS"  className="w-full bg-[#edf2f8] md:py-[100px]">
            <motion.div
            whileInView={{opacity:[0, 1]}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            >
            <Text
                as="h2" 
                className="w-full font-serif font-bold text-2xl md:text-3xl flex flex-col items-center mb-[50px] bg-gradient-to-r  from-[#4797C6] to-[#4797C6] bg-clip-text text-transparent pt-8 md:pt-0">
                    Our Previous Works
                </Text>
                <div className="w-[80%] flex flex-col gap-4 md:gap-0  md:flex-row items-center justify-center flex-wrap mx-auto">
                        {
                           DataTwo.cards.map((card, index)=> (
                                <Card
                                cardClass="w-[250px] h-[320px] flex flex-col justify-center items-center rounded-lg shadow-md bg-white py-4 "
                                imageAlt="Card.image"
                                imageSrc={renderServiceIcon(index)}
                                imageWrapperClass="w-[50%] h-[50%]"
                                cover={`object-fit ${card}`}
                                textWrapperClass="px-2 flex flex-col gap-2" 
                                >
                                    <h1 className=" text-center font-semibold font-serif">{card.firstText}</h1>
                                    <p className="text-sm font-serif">{card.secondText}</p>
                                </Card>
                            ))
                        }
                </div>
            </motion.div>
              
        </section>
    )
}

export default Brands