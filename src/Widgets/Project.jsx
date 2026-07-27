import React from "react";
import Cards from "../Shared/Cards";
import p1 from "../assets/p-1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import SemiHeading from "../Shared/SemiHeading";
import ButtonOne from "../Shared/ButtonOne";
import { ArrowUpRight } from "lucide-react";

const Project = () => {
  return (
    <section className="py-16 bg-(--white)" id="project">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between px-10">
          <SemiHeading h2="featured projects" h5="projects" />

          <ButtonOne
            name="View All Projects"
            icon={<ArrowUpRight size={18} />}
            color="white text-sm mt-5 md:mt-0"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          <Cards
            link="https://techno-kids.netlify.app/"
            image={p1}
            h3="TechnoKids"
            p="I made this website for an AI and Humanoid Robots course."
          />

          <Cards
            image={p2}
            h3="MZ Travels"
            p="Explore breathtaking destinations and uncover hidden gems around the world. Plan your perfect journey with curated experiences."
          />

          <Cards
            image={p3}
            h3="SMIT"
            p="Clone website of Saylani Mass IT Training."
          />

          <Cards
            link="https://hackathosmit.netlify.app"
            image={p4}
            h3="HelpHub AI"
            p="HelpHub AI connects people through a smart, community-driven support system powered by AI."
          />

          <Cards
            image={p5}
            h3="ZeLux"
            p="Modern fashion e-commerce platform focused on style, simplicity, and user experience."
          />

          <Cards
            image={p6}
            h3="Coming Soon"
            p="New exciting project will be added soon."
          />
        </div>
      </div>
    </section>
  );
};

export default Project;