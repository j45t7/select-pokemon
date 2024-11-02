"use client"
import { IBM_VGA_FONT } from '@/fonts';
import '../app/globals.css';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9B51E0',
      dark: '#7135BF',
    },
    soft: {
      main: "#EEEEEE",
      dark: '#E4E4E4'
    },
  },
  typography: {
    fontFamily: IBM_VGA_FONT.style.fontFamily,
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          disableRipple: true,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#2A2A2A",
          "&.Mui-focused": {
            color: "#2A2A2A"
          },
          "&.Mui-error": {
            color: "#2A2A2A"
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginLeft: "14px"
        }
      }
    }
  }
});


export default theme;
