import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

import breakpoints from './util/breakpoints';
import tokens from './tokens';

const colorAtomicProperties = defineProperties({
  properties: {
    backgroundColor: tokens.color,
    color: tokens.color,
  },
});

const borderAtomicProperties = defineProperties({
  properties: {
    borderRadius: tokens.borderRadius,
  },
});

const fontAtomicProperties = defineProperties({
  properties: {
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fontSize,
    fontWeight: tokens.fontWeight,
    whiteSpace: ['normal', 'nowrap'],
  },
});

const layoutAtomicProperties = defineProperties({
  properties: {
    zIndex: ['0', '50', '100'],
  },
});

const responsiveAtomicProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      '@media': `screen and (min-width: ${breakpoints.tablet}px)`,
    },
    desktop: {
      '@media': `screen and (min-width: ${breakpoints.desktop}px)`,
    },
    screen: {
      '@media': `screen and (min-width: ${breakpoints.screen}px)`,
    },
  },
  responsiveArray: ['mobile', 'tablet', 'desktop', 'screen'],
  defaultCondition: 'mobile',
  properties: {
    display: [
      'none',
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
    ],
    position: ['relative', 'absolute', 'fixed'],
    paddingTop: tokens.space,
    paddingBottom: tokens.space,
    paddingRight: tokens.space,
    paddingLeft: tokens.space,
    marginTop: tokens.space,
    marginBottom: tokens.space,
    marginRight: tokens.space,
    marginLeft: tokens.space,
    alignItems: ['flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'column'],
    flexWrap: ['wrap', 'nowrap'],
    flexShrink: [0],
    flexGrow: [0, 1],
    textAlign: ['left', 'center', 'right'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

export default createSprinkles(
  colorAtomicProperties,
  borderAtomicProperties,
  fontAtomicProperties,
  layoutAtomicProperties,
  responsiveAtomicProperties
);
