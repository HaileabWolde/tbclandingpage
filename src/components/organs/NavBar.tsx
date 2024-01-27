import { useState, useEffect } from "react"
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion } from "framer-motion";
import { Image } from "../atoms/Image";
import Logo from "../../assets/tbc_logo/TBCONE.png"
import {NavLinks } from "../particles/NavLinks"
import { List } from "../atoms/List";
import "./Nabar.css"
const NavBar = () => {
    
    const [toggle, setToggle] = useState(false)

    const [open, setOpen] = useState(false)
    // const [scrollY, setScrollY] = useState(0)
    const [navBarColor, setNavBarColor] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);


    return (
        <header className="w-full  bg-transparent overflow-hidden fixed z-50 top-0 left-0 ">
                <motion.div
                whileInView={{y: [-30, 0], opacity:[0, 1]}}
                transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <nav className={`w-full navbar bg-[#f2f7fb] bg-opacity-80  lg:px-24 md:px-12 px-8 flex justify-between items-center border border-white border-opacity-100`}>
                    <Image as="a" href="/" className="md:h-24 h-20" image={Logo} alt="Logo" />
                    <div className="lg:flex hidden items-center mr-[200px]">
                        <ul className="flex items-center justify-center gap-6">
                            {
                                NavLinks.map((navlink, index) => (
                                    <List className="text-lg" key={index}>
                                        <a href={`#${navlink.name}`}   className=" bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text relative inline-block  font-serif overflow-hidden  pt-2 pl-2 before:w-2 before:h-2 before:bg-[#FF9900] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[#FF9900] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in">{navlink.name}</a>
                                    </List>
                                ))
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