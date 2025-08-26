import React from "react";
import BienvenidaExperience from "./bienvenidaExperience";
import EventoDestacado from "./eventoDestacado";
import Perreo from "./perreo";
import EventosDisponibles from "./eventosDisponibles";
import Vip from "./vip";
import PagoSeguro from "./pagoSeguro";

export default function Main() {
  return (
    <main>
      <BienvenidaExperience />
      <EventoDestacado />
      <Perreo />
      <EventosDisponibles />
      <Vip />
      <PagoSeguro />
    </main>
  );
}
