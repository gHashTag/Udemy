import './ReactotronConfig';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
