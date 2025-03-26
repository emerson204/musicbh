import { dataNav } from "@/data/dataNav";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar({ open, handleClose }) {
  return (
    <div
      className={`md:relative fixed inset-0 bg-black/50 md:bg-black w-full text-white py-4 md:pl-1 md:pr-5 lg:pl-14 before:content-[''] before:absolute md:before:bg-[url('https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939293/menu-left_jdvd44.png')] before:bg-cover before:bg-left-center before:-left-19 before:top-0 before:bg-no-repeat before:h-[100%] before:w-[5rem] ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none md:pointer-events-auto"
      } md:opacity-100 transition-opacity duration-300 ease-in-out`}
    >
      <nav className="flex bg-black text-white md:text-white md:bg-transparent flex-col md:flex-row absolute md:static top-0 left-0 bottom-0 w-[73%] md:w-auto md:items-center md:justify-between lg:justify-normal md:gap-2 lg:gap-12">
        <div className="flex md:hidden items-center justify-between px-5 pt-6 mb-10">
          <Image
            src="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939293/logo-bhmusic_z2pp7n.png"
            alt="logo bhmusic"
            width="100"
            height="100"
            className="w-[5.5rem] md:w-[6.25rem]"
          />
          <IoCloseOutline className="text-3xl" onClick={handleClose} />
        </div>

        {dataNav.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            onClick={handleClose}
            className="montserrat-semibold text-[0.9375rem] uppercase pl-5 md:pl-0 py-3 md:py-0"
          >
            {link.nombre}
          </Link>
        ))}
      </nav>
    </div>
  );
}
