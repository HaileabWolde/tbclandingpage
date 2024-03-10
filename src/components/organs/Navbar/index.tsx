import { BsPuzzleFill } from 'react-icons/bs';
import { AiOutlineComment } from 'react-icons/ai';
import { FaUsers, FaHome,  FaQuestionCircle } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { MdTimeline } from 'react-icons/md';
import { Text } from "../../atoms/Text";
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { Image } from "../../atoms/Image";
import Logo from "../../../assets/tbc_logo/TBCONE.png"
import {NavLinks } from "../../particles/NavLinks"
import { List } from "../../atoms/List";
export const renderIcons = (element: number) => {
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
}
export {
    Text , HiMenuAlt4, HiX,
   Image,
    Logo,  NavLinks, List
}