import { useCallback } from "react"
import { DataOne } from "../../particles/MobileData/MobileBrands"
import {motion} from "framer-motion"
import { Text } from "../../atoms/Text"
import { Card } from "../../molecules/Card"
import BrandOne from "../../../assets/BrandOne.png"
import BrandTwo from "../../../assets/BrandTwo.png"
import BrandThree from "../../../assets/BrandThree.png"
import BrandFour from "../../../assets/BrandFour.png"
import BrandFive from "../../../assets/BrandFive.png"
import BrandSix from "../../../assets/BrandSix.png"

const Brands = ()=> {
    const renderServiceIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return BrandOne;
            case 1:
                return BrandTwo;
            case 2:
                return BrandThree;
            case 3:
                return BrandFour;
            case 4:
                return BrandFive;
            case 5:
                return BrandSix;
            default:
                return "";
        }
    }, []);
    return (
        <section className="w-full ">
            <motion.div
            whileInView={{opacity:[0, 1]}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            >
            <Text
                as="h2" 
                className="w-full font-serif font-bold text-3xl flex flex-col items-center mt-[150px] mb-[50px]">
                    Our Previous Works
                </Text>
                <div className="w-[80%] flex justify-between flex-wrap mx-auto">
                        {
                            DataOne.cards.map((card, index)=> (
                                <Card
                                cardClass="w-[90px] h-[90px] flex flex-col justify-center items-center"
                                imageAlt="Card.image"
                                imageSrc={renderServiceIcon(index)}
                               cover="object-fit"
                                >

                                </Card>
                            ))
                        }
                </div>
            </motion.div>
              
        </section>
    )
}

export default Brands