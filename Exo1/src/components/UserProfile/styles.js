import { StyleSheet, Platform } from 'react-native';
import { COLORS, METRICS } from '../../utils/constants';

export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: METRICS.borderRadius.medium,
    padding: METRICS.padding.large,
    margin: METRICS.padding.medium,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  infoContainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  likesText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});