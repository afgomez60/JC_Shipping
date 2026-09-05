function Navbar({ paginaActiva, onNavigate }) {
  const paginas = [
    ['inicio', 'Inicio'],
    ['servicios', 'Servicios'],
    ['nosotros', 'Nosotros'],
  ];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">JC Shipping</h1>
        <span className="subtitle">Importaciones seguras</span>
      </div>
      <div className="nav-buttons">
        {paginas.map(([id, etiqueta]) => (
          <button
            className={`nav-btn ${paginaActiva === id ? 'active' : ''}`}
            key={id}
            onClick={() => onNavigate(id)}
            type="button"
          >
            {etiqueta}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
