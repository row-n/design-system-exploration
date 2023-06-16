import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { options: ['small', 'medium', 'large'], control: { type: 'radio' } },
    variant: { options: ['primary', 'secondary'], control: { type: 'radio' } },
  },
};

export const Primary = {
  args: {
    children: 'Button Primary',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Button Secondary',
    variant: 'secondary',
  },
};

export const Large = {
  args: {
    children: 'Button Large',
    size: 'large',
  },
};

export const Small = {
  args: {
    children: 'Button Small',
    size: 'small',
  },
};
