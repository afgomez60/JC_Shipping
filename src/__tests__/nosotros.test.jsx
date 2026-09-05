import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Nosotros from '../components/pages/Nosotros.jsx';

describe('Componente Nosotros', () => {
  it('muestra la sección Trabaja con nosotros', () => {
    render(<Nosotros />);

    expect(screen.getByRole('heading', { name: 'Trabaja con nosotros' })).toBeInTheDocument();
  });

  it('muestra todos los campos obligatorios del formulario', () => {
    render(<Nosotros />);

    expect(screen.getByLabelText(/Nombre completo/)).toBeRequired();
    expect(screen.getByLabelText(/Tipo de documento/)).toBeRequired();
    expect(screen.getByLabelText(/Número de documento/)).toBeRequired();
    expect(screen.getByLabelText(/Correo electrónico/)).toBeRequired();
    expect(screen.getByLabelText(/Teléfono de contacto/)).toBeRequired();
    expect(screen.getByLabelText(/Área de interés/)).toBeRequired();
    expect(screen.getByLabelText(/Hoja de vida/)).toBeRequired();
    expect(screen.getByLabelText(/Breve presentación/)).toBeRequired();
  });

  it('restringe la hoja de vida a archivos PDF y DOC', () => {
    render(<Nosotros />);

    expect(screen.getByLabelText(/Hoja de vida/)).toHaveAttribute(
      'accept',
      '.pdf,.doc,application/pdf,application/msword',
    );
  });
});
