import React from "react";
import ButtonOne from "./ButtonOne";

const ProjectCard = ({
  image,
  title,
  description,
  link,
  githubLink = "#",
}) => {
  return (
    <div
      className="
        group
        w-full
        rounded-3xl
        border
        border-gray-200
        bg-white
        py-3
        px-3.5
        shadow-sm
        transition-all
        duration-500
        hover:shadow-xl
      "
    >
      {/* Card */}
      <div
        className="
          relative
          h-90
          overflow-hidden
          rounded-[18px]
        "
      >
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="
            absolute
            left-0
            top-0
            h-fit
            w-full
            object-cover
            object-top
            transition-all
            duration-500
            group-hover:h-full
            border
            border-gray-300
            rounded-[18px]
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/65
            max-md:bg-black/65
          "
        />

        {/* HOVER CONTENT */}
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            justify-end
            p-6

            opacity-0
            transition-all
            duration-500

            group-hover:opacity-100

            max-md:opacity-100
          "
        >
          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>

          <div className="my-3 h-0.5 w-16 bg-white" />

          <p className="text-sm leading-6 text-white/80">
            {description}
          </p>

          <div className="mt-5 flex gap-3">
            <ButtonOne
              name="Live Demo"
              link={link}
              color="card-one"
              target="_blank"
            />

            <ButtonOne
              name="Github"
              link={githubLink}
              color="card-two"
            />
          </div>
        </div>

        {/* NORMAL CONTENT */}
        <div
          className="
            absolute
            left-0
            right-0
            bottom-0
            bg-white
            p-5
            transition-all
            duration-500

            group-hover:translate-y-full

            max-md:translate-y-full
          "
        >
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>

          <div className="mt-2 h-[2px] w-16 bg-black" />

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
