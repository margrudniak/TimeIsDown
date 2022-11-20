import {TextProps as ReactNativeTextProps} from 'react-native';
import {TextStyleProps} from './Text.style';

export interface TextProps extends Omit<ReactNativeTextProps, 'color'> {
  text?: string | string[];
  textCategory: TextStyleProps;
  color?: string;
}
