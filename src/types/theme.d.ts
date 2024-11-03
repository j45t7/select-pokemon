// theme.d.ts
import '@mui/material/styles'; // Required for MUI types

declare module '@mui/material/styles' {
  interface Palette {
    soft: {
      main: string; // Custom soft main color
      dark: string; // Custom soft dark color
    };
  }

  interface PaletteOptions {
    soft?: {
      main?: string; // Optional custom soft main color
      dark?: string; // Optional custom soft dark color
    };
  }
}
