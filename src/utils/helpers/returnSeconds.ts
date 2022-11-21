import {TimeType} from 'src/types';

export const returnSeconds = ({hours, minutes, seconds}: TimeType) =>
  hours * 60 * 60 + minutes * 60 + seconds;
