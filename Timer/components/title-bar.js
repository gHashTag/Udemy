import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

const TitleBar = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default TitleBar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    backgroundColor: '#555'
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ddd',
    textAlign: 'center'
  }
})
