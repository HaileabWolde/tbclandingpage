import { useState, useCallback} from "react"
import { Text } from "../atoms/Text";
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "../atoms/Image";
import Logo from "../../assets/tbc_logo/TBCONE.png"
import {NavLinks } from "../particles/NavLinks"
import { List } from "../atoms/List";
import { BsPuzzleFill } from 'react-icons/bs';
import { AiOutlineComment } from 'react-icons/ai';
import { FaUsers, FaHome,  FaQuestionCircle } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { MdTimeline } from 'react-icons/md';
import "./Nabar.css"
import { useLocation } from "react-router-dom";
const NavBar = () => {
    const location = useLocation();
    const [toggle, setToggle] = useState<boolean>(false)

    //Define the routes that should hide specific navbar elements
    const hiddenRoutes = [
        "/services/Software%20Development",
        "/services/Mobile%20Application%20Development",
        "/services/It%20Consultancy%20&%20Training",
        "/services/ERP%20system",
        "/services/Data%20Engineering",
        "/services/Managing%20Services"
    ]

    //Check if the current route matches any of the hidden routes
    const shouldHideElement = hiddenRoutes.includes(location.pathname)
    console.log(shouldHideElement)
    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <FaHome  size={24} color="#4797C6"/>;
            case 1:
                return <BsPuzzleFill size={24} color="#4797C6"/>;
            case 2:
                return <AiOutlineComment size={24} color="#4797C6"/>;
            case 3:
                return <FaUsers size={24} color="#4797C6"/>;
            case 4:
                return <BsInfoCircleFill size={24} color="#4797C6"/>;
            case 5:
                return < FaQuestionCircle size={24} color="#4797C6"/>;
            case 6:
                return <FiMail size={24} color="#4797C6"/>
            case 7:
                return <MdTimeline size={24} color="#4797C6"/>
            default:
                return "";
        }
    }, [])

    return (
        <header className="w-full bg-transparent overflow-hidden fixed z-50 top-0 left-0 ">
                <motion.div
                whileInView={{y: [-30, 0], opacity:[0, 1]}}
                transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <nav className={`w-full navbar bg-[#f2f7fb] bg-opacity-80  lg:px-24 md:px-12 px-8 flex justify-between items-center border border-white border-opacity-100`}>
                    <Image as="a" href="/" className="md:h-24 h-20" image={Logo} alt="Logo" />
                    <div className="lg:flex hidden items-center ">
                        <ul className={`flex items-center justify-center gap-4 xl:gap-6`}>
                            {
                                NavLinks.map((navlink, index) => {
                                       
                                         if(shouldHideElement && navlink.url === "solutions"){
                                            return null;//skip also rendering this element
                                        }
                                        else if (shouldHideElement && (location.pathname === "/services/Software%20Development" || location.pathname === "/services/ERP%20system" || location.pathname === "/services/Data%20Engineering" || location.pathname === "/services/Managing%20Services")&&
                                        (navlink.url === "clients" || navlink.url === "testimonies")){
                                            return null;
                                        }
                                        else if(location.pathname === "/" && navlink.url=== "approach"){
                                            return null
                                        }
                                        else if(location.pathname === "/" && navlink.url === "faq"){
                                            return null
                                        }
                                    return (
                                        <List className="text-lg" key={index}>
                                        <a href={`#${navlink.name}`}   className=" bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text relative inline-block  font-serif overflow-hidden  pt-2 pl-2 before:w-2 before:h-2 before:bg-[#FF9900] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[#FF9900] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in">{navlink.name}</a>
                                    </List>
                                    )
                                   
                                } )}
                        </ul>
                    </div>
                 
                    <div className="app__navbar-menuOne">
                        <motion.div
                             initial={{ rotate: 0 }}
                             animate={{ rotate: 180 }}
                             transition={{ duration: 0.3 }}
                             onClick={()=> setToggle((prev)=> !prev)}
                        >
                            { toggle ? <HiX/> : <HiMenuAlt4/>}
                        </motion.div>
                    </div>
              </nav>
                
              <AnimatePresence>
              {
                     toggle && (
                        <div  className="app__navbar-menu pb-5">
                             <motion.div
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: "auto" }}
                         transition={{ duration: 0.3 }}
                         exit={{ opacity: 0, height: 0 }}
            >
            
                    <ul>
             {
                 NavLinks.map((navlink, index) => {
                    if(shouldHideElement && navlink.url === "solutions"){
                        return null;//skip also rendering this element
                    }
                    else if (shouldHideElement && (location.pathname === "/services/Software%20Development" || location.pathname === "/services/ERP%20system" || location.pathname === "/services/Data%20Engineering" || location.pathname === "/services/Managing%20Services")&&
                    (navlink.url === "clients" || navlink.url === "testimonies")){
                        return null;
                    }
                    else if(location.pathname === "/" && navlink.url=== "approach"){
                        return null
                    }
                    else if(location.pathname === "/" && navlink.url === "faq"){
                        return null
                    }
                    return (
                        <List className="text-lg flex gap-2 items-center" key={index}>
                        <Text>{renderIcons(index)}</Text>
                        <a  onClick={()=> setToggle(false)} href={`#${navlink.name}`}   className=" bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text relative inline-block  font-serif overflow-hidden  pt-2 pl-2 before:w-2 before:h-2 before:bg-[#FF9900] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[#FF9900] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in">{navlink.name}</a>
                    </List>
                    )
                 })}
              </ul>  
       
            </motion.div>
                        </div>
                        )}
                </AnimatePresence>
                </motion.div>
        </header >
    )
}

export default NavBar;

