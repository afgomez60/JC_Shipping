function Nosotros() {
  return (
    <section className="page careers-page" aria-labelledby="careers-title">
      <div className="careers-intro">
        <p className="eyebrow">Únete a nuestro equipo</p>
        <h2 id="careers-title">Trabaja con nosotros</h2>
        <p>
          En JC Shipping buscamos personas comprometidas con el servicio, la innovación y
          la atención humana. Cuéntanos sobre tu experiencia y nos pondremos en contacto.
        </p>
      </div>

      <form className="careers-form">
        <fieldset>
          <legend>Información personal</legend>
          <div className="form-grid">
            <div className="form-field form-field-full">
              <label htmlFor="nombre-completo">Nombre completo <span aria-hidden="true">*</span></label>
              <input id="nombre-completo" name="nombre-completo" type="text" autoComplete="name" required />
            </div>

            <div className="form-field">
              <label htmlFor="tipo-documento">Tipo de documento <span aria-hidden="true">*</span></label>
              <select id="tipo-documento" name="tipo-documento" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                <option value="cc">Cédula de ciudadanía</option>
                <option value="ce">Cédula de extranjería</option>
                <option value="pasaporte">Pasaporte</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="numero-documento">Número de documento <span aria-hidden="true">*</span></label>
              <input
                id="numero-documento"
                name="numero-documento"
                type="text"
                inputMode="numeric"
                pattern="[0-9A-Za-z-]{5,20}"
                title="Usa entre 5 y 20 caracteres: números, letras o guiones."
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="correo">Correo electrónico <span aria-hidden="true">*</span></label>
              <input id="correo" name="correo" type="email" autoComplete="email" required />
            </div>

            <div className="form-field">
              <label htmlFor="telefono">Teléfono de contacto <span aria-hidden="true">*</span></label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                pattern="[0-9+() -]{7,20}"
                title="Ingresa un número válido de 7 a 20 caracteres."
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Perfil profesional</legend>
          <div className="form-field">
            <label htmlFor="perfil">Área de interés o perfil profesional <span aria-hidden="true">*</span></label>
            <select id="perfil" name="perfil" defaultValue="" required>
              <option value="" disabled>Selecciona un área</option>
              <option value="comercial">Comercial</option>
              <option value="logistica">Logística</option>
              <option value="administrativa">Administrativa</option>
              <option value="servicio-al-cliente">Servicio al cliente</option>
              <option value="tecnologia">Tecnología</option>
              <option value="otra">Otra área</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="hoja-vida">Hoja de vida <span aria-hidden="true">*</span></label>
            <input
              id="hoja-vida"
              name="hoja-vida"
              type="file"
              accept=".pdf,.doc,application/pdf,application/msword"
              aria-describedby="file-help"
              required
            />
            <small id="file-help">Formatos permitidos: PDF o DOC.</small>
          </div>

          <div className="form-field">
            <label htmlFor="mensaje">Breve presentación o mensaje <span aria-hidden="true">*</span></label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              minLength="20"
              maxLength="600"
              placeholder="Cuéntanos brevemente sobre tu experiencia y motivación."
              required
            />
          </div>
        </fieldset>

        <p className="required-note"><span aria-hidden="true">*</span> Campos obligatorios</p>
        <button className="submit-button" type="submit">Enviar postulación</button>
      </form>
    </section>
  );
}

export default Nosotros;
