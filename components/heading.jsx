import React from "react";

export default function Heading({ titulo }) {
  return (
    <div
      className="flex items-center justify-center gap-4 mb-7 md:mb-14"
      data-aos="zoom-in"
    >
      <div className="bg-[#ea3c3f] w-[1.4rem] h-[.7rem]" />
      <h2 className="text-white uppercase text-2xl md:text-[2.0625rem] lg:text-[2.5rem] montserrat-extrabold">
        {titulo}
      </h2>
      <div className="bg-[#ea3c3f] w-[1.4rem] md:w-[1.8rem] h-[.7rem]" />
    </div>
  );
}
