import { PaletteOptions } from '@mui/material';

const contrastText = '#fff';

export const palette: PaletteOptions = {
  primary: {
    light: '#c4c5d6',
    main: '#716AC6',
    dark: '#2C2E3D',
    contrastText,
  },
  background: {
    default: '#F2F3F8',
  },
  common: {
    white: '#F0F0F0',
    black: '#000',
  },
  success: {
    main: '#34bfa3',
    contrastText,
  },
  error: {
    main: '#f4516c',
  },
  info: { main: '#5867dd' },

  warning: { main: '#ffb822', contrastText },
  text: {
    primary: '#575962',
  },
};
