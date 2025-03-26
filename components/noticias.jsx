import React from "react";
import Heading from "./heading";

import CardNoticias from "./cardNoticias";

export default function Noticias() {
  return (
    <section className="px-5 py-9 md:py-14 lg:py-16 sec-scroll" id="artistas">
      <div className="max-w-[75rem] mx-auto text-white">
        <Heading titulo="Artistas" />

        <div className="grid lg:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-20">
          <CardNoticias
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1742939292/larry_whbj5z.jpg"
            alt="imagen de artista larry"
            artista="El larry y su clase"
            subtitulo="Rompiendo límites con su estilo único y vibraciones que marcan tendencia."
            spotify="https://open.spotify.com/artist/04O4Ispeneittg6F3YSdkz"
            youtube="https://youtube.com/channel/UC8hySxsW1FcqDvXCedYBo1w"
            instagram="https://www.instagram.com/larryy_oficial_"
            ruta="https://youtube.com/channel/UC8hySxsW1FcqDvXCedYBo1w"
          />
        </div>
      </div>
    </section>
  );
}
