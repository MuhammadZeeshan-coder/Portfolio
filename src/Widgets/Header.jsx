import React from "react";
import ButtonOne from "../Shared/ButtonOne";
import zeeshan from "../assets/zeeshan.png";
import NavbarList from "../Shared/NavbarList";
import { ArrowDownToLine } from "lucide-react";

const Header = () => {
  return (
    <header
      className="container mx-auto px-6 md:px-10 lg:px-20 py-10 lg:py-0 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16"
      id="hero"
    >
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h5
          className="uppercase text-sm md:text-base lg:text-lg font-semibold text-(--black)"
          style={{ fontFamily: "Poppins" }}
        >
          Welcome to my profile
        </h5>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold uppercase text-(--black) mt-3 leading-tight"
          style={{ fontFamily: "Roboto" }}
        >
          I'm Muhammad
          <br />
          Zeeshan
        </h1>

        <h3
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl uppercase text-(--black) mt-5 font-semibold"
          style={{ fontFamily: "Poppins" }}
        >
          Full Stack Developer
        </h3>

        <p
          className="font-semibold text-(--black) text-sm md:text-base leading-7 mt-6 max-w-xl mx-auto lg:mx-0"
          style={{ fontFamily: "Inter" }}
        >
          I work with a team of strategic professionals globally with leading
          brands. We believe progress comes from creativity, innovation, and
          building high-quality digital experiences that help businesses grow.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center lg:justify-start">
          <ButtonOne
            name="Download CV"
            color="black"
            icon={<ArrowDownToLine size={18} />}
          />
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center lg:justify-start">
          <ul className="flex flex-wrap items-center gap-6">
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-square-facebook text-xl"></i>
              <NavbarList name="Facebook" link="" />
            </li>

            <li className="flex items-center gap-2">
              <i className="fa-brands fa-square-twitter text-xl"></i>
              <NavbarList name="Twitter" link="" />
            </li>

            <li className="flex items-center gap-2">
              <i className="fa-brands fa-linkedin text-xl"></i>
              <NavbarList name="LinkedIn" link="" />
            </li>
          </ul>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={zeeshan}
          alt="Muhammad Zeeshan"
          className="w-72 sm:w-80 md:w-[420px] h-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;