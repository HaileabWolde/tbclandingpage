import {motion} from  "framer-motion"
import { Text } from "../atoms/Text"
import { Card } from "../molecules/Card"

interface FAQProps {
    DataTwo: {
        cardsOne: {
      firstText: string;
      secondText: string;
    }[];
  },
  renderServiceIcon: (element: number) => string;
}
const Platform = ({ DataTwo, renderServiceIcon }: FAQProps)=> {
  
    return (
        <section id="APPROACH"  className="w-full bg-[#edf2f8] md:py-[100px]">
            <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.6,  ease: 'easeInOut'}}
            >
            <Text
        as="h2" 
        className="w-[100vw] font-serif font-meduim text-2xl md:text-3xl flex flex-col items-center  mb-[50px] ml-2 pt-8 md:pt-0 ">
          Our Approach is to <br/> <span className="font-semibold bg-gradient-to-r  from-[#4797C6] to-[#4797C6] bg-clip-text text-transparent">Make Your Dream A Reality!!!</span>
        </Text>
        <div 
       className=" w-full md:w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 flex-wrap px-4">
                <div className=" flex flex-col md:flex-row gap-4 pb-8 md:pb-0">
                {
                    DataTwo.cardsOne.map((card, index)=> (
                       <div className="flex flex-col items-center w-full ">
                          <Card
                        cardClass="w-[130px] h-[130px] flex flex-col justify-center items-center  rounded-[50%] shadow-md bg-white p-3"
                        imageAlt="Card.image"
                        imageSrc={renderServiceIcon(index)}
                        imageWrapperClass="w-[90%] h-[90%]"
                        cover={`object-fit`} 
                        >

                        </Card>
                        <Text className=" mt-3    flex flex-col gap-2 ">
                            <h1 className="font-semibold font-serif text-center">{card.firstText}</h1>
                            <p className="font-serif text-lg px-3 md:px-0 md:text-sm ">{card.secondText}</p>
                        </Text>
                        </div>
                       )) }
                </div>
               
        </div>
            </motion.div>
       
</section>
    )
}
export default Platform