'use client'; // Marca el archivo como un componente de cliente

import React, { useState } from 'react';

const Button: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="btn mx-2"
      style={{
        fontWeight: 'bold',
        borderColor: isHovered ? '#4a90e2' : '#6c757d', // Azul claro para el borde en hover
        color: isHovered ? '#ffffff' : '#d1e8ff', // Texto blanco en hover, azul claro en estado normal
        backgroundColor: isHovered ? '#6c757d' : 'transparent', // Gris suave en hover, transparente en estado normal
        padding: '10px 20px', // Ajuste de relleno
        borderRadius: '25px', // Bordes redondeados
        transition: 'all 0.3s ease', // Transición suave
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </a>
  );
};

export default Button;
