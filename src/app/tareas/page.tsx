'use client';
import React from 'react';

export default function TareaPage() {
  return (
    <section className="bg-dark text-light min-vh-100 d-flex flex-column">
      <div className="container-fluid p-0" style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
        {/* Encabezado y Presentación */}
        <div className="row justify-content-center text-center mb-5 mt-4">
          <div className="col-md-6">
            <h1 className="display-4">Tareas del Semestre</h1>
            <p className="lead">
              Aquí encontrarás todas las tareas realizadas durante el semestre, organizadas y detalladas.
            </p>
          </div>
        </div>

        {/* Espacio para las Tareas */}
        <section id="tasks" className="mt-5">
          <h2 className="text-center mb-4">Listado de Tareas</h2>
          <div className="d-flex flex-column align-items-center">
            {/* Tarea 1: Lluvia de Ideas */}
            <div className="card mb-4 shadow-lg bg-secondary text-light w-75">
              <div className="card-body">
                <h3 className="card-title">Tarea 1: Lluvia de Ideas</h3>
                <p className="card-text">
                  Investigación sobre los distintos tipos de archivos multimedia mediante una lluvia de ideas.
                </p>
                <a
                  href="/documents/Lluvia de ideas.pdf"
                  className="btn btn-outline-light"
                  target="_blank"
                >
                  Ver tarea
                </a>
              </div>
            </div>

            {/* Tarea 2: Propuesta del Proyecto y Logo */}
            <div className="card mb-4 shadow-lg bg-secondary text-light w-75">
              <div className="card-body">
                <h3 className="card-title">Tarea 2: Propuesta del Proyecto y Logo</h3>
                <p className="card-text">
                  Descripción de un proyecto personal a desarrollar, incluyendo el logo de la empresa.
                </p>
                <a
                  href="/documents/Propuesta de proyecto y logo.pdf"
                  className="btn btn-outline-light"
                  target="_blank"
                >
                  Ver tarea
                </a>
              </div>
            </div>

            {/* Tarea 3: Flyer */}
            <div className="card mb-4 shadow-lg bg-secondary text-light w-75">
              <div className="card-body">
                <h3 className="card-title">Tarea 3: Flyer</h3>
                <p className="card-text">
                  Creación de un flyer para el proyecto personal (empresa).
                </p>
                <a
                  href="/documents/Flyer.pdf"
                  className="btn btn-outline-light"
                  target="_blank"
                >
                  Ver tarea
                </a>
              </div>
            </div>

            {/* Tarea 4: Cuña, Memento (video solo audio) */}
            <div className="card mb-4 shadow-lg bg-secondary text-light w-75">
              <div className="card-body">
               <h3 className="card-title">Tarea 4: Cuña, Memento</h3>
               <p className="card-text">
                 Cuña publicitaria para el proyecto personal, en formato de audio (mp3).
               </p>
               <div className="audio-container">
                <audio controls className="w-100">
                  <source src="/documents/Cuña, Memento.mp3" type="audio/mp3" />
                  Tu navegador no soporta el formato de audio.
                </audio>
              </div>
            </div>
          </div>

            {/* Tarea 5: Cuadro Comparativo - Hosting */}
            <div className="card mb-4 shadow-lg bg-secondary text-light w-75">
              <div className="card-body">
                <h3 className="card-title">Tarea 5: Cuadro Comparativo - Hosting</h3>
                <p className="card-text">
                  Investigación comparativa sobre diferentes servicios de hosting.
                </p>
                <a
                  href="/documents/Cuadro comparativo-Hosting.pdf"
                  className="btn btn-outline-light"
                  target="_blank"
                >
                  Ver tarea
                </a>
              </div>
            </div>

            {/* Tarea 6: Estudio de Requerimientos */}
            <div className="card mb-4 shadow-lg bg-secondary text-light w-75">
              <div className="card-body">
                <h3 className="card-title">Tarea 6: Estudio de Requerimientos</h3>
                <p className="card-text">
                  Estudio sobre los requerimientos necesarios para desarrollar la página web de nuestro proyecto personal.
                </p>
                <a
                  href="/documents/Estudio de requerimientos.pdf"
                  className="btn btn-outline-light"
                  target="_blank"
                >
                  Ver tarea
                </a>
              </div>
            </div>

            {/* Tarea 7: Descripción de Páginas Web y Iconos */}
            <div className="card mb-4 shadow-lg bg-secondary text-light w-75">
              <div className="card-body">
                <h3 className="card-title">Tarea 7: Descripción de Páginas Web y Iconos</h3>
                <p className="card-text">
                  Análisis de páginas web y el uso de colores y iconos en el diseño visual.
                </p>
                <a
                  href="/documents/Descripción de páginas web y iconos.pdf"
                  className="btn btn-outline-light"
                  target="_blank"
                >
                  Ver tarea
                </a>
              </div>
            </div>

            {/* Tarea 8: Informe de Errores - Trabajo de QA */}
            <div className="card mb-4 shadow-lg bg-secondary text-light w-75">
              <div className="card-body">
                <h3 className="card-title">Tarea 8: Informe de Errores - Trabajo de QA</h3>
                <p className="card-text">
                  Informe sobre los errores encontrados durante el desarrollo de una página web funcional en un proyecto grupal.
                </p>
                <a
                  href="/documents/Informe de errores-trabajo de QA.pdf"
                  className="btn btn-outline-light"
                  target="_blank"
                >
                  Ver tarea
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
