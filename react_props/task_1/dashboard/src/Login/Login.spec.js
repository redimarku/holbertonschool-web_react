import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('Login renders without crashing', () => {
  render(<Login />);
});

test('Login includes 2 labels, 2 inputs, and 1 button', () => {
  const { container } = render(<Login />);
  expect(container.querySelectorAll('label')).toHaveLength(2);
  expect(container.querySelectorAll('input')).toHaveLength(2);
  expect(container.querySelectorAll('button')).toHaveLength(1);
});

test('inputs get focused when related label is clicked', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText('email');
  const passwordInput = screen.getByLabelText('password');

  userEvent.click(screen.getByText('email'));
  expect(emailInput).toHaveFocus();

  userEvent.click(screen.getByText('password'));
  expect(passwordInput).toHaveFocus();
});