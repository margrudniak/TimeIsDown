import {StyleSheet, ViewStyle} from 'react-native';
import {color, spacing} from 'src/themes';

interface Style {
  wrapperElement: ViewStyle;
  wrapperText: ViewStyle;
  wrapperTimer: ViewStyle;
  wrapperButton: ViewStyle;
  buttonStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  wrapperElement: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.primary,
    backgroundColor: color.secondary,
    margin: spacing[2],
    padding: spacing[2],
  },
  wrapperText: {
    flex: 1,
  },
  wrapperTimer: {
    flexDirection: 'row',
  },
  wrapperButton: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    alignSelf: 'flex-end',
  },
});

export default styles;
