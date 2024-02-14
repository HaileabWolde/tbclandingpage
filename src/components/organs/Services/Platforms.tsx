import { useCallback } from "react"
import {motion} from  "framer-motion"
import { DataOne } from "../../particles/MobileData/MobileBrands"
import { Text } from "../../atoms/Text"
import { Card } from "../../molecules/Card"
import flutter from "../../../assets/flutter.png"
import node from "../../../assets/node.png"
import react from "../../../assets/react.png"
import sass from "../../../assets/sass.png"
import python from "../../../assets/python.png"
import typescript from "../../../assets/typescript.png"

const Platform = ()=> {
    const renderServiceIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return flutter;
            case 1:
                return node;
            case 2:
                return react;
            case 3:
                return sass;
            case 4:
                return python;
            case 5:
                return typescript;
            default:
                return "";
        }
    }, []);
    return (
        <section id="SOLUTIONS"  className="w-full bg-[#edf2f8] md:py-[100px]">
            <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.6,  ease: 'easeInOut'}}
            >
            <Text
        as="h2" 
        className="w-[100vw] font-serif font-bold text-2xl md:text-3xl flex flex-col items-center  mb-[50px] ml-2 bg-gradient-to-r  from-[#4797C6] to-[#4797C6] bg-clip-text text-transparent">
            Technology and Platforms
        </Text>
        <div 
       className=" w-full md:w-[80%] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 flex-wrap mx-auto">
                {
                    DataOne.cards.map((card, index)=> (
                        <Card
                        cardClass="w-[90px] h-[90px] flex flex-col justify-center items-center  rounded-[50%] shadow-md bg-white"
                        imageAlt="Card.image"
                        imageSrc={renderServiceIcon(index)}
                        imageWrapperClass="w-[50%] h-[50%]"
                        cover={`object-fit ${card}`} 
                        >

                        </Card>
                    ))
                }
        </div>
            </motion.div>
       
</section>
    )
}
export default Platform