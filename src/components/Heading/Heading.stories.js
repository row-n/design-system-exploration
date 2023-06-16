import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    level: { options: [1, 2, 3, 4, 5, 6], control: { type: 'radio' } },
  },
};

export const One = {
  args: {
    children: 'Heading one',
    level: 1,
  },
};

export const Two = {
  args: {
    children: 'Heading two',
    level: 2,
  },
};

export const Three = {
  args: {
    children: 'Heading three',
    level: 3,
  },
};

export const Four = {
  args: {
    children: 'Heading four',
    level: 4,
  },
};

export const Five = {
  args: {
    children: 'Heading five',
    level: 5,
  },
};

export const Six = {
  args: {
    children: 'Heading six',
    level: 6,
  },
};
