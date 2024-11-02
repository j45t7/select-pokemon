"use client"

import '@mui/material/styles/createPalette';

// Extend the Palette and PaletteOptions interfaces
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    soft: Palette['primary'];
  }
  interface PaletteOptions {
    soft: PaletteOptions['primary'];
  }
}

