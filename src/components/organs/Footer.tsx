import { Image } from "../atoms/Image";
import logo from "../../assets/tbc_logo/TBC-Logo.png";
import { Text } from "../atoms/Text";
import { List } from "../atoms/List";
import { Link } from "react-router-dom";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-color1">
      <section className="w-full h-auto grid lg:grid-cols-5 md:grid-cols-3 lg:px-20 md:px-12 px-6 py-16 gap-7 md:gap-4 lg:gap-0">
        {/* TBC Logo */}
        <div className="flex flex-col items-start gap-4">
          <Image className="w-38" image={logo} alt="Logo" as="a" href="/" />
          <div className="flex flex-col md:items-center  md:mt-1. ml-2">
            <Text className="text-sm text-color4" as="p">
              We build tomorrow's technology today, empowering businesses to
              navigate the digital landscape with confidence.
            </Text>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center gap-4 md:mt-8">
          <Text className="text-xl text-color5" as="h2">
            Quick Links
          </Text>
          <ul className="flex flex-col gap-2">
            <List className="text-sm">
              <Link
                to={"/"}
                className="text-color4 transition-all duration-300 hover:underline"
              >
                Home
              </Link>
            </List>
            <List className="text-sm">
              <Link
                to={"/"}
                className="text-color4 transition-all duration-300 hover:underline"
              >
                Services
              </Link>
            </List>
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex flex-col md:items-center gap-4 md:mt-8">
          <Text className="text-xl text-color5" as="h2">
            Contacts
          </Text>
          <ul className="flex flex-col md:ml-12 gap-2">
            <List className="text-sm">
              <Link
                to={"/"}
                className="text-color4 transition-all duration-300 hover:underline"
              >
                Contact Us
              </Link>
            </List>
            <List className="text-sm">
              <Link
                to={"/"}
                className="text-color4 transition-all duration-300 hover:underline"
              >
                Call
              </Link>
            </List>
          </ul>
        </div>

        {/* More */}
        <div className="flex flex-col lg:items-center gap-4 md:mt-8">
          <Text className="text-xl text-color5" as="h2">
            More
          </Text>
          <ul className="flex flex-col md:ml-12 gap-2">
            <List className="text-sm">
              <Link
                to={"/"}
                className="text-color4 transition-all duration-300 hover:underline"
              >
                Mobile App Development
              </Link>
            </List>
            <List className="text-sm">
              <Link
                to={"/"}
                className="text-color4 transition-all duration-300 hover:underline"
              >
                AD Technologies
              </Link>
            </List>
          </ul>
        </div>

        {/* Social Media Links*/}
        <div className="flex flex-col lg:items-center w-full md:mt-8 gap-8">
          <Text className="text-xl text-color5" as="h2">
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
      <hr />
      <Text className="text-center bg-color1 text-white text-xs py-6 font-light">
        Copyright 2023. TBC Technologies. All rights reserved.
      </Text>
      <hr />
    </footer>
  );
};

export default Footer;
