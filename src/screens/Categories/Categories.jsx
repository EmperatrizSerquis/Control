import {  FlatList, TouchableOpacity, Text, View } from 'react-native'
import { CategoryItem } from '../../components'
import React, { useEffect, useState } from 'react'
import paymentCategories from '../../data/paymentCategories'
import styles from './CategoriesStyle'


const Categories = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <View style={styles.action}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.paymentsButton} >
          <Text style={styles.textPayButton}>Home</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={paymentCategories}
          keyExtractor={category => category.title}
          renderItem={({ item }) => (
            <CategoryItem category={item}  navigation={navigation} />
          )}
        />
      </View>
      

    </View>
  )
}

export default Categories