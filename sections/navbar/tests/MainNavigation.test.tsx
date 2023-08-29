import React from 'react';
import MainNavigation from '../MainNavigation';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { logRoles } from '@testing-library/dom';

it('Navbar is rendered with applicable elements', async () => {
  render(<MainNavigation />);
  expect(
    await screen.findByRole('heading', { name: /nicholas/i })
  ).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')[0]).toBeInTheDocument();
});

it('Dark mode switch toggling', async () => {
  const user = userEvent.setup();
  render(<MainNavigation />);

  const darkModeSwitch = screen.getByTestId('darkModeSwitch');
  const sunMoon = screen.getByTestId('sun-moon');
  await waitFor(() => {
    expect(darkModeSwitch).toBeInTheDocument();
    expect(sunMoon).toBeInTheDocument();
  });
  expect(sunMoon).toHaveAttribute('aria-pressed', 'false');
  expect(sunMoon).toHaveAttribute('data-state', 'off');

  await waitFor(() => {
    user.click(sunMoon);
    expect(sunMoon).toHaveAttribute('aria-pressed', 'true');
    expect(sunMoon).toHaveAttribute('data-state', 'on');
  });
});
