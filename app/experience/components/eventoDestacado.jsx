import React from "react";
import { FaPlay } from "react-icons/fa";

export default function EventoDestacado() {
  return (
    <section className=" py-9 md:py-14 lg:py-20">
      <div className="px-4 max-w-[75rem] mx-auto">
        <h2 className="text-white text-center uppercase text-2xl md:text-[2.0625rem] lg:text-[2.5rem] montserrat-extrabold">
          Próximo evento destacado
        </h2>
        <p className="text-white text-center text-lg lg:text-xl mt-2 montserrat-medium mb-14">
          Coca-Cola Fest – Vive el evento desde el corazón del backstage.
        </p>
      </div>
      <div className="h-[25rem] md:h-[50rem] bg-[url('/video_youtube.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <a
          href="https://www.youtube.com/watch?v=Zv9FzvM7rNQ&t=1s"
          target="_blank"
          className="bg-white w-18 h-18 md:w-24 md:h-24 rounded-full flex justify-center items-center hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <FaPlay className="text-4xl md:text-5xl text-red-600 ml-2" />
        </a>
      </div>
    </section>
  );
}
