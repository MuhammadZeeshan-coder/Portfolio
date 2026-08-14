import React from "react";
import ButtonOne from "../Shared/ButtonOne";
import zeeshan from "../assets/zeeshan.png";
import NavbarList from "../Shared/NavbarList";
import { ArrowDownToLine , BriefcaseBusiness } from "lucide-react";

const Header = () => {
  return (
    <header
      className="container mx-auto px-6 md:px-10 lg:px-20 py-10 lg:py-0 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-30"
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

        {/* CTA Section */}
        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">

          <ButtonOne
            name="Download CV"
            color="black"
            icon={<ArrowDownToLine size={18} />}
          />

          <ButtonOne
            link="#contact"
            name="Hire Me"
            color="secondary"
            icon={<BriefcaseBusiness size={18} />}
          />

        </div>

        {/* Quick Highlights */}
        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">

          <div>
            <h3 className="text-2xl font-bold text-black">20+</h3>
            <p className="text-sm text-gray-600">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black">6+</h3>
            <p className="text-sm text-gray-600">Months Experience</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black">100%</h3>
            <p className="text-sm text-gray-600">Client Satisfaction</p>
          </div>

        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-fit flex justify-center">
        <img
          src={zeeshan}
          alt="Muhammad Zeeshan"
          className="w-72 sm:w-80 md:w-105 h-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;