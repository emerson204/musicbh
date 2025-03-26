import React from "react";
import Heading from "./heading";
import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa6";
import Principios from "./principios";

export default function Somos() {
  return (
    <section className="px-5 py-9 md:py-14 lg:py-16 sec-scroll " id="somos">
      <div className="max-w-[75rem] mx-auto">
        <Heading titulo="¿Quienes somos?" />

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative" data-aos="fade-up">
            <Image
              src="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939293/hero-bh_l1tjo2.jpg"
              alt="somos"
              width="500"
              height="500"
              className="relative z-10 ml-auto w-[90%] lg:w-[31.25rem] lg:h-auto"
            />
            <div className="bg-[#ea3c3f] w-[90%] h-[100%] absolute top-6 md:left-9  left-0" />
          </div>
          <div className="text-white mt-5" data-aos="fade-up">
            <p className="mb-2 text-justify">
              En B&H MUSIC representamos lo auténtico del regional mexicano y el
              movimiento de los corridos tumbados. Somos una disquera
              independiente comprometida con descubrir, apoyar y proyectar a
              artistas con talento real y voz propia.
            </p>
            <p className="mb-2 text-justify">
              Creemos en el trabajo bien hecho, en las letras que cuentan
              historias de verdad, y en los sonidos que conectan con la gente
              desde el corazón. No buscamos modas pasajeras, buscamos construir
              carreras duraderas con base en esfuerzo, estrategia y respeto por
              la música.
            </p>
            <p className="mb-2 text-justify">
              Nuestro equipo trabaja de la mano con cada artista, ofreciendo un
              respaldo completo: producción, promoción, manejo de redes, imagen,
              eventos y todo lo que se necesita para destacar en una industria
              que exige cada día más.
            </p>
            <p className="lg:hidden montserrat-semibold ">
              "B&H MUSIC es el hogar de quienes quieren llevar su voz al
              siguiente nivel sin perder su esencia."
            </p>
          </div>
        </div>
        <div className="bg-[#fc9fa1] w-full h-[0.01rem] my-10 md:mt-20 md:mb-14" />

        <div className="grid md:grid-cols-2 gap-7 md:gap-10">
          <Principios
            titulo="MISIÓN"
            descripcion="Impulsar el desarrollo integral de artistas emergentes, ofreciendo una plataforma profesional que les permita crecer, producir, distribuir y conectar con audiencias globales."
            icono={TbTargetArrow}
          />
          <Principios
            titulo="VISIÓN"
            descripcion="Ser la disquera independiente líder en México y Latinoamérica, reconocida por su compromiso con la calidad artística, la innovación y la honestidad en la industria musical."
            icono={FaEye}
          />
        </div>
      </div>
    </section>
  );
}
