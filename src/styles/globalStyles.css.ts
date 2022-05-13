import { globalStyle, globalFontFace } from '@vanilla-extract/css';
import tokens from '../tokens/tokens';

globalFontFace('Inter', {
  src: 'local("./assets/fonts/Inter-Regular.ttf") format("truetype")',
  fontWeight: 'normal',
  fontStyle: 'normal',
});

globalFontFace('Inter', {
  src: 'local("./assets/fonts/Inter-Medium.ttf") format("truetype")',
  fontWeight: '500',
  fontStyle: 'normal',
});

globalFontFace('Inter', {
  src: 'local("./assets/fonts/Inter-SemiBold.ttf") format("truetype")',
  fontWeight: '600',
  fontStyle: 'normal',
});

globalFontFace('Inter', {
  src: 'local("./assets/fonts/Inter-Bold.ttf") format("truetype")',
  fontWeight: '700',
  fontStyle: 'normal',
});

globalStyle('html, body', {
  fontFamily: tokens.fontFamily.body,
  fontSize: tokens.fontSize.base,
  margin: 0,
});
