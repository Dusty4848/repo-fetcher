import { DefaultTheme } from 'styled-components';
import { BLACK, GRAY_LIGHT, ORANGE, ORANGE_LIGHT, RED, WHITE } from './constants';

export const theme: DefaultTheme = {
  palette: {
    appBackground: GRAY_LIGHT,
    alert: RED,
    black: BLACK,
    white: WHITE,
    primary: {
      main: ORANGE,
      light: ORANGE_LIGHT,
    },
    secondary: 'initial',
    textPrimary: BLACK,
    textSecondary: GRAY_LIGHT,
  },
  borderRadius: '4px',
  borderColor: 'rgba(0, 0, 0, 0.23)',
};
