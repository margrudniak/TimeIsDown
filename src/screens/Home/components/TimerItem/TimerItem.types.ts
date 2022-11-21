import {TimerObjectType} from 'src/types';

export interface TimerItemProps extends TimerObjectType {
  activeElementId: string;
  onPressElement: (id: Date, title: string) => void;
  onPressedButton: (id: string) => void;
}
