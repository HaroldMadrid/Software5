// components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <div className="d-flex justify-content-center">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3">
            <img src="/images/Insta.webp" alt="Instagram" width="30" height="30" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3">
            <img src="/images/face.png" alt="Facebook" width="30" height="30" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-3">
            <img src="/images/link.png" alt="LinkedIn" width="30" height="30" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mx-3">
            <img src="/images/git.png" alt="GitHub" width="30" height="30" />
          </a>
        </div>
        <p>© 2024 Mi Portafolio</p>
      </div>
    </footer>
  );
}
