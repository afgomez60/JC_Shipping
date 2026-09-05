import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Servicios from '../components/pages/Servicios.jsx';

describe('Componente Servicios', () => {
  it('muestra el título de servicios', () => {
    render(<Servicios />);

    expect(screen.getByRole('heading', { name: 'Nuestros Servicios' })).toBeInTheDocument();
  });

  it('muestra las cuatro soluciones de importación', () => {
    render(<Servicios />);

    expect(screen.getByText(/Flete marítimo y aéreo/)).toBeInTheDocument();
    expect(screen.getByText(/Gestión de compras/)).toBeInTheDocument();
    expect(screen.getByText(/Trámites aduaneros/)).toBeInTheDocument();
    expect(screen.getByText(/Bodegaje en China/)).toBeInTheDocument();
  });
});
