"use client";
import Contratos from "@/components/contratos";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Noticias from "@/components/noticias";
import Servicios from "@/components/servicios";
import Somos from "@/components/somos";
import { useEffect } from "react";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Somos />
      <Servicios />
      <Noticias />
      <Contratos />
      <Footer />
    </>
  );
}
