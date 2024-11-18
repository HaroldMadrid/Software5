'use client'; // Directiva para indicar que este componente es del lado del cliente
import React, { useState } from 'react';

export default function Contact() {
  const [messageLength, setMessageLength] = useState(0);
  const maxMessageLength = 500;

  // Función para manejar la validación del campo de nombre (solo letras y espacios)
  const validateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Permitir solo letras y espacios (sin números ni caracteres especiales)
    const regex = /^[A-Za-zÁ-ÿ\s]*$/; // Permitir caracteres acentuados y letras
    if (!regex.test(value)) {
      e.target.setCustomValidity("El nombre solo debe contener letras y espacios");
    } else {
      e.target.setCustomValidity(""); // Si es válido, eliminar el mensaje de error
    }
  };

  // Función para manejar el cambio en el mensaje
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxMessageLength) {
      setMessageLength(value.length);
    }
  };

  return (
    <section className="bg-[#121212] text-light min-vh-100 d-flex flex-column">
      <div className="container-fluid p-0" style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
        {/* Título y descripción */}
        <div className="row justify-content-center text-center mb-3">
          <div className="col-md-6">
            <h2 className="display-3" style={{ fontSize: '2.5rem', color: '#E0E0E0' }}>Contáctame</h2> {/* Título más grande y claro */}
            <p className="lead" style={{ fontSize: '1.1rem', color: '#E0E0E0' }}>
              Si deseas ponerte en contacto conmigo para oportunidades de colaboración, preguntas o simplemente para conversar sobre tecnología, no dudes en enviarme un mensaje.
            </p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <form className="bg-[#2A2A2A] p-4 rounded-lg shadow-lg" style={{ marginBottom: '0' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ color: '#E0E0E0' }}>Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="form-control"
              onInput={validateName} // Llamar a la función de validación al escribir
              style={{
                backgroundColor: '#333333', // Fondo oscuro para el cuadro
                color: '#D3D3D3', // Color del texto claro
                border: '1px solid #5A5A5A', // Borde gris
                borderRadius: '8px', // Bordes redondeados
                padding: '0.5rem', // Espaciado interno
                fontSize: '1rem', // Tamaño del texto
                width: '100%', // Ancho completo
                marginBottom: '1rem', // Espacio inferior
              }}
              maxLength={50} // Limitar el número de caracteres a 50
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: '#E0E0E0' }}>Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-control"
              style={{
                backgroundColor: '#333333', // Fondo oscuro para el cuadro
                color: '#D3D3D3', // Color del texto claro
                border: '1px solid #5A5A5A', // Borde gris
                borderRadius: '8px', // Bordes redondeados
                padding: '0.5rem', // Espaciado interno
                fontSize: '1rem', // Tamaño del texto
                width: '100%', // Ancho completo
                marginBottom: '1rem', // Espacio inferior
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label" style={{ color: '#E0E0E0' }}>
              Mensaje (máximo {maxMessageLength} caracteres)
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="form-control"
              onChange={handleMessageChange} // Llamar a la función para manejar el cambio
              style={{
                backgroundColor: '#333333', // Fondo oscuro para el cuadro
                color: '#D3D3D3', // Color del texto claro
                border: '1px solid #5A5A5A', // Borde gris
                borderRadius: '8px', // Bordes redondeados
                padding: '0.5rem', // Espaciado interno
                fontSize: '1rem', // Tamaño del texto
                width: '100%', // Ancho completo
                marginBottom: '1rem', // Espacio inferior
              }}
              maxLength={maxMessageLength} // Limitar el número de caracteres a 500
            />
          </div>

          {/* Botón de envío */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-outline-light text-uppercase px-4 py-2 mt-3 rounded-full"
              style={{
                fontWeight: 'bold',
                borderColor: '#5A5A5A', // Gris oscuro para el borde
                color: '#E0E0E0', // Gris claro para el texto
                backgroundColor: '#2B2B2B', // Gris oscuro para el fondo
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = '#5A5A5A'; // Fondo gris más claro al pasar el cursor
                target.style.color = '#FFFFFF'; // Texto blanco al pasar el cursor
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = '#2B2B2B'; // Fondo original
                target.style.color = '#E0E0E0'; // Texto original
              }}
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
