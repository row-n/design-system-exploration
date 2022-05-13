const fontFamilyFallback =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const tokens = {
  color: {
    default: '#4d4d4d',
    inverse: '#ffffff',
    primaryLight: '#f6e0a4',
    primary: '#ead297',
    primaryDark: '#dec489',
    secondaryLight: '#808080',
    secondary: '#4d4d4d',
    secondaryDark: '#333333',
    success: '#75B09C',
    info: '#406E8E',
    warning: '#FCD581',
    danger: '#D52941',
  },
  borderRadius: {
    none: '0',
    rounded: '.25rem',
    full: '99999rem',
  },
  space: {
    none: 0,
    xs: '.25rem',
    sm: '.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  fontFamily: {
    body: fontFamilyFallback,
    heading: `"Inter", ${fontFamilyFallback}`,
  },
  fontSize: {
    base: '18px',
    xxxl: '2.441rem',
    xxl: '1.953rem',
    xl: '1.563rem',
    lg: '1.25rem',
    md: '1rem',
    sm: '.8rem',
  },
  fontWeight: {
    regular: '400',
    bold: '600',
  },
};

export default tokens;
