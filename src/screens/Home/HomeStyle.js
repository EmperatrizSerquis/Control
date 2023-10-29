import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#0c494fa0',
    fontFamily: 'Light',
  },
  textContainer: {
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#7858F2',
    color: '#fff',
    borderColor: '#442BA6',
    borderRadius: 10,
    borderWidth: 3,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#9175FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 0,
  },
  action: {
    marginVertical: '10%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
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

  paymentsButton:{
    backgroundColor: colors.darkgreen,
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
textPayButton: {
  color: colors.secondary,
  fontSize: 30,
  fontFamily: 'Label',
},
})