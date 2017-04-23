import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import TitleBar from './title-bar'
import TimerThing from './timer'

const App = () => {
  return(
    <View style={styles.container}>
      <TimerThing />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ddd'
  },
  title: {
    fontSize: 36,
    color: '#f00',
    fontWeight: 'bold',
    marginTop: 20,
    flex: 1,
    margin: 5
  },
  box: {
    backgroundColor: '#f0f',
    flex: 1,
    margin: 5
  }
})
