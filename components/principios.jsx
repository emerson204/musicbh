export default function Principios({ titulo, descripcion, icono: Icon }) {
  return (
    <div
      className="text-center bg-[#ea3c3f] px-3 md:px-5 py-6 md:py-10 rounded-lg"
      data-aos="zoom-in"
    >
      {
        <Icon className="text-[2.7rem] md:text-[3rem] text-white mb-3 md:mb-4 mx-auto" />
      }
      <h3 className="text-2xl montserrat-semibold text-white mb-2 md:mb-3">
        {titulo}
      </h3>
      <p className="text-white">{descripcion}</p>
    </div>
  );
}
