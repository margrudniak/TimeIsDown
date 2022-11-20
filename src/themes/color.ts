import {palette} from './palette';

export const color = {
  palette,
  transparent: 'rgba(0, 0, 0, 0)',
  background: palette.tundora,
  tertiary: palette.tundora,
  text: palette.white,
  icon: palette.white,
  error: palette.mandy,
};

export type ColorTypes = keyof typeof color;
