import {motion} from "framer-motion";
import {Card} from "../../molecules/Card";
import { Text } from "../../atoms/Text";
import MobileApp from "../../../assets/Software Development Test.jpg"
import { Button } from "../../atoms/Button";

const HeroSection = ()=> {
    return (
        <div id="HOME" className="w-full overflow-hidden mt-[90px]">
        <Card
        cardClass="w-full flex overflow-hidden "
        imageAlt="Software Development"
        imageSrc={MobileApp}
        imageWrapperClass="w-full overflow-hidden h-[500px] md:h-[600px]"
        >
             <motion.div
          whileInView={{x:[-100, 0], opacity: [0, 1]}}
          transition={{duration: 0.6,  delayChildren: 10}} 
          className="absolute top-[150px]  left-[60px] flex flex-col items-center gap-8 bg-white bg-opacity-80 w-[75%] md:w-[45%] justify-center h-[45%] md:h-[80%]">
          <motion.div
           whileInView={{opacity:[0, 1]}}
           transition={{duration: 1, ease: 'easeInOut'}}
          >
          <Text
        as="h1"
        className=" lg:text-7xl md:text-5xl text-3xl font-bold text-gradient bg-gradient-to-r  from-black to-blue-500 bg-clip-text text-transparent  font-serif w-full text-center"
       >
       Software App Development
      </Text>
      
          </motion.div>
          
      <Text
       
       className="text-black md:text-lg text-sm  font-bold font-serif px-4 text-center"
     >
    We offer end-to-end process of conceptualizing, designing, building, testing, and maintaining custom software applications and solutions tailored to specific business or individual needs.
     </Text>
     <Button
     
     className="bg-[#313bac] text-white pl-6 pr-6 pt-3 pb-3 rounded-[10px] cursor-pointer hover:bg-[#2430af] font-bold"
     >
       <a href="#ABOUT" >Read More</a>
     </Button>
     </motion.div>
        </Card>
    </div>
    )
}
export default HeroSection