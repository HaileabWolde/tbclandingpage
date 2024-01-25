import { Link } from "react-router-dom"
import { useState } from "react"
import {motion} from 'framer-motion'
import { Text } from "../atoms/Text"
import { ServiceTexts } from "../particles/Services"
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
    const [expandedCards, setExpandedCards] = useState(() =>
    Array(ServiceTexts.cards.length).fill(false)
  );

  const handleRead = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setExpandedCards((prev) => {
      const newExpandedCards = [...prev];
      newExpandedCards[index] = !newExpandedCards[index];
      return newExpandedCards;
    });
  };

  const truncateText = (text, characterLimit) => {
    if (text.length <= characterLimit) {
      return text;
    }
  
    const truncatedText = text.substr(0, characterLimit);
    const lastPeriodIndex = truncatedText.lastIndexOf(".");
    if (lastPeriodIndex !== -1) {
      return truncatedText.substr(0, lastPeriodIndex + 1);
    }
  
    return truncatedText;
  };
    return (
        <section id="SOLUTIONS" className="w-full mt-[20px]  flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 ">
            <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.6,  ease: 'easeInOut'}}
            >
                
            <main className="w-[100vw] pt-24 flex flex-col gap-3 items-center bg-gradient-to-b from-gray-100 to-gray-100 mt-8">
                <Text as="p" className="font-semibold bg-gradient-to-r  from-black  to-blue-500 bg-clip-text text-transparent  font-serif ">
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
                                
                                <Text className="text-sm  font-light  text-color3 flex flex-col p-2">
                                    <p>{ expandedCards[index] ? card.secondText : truncateText(card.secondText, 180)} <span>  <button className="font-semibold hover:underline" onClick={(event)=> handleRead(event, index)}>{expandedCards[index] ? 'Less' : 'Read More'}</button> </span></p>
                                   
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