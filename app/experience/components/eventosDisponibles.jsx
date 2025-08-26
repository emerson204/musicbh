import React from "react";
import HeadingExperence from "./headingExperence";
import { dataEventos } from "@/data/dataEventos";
import Image from "next/image";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

export default function EventosDisponibles() {
  return (
    <section className="px-5 py-9 md:py-14 lg:py-16">
      <div className="max-w-[75rem] mx-auto">
        <HeadingExperence
          titulo="Eventos Disponibles"
          descripcion="Conciertos y festivales exclusivos con acceso garantizado"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataEventos.map((evento) => (
            <div
              key={evento.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-lg "
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={evento.image}
                  alt="imagen evento"
                  width="400"
                  height="400"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#ea3c3f] text-white px-2 py-1 rounded-md montserrat-medium text-[0.75rem]">
                  Disponible
                </div>
              </div>

              <div className="p-5">
                <div>
                  <h3 className=" mb-6 montserrat-semibold text-lg md:text-xl">
                    {evento.titulo}
                  </h3>
                </div>
                <div className="mb-5">
                  <div className="flex items-center gap-2 text-gray-500 mb-3 ">
                    <MdOutlineCalendarToday />
                    <span className="text-sm text-muted-foreground">
                      {evento.date}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 gap-2 mb-4">
                    <MdOutlineLocationOn />
                    <span className="text-sm text-muted-foreground">
                      {evento.location}
                    </span>
                  </div>
                </div>
                <p className="text-2xl montserrat-semibold text-[#ea3c3f] mb-5">
                  {evento.price}
                </p>

                <button className="cursor-pointer bg-[#ea3c3f] montserrat-medium text-white py-2 px-4 rounded-md hover:bg-[#ea3c3f]">
                  Comprar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
