import {StatusBarStyle, StyleProp, ViewStyle} from 'react-native';

export interface ScreenProps {
  isLoading: boolean;
  keyboardAware?: boolean;
  keyboardAwareScroll?: boolean;
  unsafeTop?: boolean;
  unsafeBottom?: boolean;
  children?: React.ReactNode;
  statusBarStyle?: StatusBarStyle;
  keyboardOffset?: number;
  style?: StyleProp<ViewStyle>;
}

export interface KeyboardAwareScreenProps extends ScreenProps {
  insetStyle: StyleProp<ViewStyle>;
}

export interface KeyboardAwareScrollScreenProps extends ScreenProps {
  insetStyle: StyleProp<ViewStyle>;
}

export interface BareScreenProps extends ScreenProps, ViewStyle {
  insetStyle: StyleProp<ViewStyle>;
}
