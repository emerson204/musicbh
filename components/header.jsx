"use client";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "./navBar";
import { dataRedes } from "@/data/dataRedes";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className="bg-[#ea3c3f] h-[5.5rem] md:h-[6.5rem] sticky top-0 z-50">
      <div className="px-5 md:pr-0 lg:pr-0 lg:pl-14 grid grid-cols-[1fr_2fr] h-[100%] items-center md:items-stretch">
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939293/logo-bhmusic_z2pp7n.png"
            alt="logo bhmusic"
            width="100"
            height="100"
            className="w-[5rem] md:w-[6.25rem]"
          />
        </div>

        <div className="flex flex-col items-end justify-between">
          <div className="hidden md:flex items-center gap-3 mt-3 md:mr-12 lg:mr-24 ">
            {dataRedes.map((red) => (
              <a
                href={red.url}
                key={red.id}
                className="bg-white w-6 h-6 text-sm text-[#ea3c3f] rounded-full flex items-center justify-center"
              >
                {red.icono}
              </a>
            ))}
          </div>
          <Navbar open={open} handleClose={handleClose} />
          <div className="md:hidden">
            <FiMenu onClick={handleMenu} className="text-white text-3xl" />
          </div>
        </div>
      </div>
    </header>
  );
}
