import { createTheme } from '@mui/material/styles';

// const mediaQueries = {
//   'xlg-width': '(max-width: 1366px)',
//   'lg-width': '(max-width: 1000px)',
//   'md-width': '(max-width: 800px)',
//   'xmd-width': '(max-width: 580px)',
//   'sm-width': '(max-width: 425px)',
//   'xsm-width': '(max-width: 375px)',
//   'xxsm-width': '(max-width: 320px)',
//   'md-height': '(max-height: 414px)',
//   'sm-height': '(max-height: 375px)',
//   'xsm-height': '(max-height: 320px)',
// }


const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920
    }
  },
  palette: {
    info: {
      light: '#FF9B62',
      main: '#F16718'
    },
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      light: '#E8EFF2',
      main: '#7B8BAD',
      dark: '#162542'
    },
    text: {
      primary: '#7B8BAD',
      secondary: '#162542',
    }
  },
  typography: {
    fontFamily: "Barlow",
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    h1: {
      fontWeight: 900,
      fontSize: "1rem",
      color: '#7B8BAD',
    },
    h2: {
      fontWeight: 900,
      fontSize: "2rem",
      color: '#162542',
    },
    h3: {
      fontWeight: 900,
      fontSize: "1.5rem",
      color: '#162542',
    },
    button: {
      fontWeight: 500,
      fontSize: "1rem",
    },
  },     
})

export default Theme;