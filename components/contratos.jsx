import React from "react";
import Heading from "./heading";
import { MdEmail } from "react-icons/md";
import FormularioContacto from "./formularioContacto";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

export default function Contratos() {
  return (
    <section className="px-5 py-9 md:py-14 lg:py-16 sec-scroll " id="contratos">
      <div className="max-w-[75rem] mx-auto">
        <Heading titulo="Contrataciones" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6" data-aos="fade-up">
          <div className="text-white">
            <p className="text-[#ea3c3f] uppercase text-sm montserrat-semibold mb-2 ">
              Eleva tu evento
            </p>
            <h3 className="text-2xl md:text-3xl montserrat-semibold mb-5">
              ¿Te interesa contratar a uno de nuestros artistas para tu evento?
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#ea3c3f] w-2 md:h-5 h-8" />
              <p className="montserrat-medium">
                Completa el formulario de contacto o escríbenos directamente a:
              </p>
            </div>

            <a
              href="mailto:contacto@bhmusic.com"
              className="text-white flex items-center gap-2 underline montserrat-medium mb-7"
            >
              <div className="bg-[#ea3c3f] w-9 h-9 rounded-full flex items-center justify-center">
                <MdEmail className="text-2xl" />
              </div>
              contacto@bhmusicoficial.com
            </a>

            <div className="flex items-center gap-2 mb-7">
              <div className="bg-[#ea3c3f] w-2 md:h-5 h-8" />
              <p className="montserrat-medium ">
                Llama o envíanos un mensaje a nuestros números de contacto:
              </p>
            </div>

            <div className="flex gap-x-5 gap-y-1 sm:gap-10 flex-wrap">
              <a
                href="tel:+526221635704"
                className="text-white flex items-center gap-2  montserrat-medium mb-7"
              >
                <div className="bg-[#ea3c3f] w-9 h-9 rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="text-xl" />
                </div>
                +52 622 163 5704
              </a>
              <a
                href="tel:+16028209609"
                className="text-white flex items-center gap-2  montserrat-medium mb-7"
              >
                <div className="bg-[#ea3c3f] w-9 h-9 rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="text-xl" />
                </div>
                +1 (602) 820-9609
              </a>
            </div>

            <div className="flex items-center gap-2 mb-7">
              <div className="bg-[#ea3c3f] w-2 md:h-5 h-8" />
              <p className="montserrat-medium ">
                También puedes enviarnos mensaje por WhatsApp o Instagram.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-3 items-center">
              <a
                href="https://api.whatsapp.com/send?phone=526221635704"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3ddc59] w-full md:w-fit flex items-center gap-2 px-7 py-3 rounded-full justify-center"
              >
                <FaWhatsapp className="text-2xl" />
                <p className="text-lg montserrat-medium">WhatsApp</p>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]  w-full md:w-fit flex items-center gap-2 px-7 py-3 rounded-full justify-center"
              >
                <FaInstagram className="text-2xl" />
                <p className="text-lg montserrat-medium">Instagram</p>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-20">
              <FormularioContacto />
            </div>
            <Image
              src="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939293/logo-bhmusic_z2pp7n.png"
              alt="logo bhmusic"
              width="400"
              height="400"
              className="absolute md:top-[15%] top-[30%] lg:left-[15%] md:left-[22%] left-[1%] opacity-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
