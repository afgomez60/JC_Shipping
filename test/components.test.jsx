import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Inicio from '../src/components/pages/Inicio.jsx';
import Nosotros from '../src/components/pages/Nosotros.jsx';
import Servicios from '../src/components/pages/Servicios.jsx';

describe('Inicio', () => {
  it('muestra el mensaje principal y la información logística', () => {
    render(<Inicio />);

    expect(screen.getByRole('heading', { name: 'Tu aliado estratégico en Asia' })).toBeInTheDocument();
    expect(screen.getByText(/Simplificamos el proceso de compras internacionales/)).toBeInTheDocument();
    expect(screen.getByText(/Nos encargamos de toda la cadena logística/)).toBeInTheDocument();
  });
});

describe('Servicios', () => {
  it('muestra los cuatro servicios ofrecidos', () => {
    render(<Servicios />);

    expect(screen.getByRole('heading', { name: 'Nuestros Servicios' })).toBeInTheDocument();
    expect(screen.getByText(/Flete marítimo y aéreo/)).toBeInTheDocument();
    expect(screen.getByText(/Gestión de compras/)).toBeInTheDocument();
    expect(screen.getByText(/Trámites aduaneros/)).toBeInTheDocument();
    expect(screen.getByText(/Bodegaje en China/)).toBeInTheDocument();
  });
});

describe('Nosotros - Trabaja con nosotros', () => {
  it('muestra todos los campos obligatorios del formulario', () => {
    render(<Nosotros />);

    expect(screen.getByRole('heading', { name: 'Trabaja con nosotros' })).toBeInTheDocument();
    expect(screen.getByLabelText(/Nombre completo/)).toBeRequired();
    expect(screen.getByLabelText(/Tipo de documento/)).toBeRequired();
    expect(screen.getByLabelText(/Número de documento/)).toBeRequired();
    expect(screen.getByLabelText(/Correo electrónico/)).toBeRequired();
    expect(screen.getByLabelText(/Teléfono de contacto/)).toBeRequired();
    expect(screen.getByLabelText(/Área de interés/)).toBeRequired();
    expect(screen.getByLabelText(/Hoja de vida/)).toBeRequired();
    expect(screen.getByLabelText(/Breve presentación/)).toBeRequired();
  });

  it('acepta únicamente archivos PDF o DOC en la hoja de vida', () => {
    render(<Nosotros />);

    expect(screen.getByLabelText(/Hoja de vida/)).toHaveAttribute(
      'accept',
      '.pdf,.doc,application/pdf,application/msword',
    );
  });

  it('mantiene el formulario inválido cuando está vacío', () => {
    render(<Nosotros />);

    expect(screen.getByRole('button', { name: 'Enviar postulación' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enviar postulación' }).form.checkValidity()).toBe(false);
  });
});
