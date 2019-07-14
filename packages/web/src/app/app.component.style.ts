export const appStyle = {
  '@font-face': [
    {
      fontFamily: 'Roboto Condensed',
      fontStyle: 'normal',
      fontWeight: 400,
      src: 'local("Roboto Condensed Regular"), local("RobotoCondensed-Regular"), url("/assets/roboto-condensed-regular.woff2") format("woff2")',
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
    {
      fontFamily: 'Roboto Condensed',
      fontStyle: 'normal',
      fontWeight: 700,
      src: 'local("Roboto Condensed Bold"), local("RobotoCondensed-Bold"), url("/assets/roboto-condensed-bold.woff2") format("woff2")',
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  ],
  '@global': {
    a: {
      color: '#a43424',
      textDecoration: 'none',
    },
  },
  app: {
    font: '1em "Roboto", sans-serif',
    padding: '1rem',
    display: 'block',
  },
};
