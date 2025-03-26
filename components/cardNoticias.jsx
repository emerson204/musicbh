import Image from "next/image";
import React from "react";
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

export default function CardNoticias({
  imagen,
  alt,
  artista,
  subtitulo,
  ruta,
  spotify,
  youtube,
  instagram,
}) {
  return (
    <div
      className="flex flex-col md:flex-row gap-5 items-center justify-center lg:justify-start"
      data-aos="fade-up"
    >
      <Image
        src={imagen}
        alt={alt}
        width="165"
        height="165"
        className="rounded-full w-[10.3125rem] h-[10.3125rem]"
      />

      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-2xl uppercase montserrat-semibold mb-1 text-center md:text-left">
          {artista}
        </h3>
        <p className="text-[#a4a4a4] montserrat-semibold uppercase text-center md:text-left">
          {subtitulo}
        </p>
        <div className="flex gap-4 md:gap-3 items-center my-4 md:my-3">
          <a
            href={spotify}
            className="text-[1.6875rem] md:text-[1.385rem] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify />
          </a>
          <a
            href={youtube}
            className="text-[1.6875rem] md:text-[1.385rem] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href={instagram}
            className="text-[1.6875rem] md:text-[1.385rem] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <a
          href={ruta}
          className="flex items-center gap-5 bg-[#ea3c3f] text-white pl-5  w-fit rounded-lg overflow-hidden montserrat-medium mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escúchalo aqui
          <div className="bg-[#f46163] px-3 py-3">
            <RiExternalLinkLine className="text-xl" />
          </div>
        </a>
      </div>
    </div>
  );
}
