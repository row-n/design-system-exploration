import { render, screen } from '@testing-library/react';
import Heading from '../Heading';

const text = 'Heading test';

test('renders Heading', () => {
  render(<Heading>{text}</Heading>);
  const headingElement = screen.getByText(text);
  expect(headingElement).toBeInTheDocument();
});
