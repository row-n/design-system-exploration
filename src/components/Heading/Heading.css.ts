import { styleVariants } from '@vanilla-extract/css';
import sprinkles from '../../tokens/sprinkles.css.ts';
import tokens from '../../tokens/tokens';

const level = styleVariants({
  1: [
    sprinkles({
      fontFamily: 'heading',
      fontWeight: 'bold',
    }),
    {
      fontSize: tokens.fontSize.xxxl,
    },
  ],
  2: [
    sprinkles({
      fontFamily: 'heading',
      fontWeight: 'bold',
    }),
    {
      fontSize: tokens.fontSize.xxl,
    },
  ],
  3: [
    sprinkles({
      fontFamily: 'heading',
      fontWeight: 'bold',
    }),
    {
      fontSize: tokens.fontSize.xl,
    },
  ],
  4: [
    sprinkles({
      fontFamily: 'heading',
    }),
    {
      fontSize: tokens.fontSize.lg,
    },
  ],
  5: [
    sprinkles({
      fontFamily: 'heading',
    }),
    {
      fontSize: tokens.fontSize.md,
    },
  ],
  6: [
    sprinkles({
      fontFamily: 'heading',
    }),
    {
      fontSize: tokens.fontSize.sm,
    },
  ],
});

export default level;
