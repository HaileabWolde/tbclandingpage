import { useState} from "react"
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion } from "framer-motion";
import { Image } from "../atoms/Image";
import Logo from "../../assets/tbc_logo/TBCONE.png"
import {NavLinks } from "../particles/NavLinks"
import { List } from "../atoms/List";
import "./Nabar.css"
import { useLocation } from "react-router-dom";
const NavBar = () => {
    const location = useLocation();
    const [toggle, setToggle] = useState(false)

    //Define the routes that should hide specific navbar elements
    const hiddenRoutes = [
        "/services/Software%20Development",
        "/services/Mobile%20Application%20Development",
        "/services/Technology%20Consultancy",
        "/services/ERP%20system",
        "/services/Data%20Engineering",
        "/services/Managing%20Services"
    ]

    //Check if the current route matches any of the hidden routes
    const shouldHideElement = hiddenRoutes.includes(location.pathname)

    return (
        <header className="w-full  bg-transparent overflow-hidden fixed z-50 top-0 left-0 ">
                <motion.div
                whileInView={{y: [-30, 0], opacity:[0, 1]}}
                transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <nav className={`w-full navbar bg-[#f2f7fb] bg-opacity-80  lg:px-24 md:px-12 px-8 flex justify-between items-center border border-white border-opacity-100`}>
                    <Image as="a" href="/" className="md:h-24 h-20" image={Logo} alt="Logo" />
                    <div className="lg:flex hidden items-center mr-[200px]">
                        <ul className={`flex items-center justify-center gap-6`}>
                            {
                                NavLinks.map((navlink, index) => {
                                        if(shouldHideElement && navlink.url === "home"){
                                            return null;// skip rendering this element
                                        }
                                        else if(shouldHideElement && navlink.url === "solutions"){
                                            return null;//skip also rendering this element
                                        }
                                        else if (shouldHideElement && (location.pathname === "/services/Software%20Development" || location.pathname === "/services/ERP%20system" || location.pathname === "/services/Data%20Engineering" || location.pathname === "/services/Managing%20Services") && navlink.url=== "clients"){
                                            return null;
                                        }
                                        else if(location.pathname=== "/" && navlink.url=== "approach"){
                                            return null
                                        }
                                    return (
                                        <List className="text-lg" key={index}>
                                        <a href={`#${navlink.name}`}   className=" bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text relative inline-block  font-serif overflow-hidden  pt-2 pl-2 before:w-2 before:h-2 before:bg-[#FF9900] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[#FF9900] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in">{navlink.name}</a>
                                    </List>
                                    )
                                   
                                }
                                    
                                )
                            }
                        </ul>
                    </div>
                   <div  className="app__navbar-menu">
                   <HiMenuAlt4 onClick={()=> setToggle(true)}/>
                   {
                     toggle && (
                         <motion.div
                             whileInView={{x:[300, 0]}}
                            transition={{duration: 0.85, ease: 'easeInOut'}}
            >
             <HiX onClick={()=> setToggle(false)}/>
             <ul>
             {
                 NavLinks.map((navlink, index) => (
                    <List className="text-lg" key={index}>
                        <a  onClick={()=> setToggle(false)} href={`#${navlink.name}`}   className=" bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text relative inline-block  font-serif overflow-hidden  pt-2 pl-2 before:w-2 before:h-2 before:bg-[#FF9900] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[#FF9900] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in">{navlink.name}</a>
                    </List>
                ))
            }
              </ul>  
       
            </motion.div>
          )
        }
                   </div>
                
                </nav>
                </motion.div>
        </header >
    )
}

export default NavBar