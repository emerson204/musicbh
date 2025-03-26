import * as React from "react";

export const EmailTemplate = ({ nombre, telefono, email, fecha, mensaje }) => (
  <div>
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        padding: "1.25rem",
      }}
    >
      <h2 style={{ color: "#ea3c3f" }}>Nueva Solicitud de Contratación</h2>
      <p>
        <strong>Nombre completo:</strong> {nombre}
      </p>
      <p>
        <strong>Teléfono:</strong> {telefono}
      </p>
      <p>
        <strong>Correo electrónico:</strong> {email}
      </p>
      <p>
        <strong>Fecha del evento:</strong> {fecha}
      </p>
      <p>
        <strong>Mensaje:</strong>
      </p>
      <blockquote
        style={{
          background: "#f4f4f4",
          padding: "0.625rem",
          borderLeft: "4px solid #ea3c3f",
        }}
      >
        {mensaje}
      </blockquote>
      <p>📅 ¡Revisa esta solicitud y responde lo antes posible!</p>
    </div>
  </div>
);
