import { Image } from "../atoms/Image";
import logo from "../../assets/tbc_logo/TBCONE.png";
import { Text } from "../atoms/Text";
import { List } from "../atoms/List";
import { Link } from "react-router-dom";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import "./Fotter.css"
const Footer = () => {
  return (
    <footer  className="w-full  flex flex-col bg-gradient-to-t from-[#9AC9E3] to-[#4698CC] relative">
      <section className="w-full  md:overflow-hidden md:h-[230px] grid lg:grid-cols-5 md:grid-cols-3 lg:px-20 md:px-12 px-6   lg:gap-0">
        {/* TBC Logo */}
        <div className="custom-shape-divider-top-1705906384">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
        <div className="flex flex-col  md:flex-row   mt-[70px] md:my-[110px]  w-[100vw]">
          <Image className="w-[150px] h-[200px] md:h-[150px] text-white" image={logo} alt="Logo" as="a" href="/" />
          
        </div>

        {/* Quick Links */}
        
        <div className="flex flex-col md:items-center gap-4 py-[30px] md:py-[110px]">
          <Text className="text-xl text-black font-bold font-serif" as="h2">
            Quick Links
          </Text>
          <ul className="flex flex-col gap-2">
            <List className="text-sm">
              <Link
                to={"/"}
                className=" transition-all duration-300 hover:underlin font-bold text-color4"
              >
                Home
              </Link>
            </List>
            <List className="text-sm">
              <Link
                to={"/"}
                className="text-color4 transition-all duration-300 hover:underline font-bold"
              >
                Services
              </Link>
            </List>
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex flex-col md:items-center gap-4 md:mt-8  py-[30px] md:py-[75px]">
          <Text className="text-xl text-black font-bold font-serif" as="h2">
            Contacts
          </Text>
          <ul className="flex flex-col md:ml-12 gap-2">
            <List className="text-sm">
              <Link
                to={"/"}
                className="text-color4 transition-all duration-300 hover:underline font-bold "
              >
                Contact Us
              </Link>
            </List>
            <List className="text-sm">
              <Link
                to={"/"}
                className=" transition-all duration-300 hover:underline font-bold text-color4"
              >
                Call
              </Link>
            </List>
          </ul>
        </div>

        {/* More */}
        <div className="flex flex-col lg:items-center gap-4 md:mt-8 py-[30px] md:py-[75px]">
          <Text className="text-xl text-black font-bold font-serif" as="h2">
            More
          </Text>
          <ul className="flex flex-col  gap-2">
            <List className="text-sm">
              <Link
                to={"/"}
                className=" transition-all duration-300 hover:underline font-bold text-color4"
              >
                Mobile App Development
              </Link>
            </List>
            <List className="text-sm">
              <Link
                to={"/"}
                className="text-color4 transition-all duration-300 hover:underline font-bold"
              >
                AD Technologies
              </Link>
            </List>
          </ul>
        </div>

        {/* Social Media Links*/}
        <div className="flex flex-col lg:items-center w-full md:mt-8 gap-8 py-[30px] md:py-20">
          <Text className="text-xl text-black font-bold font-serif" as="h2">
            Follow Us:
          </Text>
          <ul className="w-full flex items-center lg:justify-center gap-6">
            <List>
              <Link
                to={`/`}
                className="text-color5 border-[1px] border-black/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color3 hover:text-white"
              >
                <FacebookLogo size={15} color="currentColor" weight="fill" />
              </Link>
            </List>
            <List>
              <Link
                to={`/`}
                className="text-color5 border-[1px] border-black/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color3 hover:text-white"
              >
                <InstagramLogo size={15} color="currentColor" weight="fill" />
              </Link>
            </List>
            <List>
              <Link
                to={`/`}
                className="text-color5 border-[1px] border-black/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color3 hover:text-white"
              >
                <TwitterLogo size={15} color="currentColor" weight="fill" />
              </Link>
            </List>
          </ul>
        </div>
      </section>

      {/* Copyright */}
      <Text className="md:text-center px-6 md:px-0  text-xs flex flex-col md:flex-row flex-wrap justify-center gap-2">
            <p className="font-bold">Ethiopia</p>
            <p className="">+251992621400</p>
            <p className="font-bold ">America</p>
            <p className="">+13016553123</p>
            <p className="font-bold">Email</p>
            <p>info@TBC.com</p>
      </Text>
      <Text className="text-center  text-black font-bold text-xs py-6 ">
        Copyright 2023. TBC Technologies. All rights reserved.
      </Text>
      <hr />
    </footer>
  );
};

export default Footer;
