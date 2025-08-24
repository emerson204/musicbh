import React from "react";
import { FaMusic, FaCommentDots } from "react-icons/fa";

export default function Perreo() {
  return (
    <section className="pb-9 md:pb-14 lg:pb-20 ">
      <div className="px-4 max-w-[75rem] mx-auto">
        <h2 className="text-white text-center uppercase text-[1.625rem] md:text-[2.0625rem] lg:text-[2.9rem] bowlby-one mb-9 lg:mb-14">
          ¡El perreo no espera!
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-white">
            <h3 className="text-[#ea3c3f] text-xl montserrat-extrabold mb-3">
              EXPERIENCIA EXCLUSIVA BACKSTAGE con B&H MUSIC – COCA-COLA FEST
              2025
            </h3>
            <p className="mb-3 md:text-lg montserrat-medium">
              ¿Te imaginas vivir el festival desde el backstage, al lado de los
              artistas?
            </p>
            <p className="text-gray-300 mb-4">
              Con BashBackstage Experiences, una experiencia EXCLUSIVA de B&H
              MUSIC, tú puedes hacerlo realidad.
            </p>
            <ul className="list-disc ml-8 mb-6">
              <li>Convivencias con artistas</li>
              <li>Acceso a zonas VIP y backstage real</li>
              <li>Afterparties privadas</li>
              <li>Pagos con meses sin intereses</li>
            </ul>

            <div className="mb-3 grid grid-cols-[auto_1fr] gap-3">
              <FaMusic className="text-red-500 text-lg mt-1" />
              <p>PREVENTA ya disponible. Cupo muy limitado.</p>
            </div>
            <div className="mb-5 grid grid-cols-[auto_1fr] gap-3">
              <FaCommentDots className="text-blue-500 text-lg mt-1" />
              <p className=" montserrat-medium">
                Escríbenos para reservar tu acceso.
              </p>
            </div>

            <p className="text-[0.9375rem] montserrat-semibold">
              B&H MUSIC – Las experiencias que nadie más puede ofrecer.
            </p>
          </div>

          <video className="w-[18rem] md:w-[25rem] mx-auto" controls>
            <source src="/video_bhcoca.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
      </div>
    </section>
  );
}
