import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    borderBottomWidth: 2,
    borderEndColor: 'white',
    borderBlockColor: 'white',
  },
  text: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Label',
    color: colors.secondary,
  },
})