import { useCallback } from "react";
import { List } from "../../atoms/List";
import { motion } from "framer-motion";
import { Text } from "../../atoms/Text";

import { FaStar, FaCog, FaLink, FaWrench } from 'react-icons/fa';
import { DataOne } from "../../particles/SoftwareData/SoftwareSolutions";
const Services = ()=>{

    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <FaStar size={15} color="currentColor" weight="fill" />;
            case 1:
                return <FaCog size={15} color="currentColor" weight="fill" />;
            case 2:
                return <FaLink size={15} color="currentColor" weight="fill" />;
            case 3:
                return <FaWrench size={15} color="currentColor" weight="fill" />;
            default:
                return "";
        }
    }, [])

    return (
        <section id="SoftwareServices" className="w-full mt-[100px] flex flex-col ">
            <motion.div
            whileInView={{y: [100 ,50,  0], opacity: [0, 0, 1]}}
            transition={{duration: 0.6,  ease: 'easeInOut'}}
            >
            <main className="w-full bg-gradient-to-b from-gray-100 to-gray-100 pb-[150px] flex flex-col gap-12">
                <Text
                className="w-full flex flex-col items-center  justify-center text-3xl font-serif mt-[150px] font-bold"
                >
                Why Choose Coherent Solutions for Your Software Application?
                </Text>
                <ul className="w-[80%]  mx-auto flex justify-between flex-wrap items-center">
                    
                    {
                        DataOne.cards.map((card, index)=> (
                          
                               
                                    <List className="flex gap-5  w-[50%] mb-8" key={index}>
                                    <Text className={`text-white flex flex-col items-center justify-center  p-3 rounded-[50%] w-5 h-5 ${index === 0 ? "bg-[#007bff]" : index === 1 ? "bg-[#ffA500]" : index === 2 ? "bg-[#800080]" : "bg-[#008080]"}`}>
                                    <div>{renderIcons(index)}</div>
                                    </Text>
                                    <Text className="flex flex-col">
                                        <Text
                                        as="h2" className="font-serif text-2xl font-bold"
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