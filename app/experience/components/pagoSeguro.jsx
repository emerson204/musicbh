import React from "react";
import HeadingExperence from "./headingExperence";
import { GoLock } from "react-icons/go";
import { GoShieldCheck } from "react-icons/go";
import { GoCalendar } from "react-icons/go";

export default function PagoSeguro() {
  return (
    <section className="px-5 py-9 md:py-14 lg:py-16">
      <HeadingExperence
        titulo="Pago Seguro"
        descripcion="Transacciones protegidas y opciones flexibles de pago"
      />
      <div className="max-w-[75rem] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-7">
          <div className="bg-white p-6 py-8 rounded-lg">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <GoLock className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-xl md:text-2xl montserrat-semibold text-center mb-4">
              Seguridad Garantizada
            </h3>
            <p className="text-center text-gray-500">
              Utilizamos encriptación SSL y pasarelas de pago certificadas para
              proteger tu información
            </p>
          </div>

          <div className="bg-white p-6 py-8 rounded-lg">
            <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <GoCalendar className="w-8 h-8 text-orange-700" />
            </div>
            <h3 className="text-xl md:text-2xl montserrat-semibold text-center mb-4">
              Meses Sin Intereses
            </h3>
            <p className="text-center text-gray-500">
              Paga tus experiencias en 3, 6 o 12 meses sin intereses con
              tarjetas participantes
            </p>
          </div>

          <div className="bg-white p-6 py-8 rounded-lg">
            <div className="bg-[#ea3c3f]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <GoShieldCheck className="w-8 h-8 text-[#ea3c3f]" />
            </div>
            <h3 className="text-xl md:text-2xl montserrat-semibold text-center mb-4">
              Garantía de devolución de dinero
            </h3>
            <p className="text-center text-gray-500">
              Reembolso completo en caso de cancelación del evento
            </p>
          </div>
        </div>

        <div className="bg-white p-6 py-8 rounded-lg mt-10">
          <h3 className="text-center text-[#ea3c3f] text-lg montserrat-medium mb-4">
            Métodos de Pago Aceptados
          </h3>
          <p className="text-center text-gray-500">
            Visa - Mastercard - American Express - PayPal - Tarjetas de Debito
          </p>
        </div>
      </div>
    </section>
  );
}
