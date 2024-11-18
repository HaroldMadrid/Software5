'use client'; // Directiva para indicar que este componente es del lado del cliente
import React from 'react';

export default function About() {
  return (
    <section className="bg-dark text-light min-vh-100 d-flex flex-column">
      <div className="container p-4" style={{ backgroundColor: '#121212' }}>
        {/* Información sobre mí */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-4 mb-3">Sobre mí</h2>
            <p className="lead mb-4">
              Soy Harold Adrian Madrid Ariza, un estudiante de 22 años apasionado por el desarrollo de software, UX y pruebas de calidad (QA). Mi objetivo es crear soluciones tecnológicas innovadoras y funcionales, enfocándome en la experiencia del usuario y en la mejora constante de mis habilidades.
            </p>
            <p className="lead mb-4">
              Actualmente, me especializo en tecnologías como Java, C++, PHP, y herramientas de desarrollo como Eclipse y Visual Studio Code. Me motiva colaborar en equipos de trabajo que busquen impactar positivamente a través de productos de calidad y bien diseñados.
            </p>

            <h3 className="h4 mb-3">Habilidades y Tecnologías</h3>
            <ul className="list-unstyled text-left">
              <li><strong>Lenguajes:</strong> Java, C++, HTML, PHP</li>
              <li><strong>Frameworks:</strong> React, Next.js</li>
              <li><strong>Bases de Datos:</strong> SQL Server, MySQL</li>
              <li><strong>Herramientas:</strong> Eclipse, Visual Studio Code, Git</li>
            </ul>

            <h3 className="h4 mb-3">Intereses y Metas</h3>
            <p className="lead mb-4">
              Además de la programación, tengo un fuerte interés en la experiencia de usuario (UX) y las pruebas de calidad (QA). Mi meta a largo plazo es trabajar en un equipo multidisciplinario que valore la innovación, la mejora continua y la entrega de productos que realmente hagan la diferencia.
            </p>

            <div className="text-center mt-4">
              <a href="/contact" className="btn btn-outline-light btn-lg">
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
