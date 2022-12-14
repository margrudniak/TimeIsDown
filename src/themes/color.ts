import {palette} from './palette';

export const color = {
  palette,
  transparent: 'rgba(0, 0, 0, 0)',
  background: palette.tundora,
  primary: palette.cornflowerBlue,
  secondary: palette.amour,
  tertiary: palette.tundora,
  text: palette.black,
  icon: palette.white,
  error: palette.mandy,
};

export type ColorTypes = keyof typeof color;
