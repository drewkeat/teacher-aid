import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#4f8b9b',
    },
    secondary: {
      main: '#5E6DAA',
    },
    error: {
      main: '#f44336',
    },
    sixth: {
      main: '#D9D9D9',
    },
    seventh: {
      main: '#FFE599',
    },
    eighth: {
      main: '#B7D7A8',
    },
    hsfund: {
      main: '#A4C2F4',
    },
    hsadv: {
      main: '#B4A7D6',
    },
    hspro: {
      main: '#EA9999',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Raleway',
    h1: {
      fontFamily: 'Cinzel',
    },
    h2: {
      fontFamily: 'Cinzel',
    },
    h3: {
      fontFamily: 'Cinzel',
    },
    h4: {
      fontFamily: 'Cinzel',
    },
    h5: {
      fontFamily: 'Cinzel',
    },
    body1: {
      fontFamily: 'Raleway',
    },
  },
};

const theme = createTheme(themeOptions)

export default function DefaultTheme({children}) {
  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}