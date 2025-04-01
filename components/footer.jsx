import { dataRedes } from "@/data/dataRedes";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#232323] pt-12 mt-7 md:mt-0 md:pt-20 ">
      <div className="max-w-[75rem] mx-auto text-white grid  md:grid-cols-2 text-center md:text-left md:gap-y-10 lg:grid-cols-4 gap-6 px-5">
        <div>
          <Image
            src="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939293/logo-bhmusic_z2pp7n.png"
            alt="logo bhmusic"
            width="100"
            height="100"
            className="mb-2"
          />
          <p className=" montserrat-medium text-left mb-4">
            El ritmo del futuro comienza aquí. Talento, pasión y éxito en cada
            nota.
          </p>
          <div className="hidden md:flex items-center gap-3 mt-3 md:mr-12 lg:mr-24 ">
            {dataRedes.map((red) => (
              <a
                href={red.url}
                key={red.id}
                className="bg-white w-6 h-6 text-sm text-[#232323] rounded-full flex items-center justify-center"
              >
                {red.icono}
              </a>
            ))}
          </div>
        </div>
        <div className="mb-3 md:mb-0">
          <h3 className=" uppercase montserrat-semibold mb-3">
            Enlaces rapidos
          </h3>
          <ul className="list-disc marker:text-red-500 ml-4">
            <li className="mb-2 w-fit md:w-auto mx-auto ">Inicio</li>
            <li className="mb-2 w-fit md:w-auto mx-auto">¿Quiénes somos?</li>
            <li className="mb-2 w-fit md:w-auto mx-auto">Servicios</li>
            <li className="mb-2 w-fit md:w-auto mx-auto">Artistas</li>
            <li className="w-fit md:w-auto mx-auto">Contratos</li>
          </ul>
        </div>
        <div className="mb-3 md:mb-0">
          <h3 className=" uppercase montserrat-semibold mb-3">
            Información de contacto
          </h3>
          <ul className="list-disc marker:text-red-500 ml-4">
            <li className="mb-2 w-fit md:w-auto mx-auto">
              contacto@bhmusicoficial.com
            </li>
            <li className="mb-2 w-fit md:w-auto mx-auto">+52 622 163 5704</li>
            <li className="w-fit md:w-auto mx-auto">+1 (602) 820-9609</li>
          </ul>
        </div>
        <div>
          <ul className="list-disc marker:text-red-500 ml-4">
            <li className="mb-1 w-fit md:w-auto mx-auto">
              Política de privacidad
            </li>
            <li className="mb-1 w-fit md:w-auto mx-auto">Términos de uso</li>
            <li className="w-fit md:w-auto mx-auto">Política de Cookies</li>
          </ul>
        </div>
      </div>
      <p className="text-white text-center mt-20 py-4 bg-black text-sm md:text-[0.9375rem] px-5">
        Copyright ©2025 H&B Music. Todos los derechos reservados
      </p>
    </footer>
  );
}
