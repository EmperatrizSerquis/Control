import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import  { Home, Categories, Payments, CategoriesDetail, PaymentsDetail }  from '../screens'
import  { Header }  from '../components'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function StackNavigator() {
  return (
    <NavigationContainer>
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
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Text style={{color: 'red', fontSize: 30}}>Go Back</Text>
                </TouchableOpacity>
            ),  }}   
            />
            
        <Stack.Screen name="Payments" component={Payments} /* options={{ headerRight: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Text style={{color: 'red', fontSize: 30}}>Go Back</Text>
                </TouchableOpacity>
            ),  }} */    
            />
          <Stack.Screen name="PaymentsDetail" component={PaymentsDetail} 
          /* options={{ headerRight: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Text style={{color: 'red', fontSize: 30}}>Go Back</Text>
                </TouchableOpacity>
            ),  }}  */  />
        
      </Stack.Navigator>
    </NavigationContainer>
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
      marginTop: 20,
  },
  textButton: {
      color: "white",
      fontSize: 20,
      textAlign: 'center'
  }
})


