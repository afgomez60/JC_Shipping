function Inicio() {
  return (
    <section className="page">
      <h2>Tu aliado estratégico en Asia</h2>
      <p>
        Bienvenido a <strong>JC Shipping</strong>. Simplificamos el proceso de compras
        internacionales para que puedas traer productos, tecnología o materia prima desde
        China directamente hasta tu negocio en Colombia.
      </p>
      <p>
        Nos encargamos de toda la cadena logística: desde la recolección en la fábrica,
        la consolidación de la carga y el trámite aduanero hasta la entrega final.
      </p>
      <p className="extra-text">Hora de conexión al portal: {new Date().toLocaleTimeString()}</p>
    </section>
  );
}

export default Inicio;
