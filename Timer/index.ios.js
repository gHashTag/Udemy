
import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import App from './components/app'

export default class example1 extends Component {
  render() {
    return <App />
  }
}

AppRegistry.registerComponent('example1', () => example1)
