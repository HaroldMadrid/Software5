import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto } from 'next/font/google';  // Correcta importación de la fuente Roboto
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Utiliza la fuente Roboto en tu layout
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portafolio - Harold Madrid</title>
      </head>
      <body className={roboto.className} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Agregar Header */}
        <Header />

        {/* El contenido de la página */}
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>

        {/* Agregar Footer */}
        <Footer />
      </body>
    </html>
  );
}
