import React from "react";
import { dataRedes } from "@/data/dataRedes";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative px-5 md:px-0 h-[35rem] md:h-[21rem] lg:h-[37.3rem] after:content-[''] after:inset-0  after:bg-black/75 md:after:bg-black/60 after:absolute overflow-hidden sec-scroll "
      id="inicio"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute hidden md:flex inset-0 w-full h-[100%] object-cover  "
      >
        <source
          src="https://res.cloudinary.com/dy3pthdns/video/upload/q_auto/v1742940575/music-hero_a9odhx.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos.
      </video>

      <video
        autoPlay
        loop
        muted
        className="absolute md:hidden inset-0 w-full h-[100%] object-cover -top-5"
      >
        <source
          src="https://res.cloudinary.com/dy3pthdns/video/upload/q_auto/v1742958198/hero-bhmusic_wxiywg.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos.
      </video>

      <div className="relative z-20 h-[100%] flex flex-col items-center justify-center">
        <p className="text-[#ea3c3f] uppercase montserrat-semibold mb-1 ">
          Compañia
        </p>
        <h1 className="text-4xl md:text-5xl text-white montserrat-extrabold uppercase mb-4 text-center">
          B&H MUSIC
        </h1>
        <p className="text-center md:max-w-[80%] lg:max-w-[50%] text-white montserrat-medium text-lg">
          Impulsando el talento que marcará el ritmo del futuro. Somos una
          disquera independiente enfocada en descubrir, desarrollar y proyectar
          artistas con potencial real.
        </p>

        <div className="md:hidden flex items-center gap-4 mt-5">
          {dataRedes.map((red) => (
            <a
              href={red.url}
              key={red.id}
              className="bg-white w-8 h-8 text-base text-[#ea3c3f] rounded-full flex items-center justify-center "
            >
              {red.icono}
            </a>
          ))}
        </div>

        <Link
          className="bg-[#ea3c3f] text-white py-3 px-6 mt-5 rounded-full montserrat-semibold"
          href="/experience"
        >
          B&H EXPERIENCE
        </Link>
      </div>
    </section>
  );
}
