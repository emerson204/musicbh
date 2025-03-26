import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.API_RESEND_KEY);

export async function POST(req) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: `${dataForm.nombre} <onboarding@resend.dev>`,
        to: ["medhidmenor55@gmail.com"],
        subject: "Solicitud para Evento - B&H Music",
        react: EmailTemplate({
          nombre: dataForm.nombre,
          telefono: dataForm.telefono,
          email: dataForm.email,
          fecha: dataForm.fecha,
          mensaje: dataForm.mensaje,
        }),
        text: `
            Nueva solicitud de contratacion
            Nombre: ${dataForm.nombre}
            Teléfono: ${dataForm.telefono}
            Correo: ${dataForm.email}
            Fecha del evento: ${dataForm.fecha}
            Mensaje: ${dataForm.mensaje}

            Atentamente,
            ${dataForm.nombre}`,
      });
      return new Response(JSON.stringify(data));
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }));
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}
