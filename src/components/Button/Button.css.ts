import { style, styleVariants } from '@vanilla-extract/css';
import sprinkles from '../../tokens/sprinkles.css.ts';
import tokens from '../../tokens/tokens';

export const button = style({
  border: 'none',
  borderRadius: tokens.borderRadius.rounded,
  color: 'white',
  fontSize: tokens.fontSize.md,
  whiteSpace: 'nowrap',
});

export const state = styleVariants({
  enabled: {
    cursor: 'pointer',
  },
  disabled: {
    cursor: 'not-allowed',
    pointerEvents: 'all',
    opacity: '.5',
    filter: 'alpha(opacity=50)',
  },
});

export const size = styleVariants({
  small: {
    padding: '.3125rem .625rem',
  },
  medium: {
    padding: '.46875rem .9375rem',
  },
  large: {
    padding: '.625rem 1.25rem',
  },
});

export const variant = styleVariants({
  primary: [
    sprinkles({
      backgroundColor: 'primary',
    }),
    {
      ':hover': {},
      ':active': {},
    },
  ],
  secondary: [
    sprinkles({
      backgroundColor: 'secondary',
    }),
    {
      ':hover': {},
      ':active': {},
    },
  ],
});
