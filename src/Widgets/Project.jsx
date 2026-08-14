import React from "react";
import ProjectCard from "../Shared/ProjectCard";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import SemiHeading from "../Shared/SemiHeading";
import ButtonOne from "../Shared/ButtonOne";
import { ArrowUpRight } from "lucide-react";

const Project = () => {
  const Info = [
    {
      link: "https://techno-kids.netlify.app/",
      image: p1,
      title: "TechnoKids",
      description: "I made this website for an AI and Humanoid Robots course."
    },
    {
      link: "https://techno-kids.netlify.app/",
      image: p2,
      title: "MZ Travels",
      description: "Explore breathtaking destinations and uncover hidden gems around the world. Plan your perfect journey with curated experiences."
    },
    {
      link: "https://techno-kids.netlify.app/",
      image: p3,
      title: "SMIT",
      description: "Clone website of Saylani Mass IT Training."
    },
    {
      link: "https://hackathosmit.netlify.app",
      image: p4,
      title: "HelpHub AI",
      description: "HelpHub AI connects people through a smart, community-driven support system powered by AI."
    },
    {
      link: "https://headphone-sooty.vercel.app/",
      image: p5,
      title: "Headphone Website",
      description: "Modern fashion e-commerce platform focused on style, simplicity, and user experience."
    },
    {
      link: "https://maintain-iq-dun.vercel.app/",
      image: p6,
      title: "Maintain IQ",
      description: "A asset manage website that helps you track and manage your assets efficiently."
    }
  ]
  return (
    <section className="py-16 bg-(--white) px-6 lg:px-15" id="project">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <SemiHeading h2="featured projects" h5="projects" />

          <ButtonOne
            name="View All Projects"
            icon={<ArrowUpRight size={18} />}
            color="white text-sm mt-5 md:mt-0"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {Info.map((item) => (
            <ProjectCard
              key={item.key}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;