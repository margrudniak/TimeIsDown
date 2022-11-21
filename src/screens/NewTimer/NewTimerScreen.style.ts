import {StyleSheet, ViewStyle} from 'react-native';
import {palette, spacing} from 'src/themes';

interface Style {
  screenWrapper: ViewStyle;
  viewWrapper: ViewStyle;
  buttonStyle: ViewStyle;
  inputWrapper: ViewStyle;
  inputStyle: ViewStyle;
  wrapperConfirm: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  screenWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    margin: spacing[4],
  },
  viewWrapper: {
    flex: 1,
  },
  buttonStyle: {
    alignSelf: 'flex-start',
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderWidth: 2,
    borderColor: palette.black,
    borderRadius: 2,
  },
  wrapperConfirm: {
    flex: 1,
  },
});

export default styles;
