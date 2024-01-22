import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import { ServiceTexts } from "../particles/Services"
import GroupOfPlus from "../../assets/plusGroup.png"
import { Card } from "../molecules/Card"
import { useCallback } from "react"
import MobileApp from "../../assets/MobileApp.png"
import SoftwareDev from "../../assets/Software Development.png"
import TechnologyConsultancy from "../../assets/Technology Consultancy.png"
import Charts from "../../assets/Charts.png"
import Database from "../../assets/Database.png"
import Dashboard from "../../assets/DashboardOne.png"


const Services = () => {

    const renderServiceIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return SoftwareDev;
            case 1:
                return TechnologyConsultancy;
            case 2:
                return MobileApp;
            case 3:
                return Charts;
            case 4:
                return Database;
            case 5:
                return Dashboard
            default:
                return "";
        }
    }, []);
    return (
        <section id="SOLUTIONS" className="w-full mt-[130px]  flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 ">
            <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.6,  ease: 'easeInOut'}}
            >
                <Image image={GroupOfPlus} alt="Vector" className="absolute top-0 right-4 lg:h-36 h-24" />
            <main className="w-[100vw] pt-32 flex flex-col gap-3 items-center justify-center bg-gradient-to-b from-gray-100 to-gray-100 mt-8">
                <Text as="p" className="font-semibold text-base text-color3/80 tracking-widest ">
                    {ServiceTexts.firstText}
                </Text>
                <Text as="h2" className="md:text-4xl text-2xl font-medium capitalize bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
                    {ServiceTexts.secondText}
                </Text>

                <div className="w-[80%] h-auto grid lg:grid-cols-3 md:grid-cols-1 lg:gap-7 md:gap-10 gap-7 my-12 z-20 mx-auto">
                    {
                        ServiceTexts.cards.map((card, index) => (
                            <Link to={`/services/${card.firstText}`} >
                                    <Card cardClass="w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1 shadow-md border-solid border-2 border-orange-500" imageWrapperClass="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl" cover="object-cover" imageAlt={card.firstText} imageSrc={renderServiceIcon(index)} textWrapperClass="w-full flex flex-col items-center gap-2 text-center" key={index} >
                                <Text as="h4" className="text-base rounded font-medium text-color3">
                                    {card.firstText}
                                </Text>
                                <Text as="p" className="text-sm  font-light  text-color3 line-clamp-5 p-0">
                                    {card.secondText}
                                </Text>
                            </Card>
                            </Link>

                            
                        ))
                    }
                </div>
            </main>

            </motion.div>
            
        </section>
    )
}

export default Services