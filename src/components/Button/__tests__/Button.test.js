import { render, screen } from '@testing-library/react';
import Button from '../Button';

const text = 'Button test';

test('renders Button', () => {
  render(<Button>{text}</Button>);
  const buttonElement = screen.getByText(text);
  expect(buttonElement).toBeInTheDocument();
});

test('renders a disabled Button', () => {
  render(<Button disabled>{text}</Button>);
  const buttonElement = screen.getByText(text);
  expect(buttonElement.closest('button')).toBeDisabled();
});
