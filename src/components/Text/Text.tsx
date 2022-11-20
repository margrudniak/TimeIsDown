import React from 'react';
import {Text as ReactNativeText} from 'react-native';
import styles from './Text.style';
import {TextProps} from './Text.types';

export const Text = ({
  text = '',
  textCategory,
  color,
  style,
  ...props
}: TextProps) => {
  const textColor = color ? {color} : {};

  const textStyle = styles[textCategory] || styles.default;

  const concatanedStyle = [textStyle, textColor, style];

  return (
    <ReactNativeText {...props} style={concatanedStyle}>
      {text}
    </ReactNativeText>
  );
};
