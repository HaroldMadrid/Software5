'use client'; // Directiva para indicar que este componente es del lado del cliente
import React from 'react';

export default function Home() {
  return (
    <section className="bg-dark text-light min-vh-100 d-flex flex-column">
      <div className="container-fluid p-0" style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
        {/* Foto y Presentación */}
        <div className="row justify-content-center text-center mb-5 mt-4">
          <div className="col-md-6">
            <div
              className="image-container"
              style={{
                position: 'relative',
                width: '100%',
                height: '300px',
                maxWidth: '300px',
                margin: '0 auto',
                overflow: 'hidden',
                borderRadius: '35%',
                backgroundImage: 'url(/images/perfil.jpeg)', // Ruta de tu foto
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'contain',
              }}
            ></div>
            <h1 className="display-4">Bienvenido a mi Portafolio</h1>
            <p className="lead">
              Soy Harold Adrian Madrid Ariza, un estudiante de Gestión y Desarrollo de Software con pasión por la programación, UX y QA.
            </p>
            <div className="mt-4">
              <a
                href="/about"
                className="btn mx-2"
                style={{
                  fontWeight: 'bold',
                  borderColor: '#5A5A5A',
                  color: '#E0E0E0',
                  backgroundColor: '#2B2B2B',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.backgroundColor = '#5A5A5A';
                  target.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.backgroundColor = '#2B2B2B';
                  target.style.color = '#E0E0E0';
                }}
              >
                Más sobre mí
              </a>
              <a
                href="/contact"
                className="btn mx-2"
                style={{
                  fontWeight: 'bold',
                  borderColor: '#5A5A5A',
                  color: '#E0E0E0',
                  backgroundColor: '#2B2B2B',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.backgroundColor = '#5A5A5A';
                  target.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.backgroundColor = '#2B2B2B';
                  target.style.color = '#E0E0E0';
                }}
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>

        {/* Proyectos Destacados */}
        <section id="projects" className="mt-5">
          <h2 className="text-center mb-4">Proyectos Destacados</h2>
          <div className="row d-flex justify-content-center">
            {/* Proyecto 1 */}
            <div className="col-md-6 mb-4 d-flex">
              <div className="card h-100 shadow-lg bg-secondary text-light">
                <img
                  src="/images/memento.png"
                  alt="Landing Page"
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
                <div className="card-body">
                  <h3 className="card-title">Landing Page</h3>
                  <p className="card-text">
                    Una página web de presentación diseñada para captar la atención del usuario y presentar productos/servicios de forma clara.
                  </p>
                  <a
                    href="http://localhost/Proyectos/LandinPage.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="col-md-6 mb-4 d-flex">
              <div className="card h-100 shadow-lg bg-secondary text-light">
                <img
                  src="/images/proyecto.png"
                  alt="Página de E-commerce"
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
                <div className="card-body">
                  <h3 className="card-title">Página de E-commerce</h3>
                  <p className="card-text">
                    Plataforma de comercio electrónico con funciones como catálogo de productos, carrito de compras y pasarela de pago.
                  </p>
                  <a
                    href="https://proyecto-ds-5.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
