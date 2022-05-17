import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import sprinkles from '../../tokens/sprinkles.css.ts';

export const button = recipe({
  base: [
    sprinkles({
      borderRadius: 'rounded',
      fontSize: 'md',
    }),
    {
      border: 'none',
      color: 'white',
      whiteSpace: 'nowrap',
    },
  ],

  variants: {
    color: {
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
    },
  },

  defaultVariants: {
    color: 'primary',
  },
});

// export const button = style({
//   border: 'none',
//   borderRadius: tokens.borderRadius.rounded,
//   color: 'white',
//   fontSize: tokens.fontSize.md,
//   whiteSpace: 'nowrap',
// });

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

// export const variant = styleVariants({
//   primary: [
//     sprinkles({
//       backgroundColor: 'primary',
//     }),
//     {
//       ':hover': {},
//       ':active': {},
//     },
//   ],
//   secondary: [
//     sprinkles({
//       backgroundColor: 'secondary',
//     }),
//     {
//       ':hover': {},
//       ':active': {},
//     },
//   ],
// });
