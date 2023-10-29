import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import  { Home, Categories, Payments, CategoriesDetail, PaymentsDetail }  from '../screens'
import  { Header }  from '../components'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function StackNavigator() {
  return (
    
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
            headerShown: true, 
            header: () => (
            <View>
                <Header title={route.name === "Home" ? 'CONTROL APP' : 'QUE PAGAMOS HOY?'} />
            </View>
        )
      })}
      >
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Categories" component={Categories} 
         options={{ headerRight: () => (
              <Button
                onPress={() => navigation.goBack()}
                title="GO BACK"
                color="#ffffff"
              />
            ), }}
            />

        <Stack.Screen name="CategoriesDetail" component={CategoriesDetail} 
        options={{ headerRight: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                    <Text style={{color: 'red', fontSize: 30}}>Go Back</Text>
                </TouchableOpacity>
            ),  }}   
            />
            
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="PaymentsDetail" component={PaymentsDetail} />
        
      </Stack.Navigator>
    
  )
}

export default StackNavigator

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
  },

  button: {
      backgroundColor: '#2196f3',
      padding: 20,
      borderRadius: 5,
      marginVertical: 10,
      justifyContent: "center",
      alignItems: "center",
  },
  textButton: {
      color: "white",
      fontSize: 20,
      textAlign: 'center'
  }
})


