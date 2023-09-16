import { FlatList, TouchableOpacity, Text, View  } from 'react-native';
import { PaymentItem } from '../../components'
import React from 'react'
import payments from '../../data/payments'
import styles from './PaymentsStyle'

const Payments = ({ navigation, route }) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.action}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.categoriesButton} >
          <Text style={styles.textCatButton}>Home</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={payments}
          keyExtractor={payment => payment.title}
          renderItem={({ item }) => (
            <PaymentItem payment={item} navigation={navigation} />
          )}
        />
      </View>
      
    </View>
  )
}

export default Payments