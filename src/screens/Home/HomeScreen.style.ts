import {StyleSheet, ViewStyle} from 'react-native';
import {spacing} from 'src/themes';

interface Style {
  screenContainer: ViewStyle;
  emptyContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  screenContainer: {
    flex: 1,
    marginVertical: spacing[5],
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
