import { useCallback } from "react";
import { List } from "../../atoms/List";
import { motion } from "framer-motion";
import { Text } from "../../atoms/Text";

import { FaStar, FaCog, FaChartLine } from 'react-icons/fa';
import { AiOutlineBulb } from 'react-icons/ai';
import { DataOne } from "../../particles/ConsultacyData/Consultancy Solution";
const Services = ()=>{

    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <FaStar size={15} color="currentColor" />;
            case 1:
                return <FaCog size={15} color="currentColor"/>;
            case 2:
                return <FaChartLine size={15} color="currentColor"/>;
            case 3:
                return <AiOutlineBulb size={15} color="currentColor"/>;
            default:
                return "";
        }
    }, [])

    return (
        <section id="ABOUT" className="w-full  flex flex-col ">
            <motion.div
            whileInView={{y: [100 ,50,  0], opacity: [0, 0, 1]}}
            transition={{duration: 0.6,  ease: 'easeInOut'}}
            >
            <main className="w-full bg-gradient-to-b from-gray-100 to-gray-100 pb-[20px] flex flex-col gap-12">
                <Text
                className="w-full flex flex-col items-center  justify-center text-3xl font-serif mt-[50px] font-bold pl-3 md:pl-0 bg-gradient-to-r  from-[#4797C6] to-[#4797C6] bg-clip-text text-transparent"
                >
                Why Choose Coherent Solutions for Technolgy Consultancy?
                </Text>
                <ul className="w-full md:ml-[200px] md:w-[80%]  mx-auto flex flex-col md:flex-row justify-between flex-wrap md:items-center pl-4 md:pl-0">
                    
                    {
                        DataOne.cards.map((card, index)=> (
                          
                               
                                    <List className="flex gap-5  w-full md:w-[50%] mb-8" key={index}>
                                    <Text className={`text-white flex flex-col items-center justify-center  p-3 rounded-[50%] w-5 h-5 ${index === 0 ? "bg-[#007bff]" : index === 1 ? "bg-[#ffA500]" : index === 2 ? "bg-[#800080]" : "bg-[#008080]"}`}>
                                    <div>{renderIcons(index)}</div>
                                    </Text>
                                    <Text className="flex flex-col gap-3">
                                        <Text
                                        as="h2" className="w-full font-serif text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text"
                                        >
                                            {card.firstText}
                                        </Text>
                                        <Text
                                        as="p"
                                        className="w-[80%]"
                                        >
                                            {card.secondText}
                                        </Text>
                                    </Text>
                            </List>
                           
                              
                        ))
                    }
                    
                   
                </ul>
            </main>
            </motion.div>
            
          
        </section>
    )
}
export default Services;