import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5fa',
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  action: {
    marginVertical: 35,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  textCatButton: {
    color: colors.darkgreen,
    fontSize: 30,
    fontFamily: 'Label',
  },
  categoriesButton:{
      backgroundColor: colors.secondary,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 35,
      paddingVertical: 15,
      shadowColor: colors.white,
      shadowOffset: { height: 5, width: 3 },
      elevation: 10,
      shadowOpacity: 1,
      shadowRadius: 1,

    
  },
})