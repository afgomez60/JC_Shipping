import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Inicio from '../components/pages/Inicio.jsx';

describe('Componente Inicio', () => {
  it('muestra el título principal', () => {
    render(<Inicio />);

    expect(screen.getByRole('heading', { name: 'Tu aliado estratégico en Asia' })).toBeInTheDocument();
  });

  it('muestra la información sobre importaciones y logística', () => {
    render(<Inicio />);

    expect(screen.getByText(/Simplificamos el proceso de compras internacionales/)).toBeInTheDocument();
    expect(screen.getByText(/Nos encargamos de toda la cadena logística/)).toBeInTheDocument();
  });
});
