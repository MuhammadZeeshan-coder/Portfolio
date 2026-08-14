import React from "react";
import SemiHeading from "../Shared/SemiHeading";
import {
  ArrowUpRight,
  UserRound,
  BriefcaseBusiness,
  FolderOpen,
  Users,
  MapPin,
} from "lucide-react";
import ButtonOne from "../Shared/ButtonOne";
import AboutCards from "../Shared/AboutCards";

const About = () => {
  const info = [
    {
      icon: <BriefcaseBusiness size={28} />,
      h5: "Experience",
      h3: "6+ Months",
      p: "of working experience",
    },
    {
      icon: <FolderOpen size={28} />,
      h5: "Projects",
      h3: "15+",
      p: "completed projects",
    },
    {
      icon: <Users size={28} />,
      h5: "Clients",
      h3: "10+",
      p: "happy clients worldwide",
    },
    {
      icon: <MapPin size={28} />,
      h5: "Location",
      h3: "Pakistan",
      p: "available for work",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 xl:px-16 bg-[var(--white)] text-[var(--black)]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

        {/* Left Side */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">

          {/* Profile Icon */}
          <div className="flex shrink-0 items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white shadow-xl">
            <UserRound
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              strokeWidth={1}
            />
          </div>

          {/* About Content */}
          <div className="text-center sm:text-left">

            <div className="flex justify-center sm:block">
              <SemiHeading
                h5="About Me"
                h2="Who I Am"
              />
            </div>

            <p className="mt-5 text-sm sm:text-base leading-7 line-clamp-none lg:line-clamp-3 font-medium max-w-xl">
              I'm a passionate Full Stack Developer who loves building
              beautiful, functional, and user-centered web applications.
              I enjoy turning complex problems into simple, elegant
              solutions while creating fast and responsive digital
              experiences.
            </p>

            <div className="mt-8 flex justify-center sm:justify-start">
              <ButtonOne
                name="Read More"
                icon={<ArrowUpRight size={18} />}
                color="black"
              />
            </div>

          </div>

        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {info.map((item, index) => (
            <AboutCards
              key={index}
              icon={item.icon}
              h5={item.h5}
              h3={item.h3}
              p={item.p}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;