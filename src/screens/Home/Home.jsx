import React from 'react';
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import styles from './HomeStyle'

const image = { uri: "https://eproweb.net/pictures/logos_pics/26/smallcolV2RM.jpg" };

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>To be in Control</Text>
      <Text style={styles.text}>of your Payments</Text>
      <Text style={styles.textContainer}>APP to remember Dues controlling your Bills !</Text>
      <View style={styles.action}>
      <Text> 
        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.categoriesButton} >
            <Text style={styles.textCatButton}>Categories</Text>
        </TouchableOpacity>
      </Text>
      <Text> 
        <TouchableOpacity onPress={() => navigation.navigate('Payments')} style={styles.paymentsButton} >
          <Text style={styles.textPayButton}>Payments</Text>
        </TouchableOpacity>
      </Text>
      </View>
    </ImageBackground>
   
  </View>
);

export default Home;