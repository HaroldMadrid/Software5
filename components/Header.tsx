'use client';
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-dark text-white py-2 shadow">
      <div className="container" style={{ maxWidth: '960px' }}>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Logo alineado a la izquierda */}
            <Link href="/" className="navbar-brand d-flex align-items-center">
              <img
                src="/images/logo.png"
                alt="Logo"
                style={{
                  maxWidth: '60px',
                  height: 'auto',
                  marginRight: '10px',
                }}
              />
              <span>Mi Portafolio</span>
            </Link>

            {/* Enlaces de navegación alineados a la derecha */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="#projects" className="nav-link">Proyectos</Link>
                </li>
                <li className="nav-item">
                  <Link href="/tareas" className="nav-link">Tareas del Semestre</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
