import {motion} from "framer-motion";
import {Card} from "../../molecules/Card";
import { Text } from "../../atoms/Text";
import Consulting from "../../../assets/Consulting.jpg"
import { Button } from "../../atoms/Button";

const HeroSection = ()=> {
    return (
        <div id="HOME" className="w-full overflow-hidden mt-[90px]">
        <Card
        cardClass="w-full flex overflow-hidden"
        imageAlt="Consulting"
        imageSrc={Consulting}
        imageWrapperClass="w-full overflow-hidden h-[450px] md:h-[600px]"
        cover="object-fit"
        >
             <motion.div
          whileInView={{x:[-100, 0], opacity: [0, 1]}}
          transition={{duration: 0.6,  delayChildren: 10}} 
          className="absolute top-[150px]  left-[60px] flex flex-col items-center gap-8 bg-white bg-opacity-80 w-[75%] md:w-[45%] justify-center h-[40%] md:h-[60%] xl:h-[80%]">
          <motion.div
           whileInView={{opacity:[0, 1]}}
           transition={{duration: 1, ease: 'easeInOut'}}
          >
          <Text
        as="h1"
        className=" lg:text-5xl  text-xl font-bold text-gradient bg-gradient-to-r  from-[#4797C6] to-[#4797C6] bg-clip-text text-transparent  font-serif w-full text-center"
       >
       Technology Consultancy
      </Text>
      
          </motion.div>
          
      <Text
       
       className="text-black md:text-lg text-sm  font-light  font-serif px-4 text-center"
     >
   At TBC, your trusted technology consultancy. We specialize in data analysis, process automation, and SOP design for a diverse clientele, both local and international. Let us help you unlock your organization's potential.
     </Text>
     <Button
     
     className="bg-[#313bac] text-white pl-6 pr-6 pt-1 md:pt-3 pb-1 md:pb-3 rounded-[10px] cursor-pointer hover:bg-[#2430af] font-bold"
     >
       <a href="#ABOUT" className="text-sm md:text-base" >Read More</a>
     </Button>
     </motion.div>
        </Card>
    </div>
    )
}
export default HeroSection