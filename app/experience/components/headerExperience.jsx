"use client";
import { dataRedes } from "@/data/dataRedes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeaderExperience() {
  const router = useRouter();

  return (
    <header className="bg-[#ea3c3f] sticky top-0 z-50 p-4">
      <div className="max-w-[85rem] mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939293/logo-bhmusic_z2pp7n.png"
            alt="logo bhmusic"
            width="100"
            height="100"
            className="w-[5rem] md:w-[6.25rem]"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="flex flex-col items-end justify-between">
          <div className="flex items-center gap-3 mt-3 md:mr-12 lg:mr-24 ">
            {dataRedes.map((red) => (
              <a
                href={red.url}
                key={red.id}
                className="bg-white w-9 h-9 text-lg text-[#ea3c3f] rounded-full flex items-center justify-center"
              >
                {red.icono}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
