import { Image, Text, TouchableOpacity } from 'react-native'
import styles from './PaymentItemStyle'

const PaymentItem = ({ payment, navigation, route }) => {
  return (
  
    <TouchableOpacity
      onPress={() => navigation.navigate('PaymentsDetail', { payment })}
      style={styles.container}
    >

        <Text style={styles.text}>{payment.title}</Text>
    </TouchableOpacity>
    
  )
}

export default PaymentItem