import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export default StyleSheet.create({
  containerAll: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceVariant,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 20,
    alignSelf: 'stretch',
    borderColor: 'red',
    height: 40,
    width: '100%',
    color: colors.grayVariant,
  },
  buttonCancel: {
    paddingLeft: 10,
  },
  textCancel: {
    fontSize: 16,
    color: colors.primarySolid,
  },
});
