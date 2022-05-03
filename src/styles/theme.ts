import { createTheme } from '@mui/material/styles';

import { palette } from '@styles/palette';

import { typography } from './typography';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});
