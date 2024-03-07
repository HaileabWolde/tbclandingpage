import {motion} from "framer-motion";
import {Card} from "../../molecules/Card";
import { Text } from "../../atoms/Text";
import MobileApp from "../../../assets/MobileApp.jpeg"
import { Button } from "../../atoms/Button";

const HeroSection = ()=> {
    return (
        <div id="HOME" className="w-full overflow-hidden mt-[90px]">
            <Card
            cardClass="w-full flex overflow-hidden "
            imageAlt="Mobile App Development"
            imageSrc={MobileApp}
            imageWrapperClass="w-full overflow-hidden h-[500px] md:h-[600px]"
            >
                 <motion.div
              whileInView={{x:[-100, 0], opacity: [0, 1]}}
              transition={{duration: 0.6,  delayChildren: 10}} 
              className="absolute top-[150px]  left-[60px] gap-2 md:gap-8 flex flex-col items-center  bg-white bg-opacity-80 w-[75%] md:w-[45%] justify-center py-5 pb-3 px-1 md:px-0">
              <motion.div
               whileInView={{opacity:[0, 1]}}
               transition={{duration: 1, ease: 'easeInOut'}}
              >
              <Text
            as="h1"
            className=" lg:text-6xl  text-lg font-bold text-gradient bg-gradient-to-r  from-[#4797C6] to-[#4797C6] bg-clip-text text-transparent  font-serif w-full text-center "
           >
           Mobile App Development
          </Text>
          
              </motion.div>
              
          <Text
           
           className="text-black md:text-lg text-sm  font-light font-serif px-4 text-center"
         >
          TBC delivers future-focused custom mobile app development solutions. Backed by mobile app developers, our mobile app company strives to cater to businesses’ simple and complex challenges through innovative mobile applications.
         </Text>
         <Button
         
         className="bg-[#313bac] text-white pl-6 pr-6 pt-1 md:pt-3 pb-1 md:pb-3 rounded-[10px] cursor-pointer hover:bg-[#2430af] font-bold"
         >
           <a href="#ABOUT" className="text-xs md:text-lg">Read More</a>
         </Button>
         </motion.div>
            </Card>
        </div>
    )
}
export default HeroSection;