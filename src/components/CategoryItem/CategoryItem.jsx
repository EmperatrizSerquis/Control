import { Image, Text, TouchableOpacity } from 'react-native'
import styles from './CategoyItemStyle'

const CategoryItem = ({ category, navigation, route }) => {
  return (
  
    <TouchableOpacity
      onPress={() => navigation.navigate('CategoriesDetail', { category })}
      style={styles.container}
    >
        <Image style={styles.image} source={{ uri: category.picture }} />
        <Text style={styles.text}>{category.title}</Text>
    </TouchableOpacity>
    
  )
}

export default CategoryItem