import React from "react";
import { FaTicketAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";

export default function BienvenidaExperience() {
  return (
    <section className="max-w-[75rem] mx-auto px-4 mt-5 lg:mt-12">
      <div className="flex items-center justify-center  gap-4 mb-7 md:mb-14">
        <div className="bg-[#ea3c3f] w-[1.4rem] h-[.7rem]" />
        <h2 className="text-white text-center uppercase text-2xl md:text-[2.0625rem] lg:text-[2.5rem] montserrat-extrabold">
          Bienvenido a B&H EXPERIENCE
        </h2>
        <div className="bg-[#ea3c3f] w-[1.4rem] md:w-[1.8rem] h-[.7rem]" />
      </div>

      <div className="grid md:grid-cols-2 gap-7 md:gap-10">
        <div className="text-white">
          <p className="uppercase text-sm md:text-base montserrat-semibold mb-4">
            Más que boletos aquí compras vivencias inolvidables.
          </p>
          <p className="text-justify">
            En esta sección exclusiva de B&H MUSIC te damos acceso directo a los
            mejores eventos de música nacionales e internacionales, con opciones
            VIP, zonas preferenciales y experiencias únicas junto a artistas de
            alto nivel.
          </p>
        </div>

        <div className="text-white bg-[#232323] p-5 rounded-lg">
          <div className="grid grid-cols-[auto_1fr] gap-2 mb-5">
            <FaTicketAlt className="text-[#ea3c3f] text-xl mt-[0.0625rem] lg:mt-[0.125rem]" />
            <p>Compra boletos para los conciertos más esperados</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2 mb-5">
            <AiFillStar className="text-[#ea3c3f] text-xl mt-[0.0625rem] lg:mt-[0.125rem]" />
            <p>Accede a convivencias privadas con tus artistas favoritos</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2 mb-5">
            <FaCreditCard className="text-[#ea3c3f] text-xl mt-[0.0625rem] lg:mt-[0.125rem]" />
            <p>Paga con tarjetas a meses sin intereses</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2 mb-5">
            <MdVerified className="text-[#ea3c3f] text-xl mt-[0.0625rem] lg:mt-[0.125rem]" />
            <p>
              Disfruta de zonas exclusivas donde están los artistas, su equipo y
              familiares
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <FaMicrophoneAlt className="text-[#ea3c3f] text-xl mt-[0.0625rem] lg:mt-[0.125rem]" />
            <p>Accede a eventos organizados directamente por B&H MUSIC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
