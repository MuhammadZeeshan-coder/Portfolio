import React from "react";

const AboutCards = ({ icon, h5, h3, p }) => {
  return (
    <div
      className="
        w-full
        min-h-[120px]
        flex
        items-center
        gap-4
        rounded-xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-14
          w-14
          sm:h-16
          sm:w-16
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          text-[var(--green)]
        "
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1" style={{ fontFamily: "Poppins" }}>
        <h5 className="text-sm sm:text-base font-semibold capitalize">
          {h5}
        </h5>

        <h3 className="mt-1 text-lg sm:text-xl font-bold text-[var(--green)]">
          {h3}
        </h3>

        <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-5">
          {p}
        </p>
      </div>
    </div>
  );
};

export default AboutCards;