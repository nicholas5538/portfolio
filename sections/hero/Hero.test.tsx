import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Hero from './Hero';

beforeAll(() => {
  window.IntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
});

it('should render hero section components', async () => {
  render(<Hero />);

  const link = screen.getByTestId('Linkedin');
  expect(link).toHaveAttribute('fill', 'currentColor');

  await waitFor(() => {
    expect(
      screen.getByRole('img', { name: /profile picture/i })
    ).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(
      screen.getByRole('heading', {
        name: /nothing excites me more than learning something new and starting a new adventure./i,
      })
    ).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
  });
});
