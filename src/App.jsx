import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Inicio from './components/pages/Inicio.jsx';
import Servicios from './components/pages/Servicios.jsx';
import Nosotros from './components/pages/Nosotros.jsx';

function App() {
  const [pagina, setPagina] = useState('inicio');

  return (
    <>
      <Navbar paginaActiva={pagina} onNavigate={setPagina} />
      <main className="content">
        {pagina === 'inicio' && <Inicio />}
        {pagina === 'servicios' && <Servicios />}
        {pagina === 'nosotros' && <Nosotros />}
      </main>
    </>
  );
}

export default App;
