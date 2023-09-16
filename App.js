import StackNavigator from './src/navigation/StackNavigator'
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'

const image = { uri: "https://eproweb.net/pictures/about_us_pics/1/blue-bin9VbG.jpg" };

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return (<ActivityIndicator size={"large"} />)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StackNavigator />
    </SafeAreaView>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
