import Reactotron from 'reactotron-react-native';
import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

export default class AlbumList extends Component {
  state = {
    albums: []
  };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    Reactotron.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  // viewStyle: {
  //   backgroundColor: 'gold',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 60,
  //   paddingTop: 15,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.2,
  //   elevation: 2,
  //   position: 'relative',
  // },
  textStyle: {
    fontSize: 20,
  },
});
