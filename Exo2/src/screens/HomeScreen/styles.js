import { StyleSheet } from 'react-native';
import { COLORS, METRICS } from '../../utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: METRICS.spacing.medium,
  },
  title: {
    fontSize: METRICS.fontSize.xlarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: METRICS.spacing.large,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: METRICS.spacing.medium,
    paddingHorizontal: METRICS.spacing.large,
    borderRadius: METRICS.borderRadius.medium,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: METRICS.fontSize.medium,
    fontWeight: 'bold',
  },
});
