import { useCallback } from "react"
import {motion} from  "framer-motion"
import { DataOne } from "../../particles/ConsultacyData/ConsultancyBrands"
import { Text } from "../../atoms/Text"
import { Card } from "../../molecules/Card"
import desktop from "../../../assets/Desktop.jpg"
import mobile from "../../../assets/Mobile.png"
import web from "../../../assets/Web.png"

const Platform = ()=> {
    const renderServiceIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return desktop;
            case 1:
                return mobile;
            case 2:
                return web;
            default:
                return "";
        }
    }, []);
    return (
        <section id="SOLUTIONS" className="w-full bg-[#edf2f8] md:py-[100px]">
            <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.6,  ease: 'easeInOut'}}
            >
            <Text
        as="h2" 
        className="w-[100vw] font-serif font-bold text-2xl md:text-3xl flex flex-col items-center  mb-[50px] ml-2 bg-gradient-to-r  from-[#4797C6] to-[#4797C6] bg-clip-text text-transparent">
            Technology and Platforms
        </Text>
        <div className=" w-full md:w-[80%] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 flex-wrap mx-auto">
                {
                    DataOne.cardsOne.map((card, index)=> (
                        <Card
                        cardClass="w-[200px] h-[200px] flex flex-col justify-center items-center rounded-lg shadow-md bg-white py-3 px-2"
                        imageAlt="Card.image"
                        imageSrc={renderServiceIcon(index)}
                        imageWrapperClass="w-[90%] h-[90%]"
                        cover={`object-fit ${card}`}
                        textWrapperClass="px-2 flex flex-col gap-2 mt-2" 
                        >
                                 <h1 className=" text-center font-semibold font-serif">{card.firstText}</h1>
                        </Card>
                    ))
                }
        </div>
            </motion.div>
       
</section>
    )
}
export default Platform