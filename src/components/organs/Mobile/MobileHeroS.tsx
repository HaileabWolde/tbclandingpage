import {motion} from "framer-motion";
import {Card} from "../../molecules/Card";
import { Text } from "../../atoms/Text";
import MobileApp from "../../../assets/MobileApp.jpg"
import { Button } from "../../atoms/Button";

const HeroSection = ()=> {
    return (
        <div className="w-full overflow-hidden mt-[90px]">
            <Card
            cardClass="w-full flex overflow-hidden "
            imageAlt="Mobile App Development"
            imageSrc={MobileApp}
            imageWrapperClass="w-full overflow-hidden h-[600px]"
            >
                 <motion.div
              whileInView={{x:[-100, 0], opacity: [0, 1]}}
              transition={{duration: 0.6,  delayChildren: 10}} 
              className="absolute top-[150px]  left-[60px] flex flex-col items-center gap-8 bg-white bg-opacity-80 w-[45%] justify-center h-[80%]">
              <motion.div
               whileInView={{opacity:[0, 1]}}
               transition={{duration: 1, ease: 'easeInOut'}}
              >
              <Text
            as="h1"
            className=" lg:text-7xl md:text-5xl text-3xl font-bold text-gradient bg-gradient-to-r  from-black to-blue-500 bg-clip-text text-transparent  font-serif w-full text-center antialiased"
           >
           Mobile App Development
          </Text>
          
              </motion.div>
              
          <Text
           
           className="text-black md:text-lg text-sm  font-bold font-serif px-4 antialiased text-center"
         >
          TBC delivers future-focused custom mobile app development solutions. Backed by mobile app developers, our mobile app company strives to cater to businesses’ simple and complex challenges through innovative mobile applications.
         </Text>
         <Button
         
         className="bg-[#313bac] text-white pl-6 pr-6 pt-3 pb-3 rounded-[10px] cursor-pointer hover:bg-[#2430af] font-bold"
         >
           <a href="#MobileServices" >Read More</a>
         </Button>
         </motion.div>
            </Card>
        </div>
    )
}
export default HeroSection;