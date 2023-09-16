import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Title',
    alignSelf: 'center',
    paddingVertical: '8%',
    color: colors.white,
  },
})