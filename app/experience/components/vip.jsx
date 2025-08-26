import React from "react";
import HeadingExperence from "./headingExperence";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";

export default function Vip() {
  return (
    <section className="px-5 py-9 md:py-14 lg:py-16">
      <HeadingExperence
        titulo="Experiencias VIP"
        descripcion="Acceso exclusivo a zonas especiales y encuentros únicos"
      />

      <div className="max-w-[75rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
          <div>
            <Image
              src="/vip.jpg"
              alt="lineup"
              width="500"
              height="500"
              className="rounded-lg mx-auto"
            />
          </div>
          <div>
            <div className="grid grid-cols-[auto_1fr] gap-5 mb-10">
              <div className="bg-[#ea3c3f]/30 w-12 h-11 rounded-sm flex items-center justify-center">
                <FiUsers className="text-[#ea3c3f] text-2xl" />
              </div>
              <div className="text-white">
                <h3 className="text-xl montserrat-semibold mb-2">
                  Acceso Backstage
                </h3>
                <p className="text-gray-400">
                  Conoce a los artistas en persona y vive la experiencia desde
                  adentro
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-5  mb-10">
              <div className="bg-orange-500/40 w-12 h-11 rounded-sm flex items-center justify-center">
                <FaRegStar className="text-orange-500 text-2xl" />
              </div>
              <div className="text-white">
                <h3 className="text-xl montserrat-semibold mb-2">
                  Meet & Greet
                </h3>
                <p className="text-gray-400">
                  Sesiones exclusivas de fotos y autógrafos con tus artistas
                  favoritos
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-5 mb-10">
              <div className="bg-[#ea3c3f]/30 w-12 h-11 rounded-sm flex items-center justify-center">
                <FaRegCalendar className="text-[#ea3c3f] text-2xl" />
              </div>
              <div className="text-white">
                <h3 className="text-xl montserrat-semibold mb-2">
                  Afterparties Exclusivas
                </h3>
                <p className="text-gray-400">
                  Continúa la fiesta en venues privados solo para miembros VIP
                </p>
              </div>
            </div>

            <button className="w-full block text-center text-white bg-[#ea3c3f] py-3 rounded-md montserrat-semibold hover:bg-[#ea3c3f]">
              Accede a VIP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
