import {TouchableOpacityProps} from 'react-native';
import {TextProps} from '../Text/Text.types';
import {ButtonViewProps} from './Button.style';

export interface ButtonProps
  extends Partial<TextProps>,
    Omit<TouchableOpacityProps, 'style'> {
  children?: React.ReactNode;
  text?: string | string[];
  category: ButtonViewProps;
}
