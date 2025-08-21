import Footer from "@/components/footer";
import React from "react";
import HeaderExperience from "./components/headerExperience";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import Main from "./components/main";

export default function Experience() {
  return (
    <>
      <HeaderExperience />
      <div className="max-w-[75rem] mx-auto px-5 py-8">
        <Link
          href="/"
          className="text-white text-lg flex items-center gap-2 montserrat-semibold "
        >
          <GoArrowLeft className="text-2xl" />
          Inicio
        </Link>
      </div>

      <Main />

      <Footer />
    </>
  );
}
