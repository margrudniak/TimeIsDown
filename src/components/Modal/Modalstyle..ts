import {StyleSheet, ViewStyle} from 'react-native';
import {palette, spacing} from 'src/themes';

interface Style {
  modalBackground: ViewStyle;
  contentWrapper: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: palette.stratos,
  },
  contentWrapper: {
    padding: spacing[5],
    backgroundColor: palette.white,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
