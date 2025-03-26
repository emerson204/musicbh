import React from "react";
import Heading from "./heading";
import CardServicios from "./cardServicios";

export default function Servicios() {
  return (
    <section className="px-5 py-9 md:py-14 lg:py-16 sec-scroll " id="servicios">
      <div className="max-w-[75rem] mx-auto">
        <Heading titulo="Servicios" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-5">
          <CardServicios
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939294/produccion_ne8o95.jpg"
            src="produccion"
            nombre="Producción musical y grabación profesional"
          />
          <CardServicios
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939293/manejo-redes_cfbuat.jpg"
            src="promocion digital"
            nombre="Promoción digital y manejo de redes sociales"
          />
          <CardServicios
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939292/booking_vl5ejc.jpg"
            src="booking"
            nombre="Booking y representación artística"
          />
          <CardServicios
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939293/plataformas-digitales_ijzcjz.jpg"
            src="plataformas digitales"
            nombre="Distribución en plataformas digitales"
          />
          <CardServicios
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939292/branding_ai928r.jpg"
            src="branding"
            nombre="Desarrollo de imagen y branding"
          />
          <CardServicios
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939292/contratos_ipovi3.jpg"
            src="contratos"
            nombre="Asesoría legal y contratos"
          />
          <CardServicios
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939294/videoclip_ep4rlf.jpg"
            src="videoclips"
            nombre="Videoclips y contenido visual"
          />
        </div>
      </div>
    </section>
  );
}
