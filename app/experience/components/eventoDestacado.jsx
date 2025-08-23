import Image from "next/image";
import React from "react";

export default function EventoDestacado() {
  return (
    <section className="py-14 md:py-14 lg:py-20">
      <div className="px-4 max-w-[75rem] mx-auto">
        <h2 className="text-white text-center uppercase text-2xl md:text-[2.0625rem] lg:text-[2.5rem] montserrat-extrabold">
          Próximos eventos
        </h2>
        <p className="text-white text-center md:text-lg lg:text-xl mt-2 montserrat-medium mb-7 md:mb-12 lg:mb-14">
          Coca-Cola Fest – Vive el evento desde el corazón del backstage.
        </p>
      </div>

      <div className="h-[43rem] bg-[url('/hero_desktop.webp')] bg-cover bg-center bg-no-repeat lg:flex items-center justify-center hidden ">
        <Image
          src="/lineup_desktop.webp"
          alt="lineup"
          width="800"
          height="800"
          className="mx-auto w-[60rem]"
        />
      </div>

      <div className=" bg-[url('/poster_home_bg.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center py-10 lg:hidden ">
        <Image
          src="/lineup_mobile.webp"
          alt="lineup"
          width="350"
          height="350"
          className="mx-auto"
        />
      </div>
    </section>
  );
}
