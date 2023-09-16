import { Image, Text, View, TouchableOpacity, Button } from 'react-native'
import React  from 'react'

import styles from './PaymentsDetailStyles'

const PaymentsDetail = ({ navigation, route }) => {
    const { payment } = route.params
  return (

      <View style={styles.container}>     
        <View style={styles.contentContainer}>
            <Image source={{uri: payment.picture}} style={styles.image}/>
            <Text style={styles.text}> {payment.title} </Text>
            <Text style={styles.description}> {payment.description} </Text>

            <View style={styles.action}>
                <TouchableOpacity onPress={() => navigation.navigate('Payments')} style={styles.paymentsButton} >
                <Text style={styles.textPayButton}>Payments</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    
  )
}

export default PaymentsDetail