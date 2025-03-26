import Image from "next/image";
import React from "react";

export default function CardServicios({ imagen, src, nombre }) {
  return (
    <div
      className="relative h-[15rem] md:h-[17rem] overflow-hidden"
      data-aos="zoom-in"
    >
      <Image
        src={imagen}
        alt={src}
        width="500"
        height="500"
        className="h-[100%] object-cover w-full"
      />

      <div className="text-white bg-[#ea3c3f] absolute bottom-0 w-[100%] h-[3.6rem] md:h-[3.9rem] flex items-center px-3">
        <h3 className="montserrat-semibold text-base md:text-[1.0625rem] leading-5">
          {nombre}
        </h3>
      </div>
    </div>
  );
}
