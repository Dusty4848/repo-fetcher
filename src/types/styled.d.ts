// styled.d.ts
import 'styled-components';

type ThemePalette = {
  appBackground: string;
  black: string;
  white: string;
  primary: ColorVariation;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  alert: string;
};

type ColorVariation = {
  main: string;
  light: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: ThemePalette;
    borderRadius: string;
    borderColor: string;
  }
}
