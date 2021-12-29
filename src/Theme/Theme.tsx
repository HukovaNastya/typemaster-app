import { createTheme } from '@mui/material/styles';


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
      lineHeight: 1.5,
      width: '380px',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      width: '255px',
    },
    h1: {
      fontWeight: 900,
      fontSize: "3.5rem",
      color: '#162542',
      width: '445px',
    },
    h2: {
      fontWeight: 900,
      fontSize: "2rem",
      color: '#ss',
      width: '255px'
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