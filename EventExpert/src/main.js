//https://www.eventbriteapi.com/v3/users/me/?token=SESXYS4X3FJ5LHZRWGKQ
// @flow

import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import Geocoder from 'react-native-geocoder'

const API_KEY = 'Bearer SZRBEN2CGEUPT57YVMXP'
const ROOT_URL = 'https://www.eventbriteapi.com/v3/events/search/'

module.exports = React.createClass({
  componentDidMount() {
    this.searchEvents('hackathon', 'San Francisco')
  },

  searchEvents(category, city) {
    Geocoder.geocodeAddress(city).then(res => {
      console.log('res', res)
      const position = res[0].position
      const locationStr = `&location.latitude=${position.lat}&location.longitude=${position.lng}`
      const FETCH_URL = `${ROOT_URL}?q=${category}${locationStr}`

      fetch(FETCH_URL, {
        method: 'GET',
        headers: {
          Authorization: API_KEY
        }
      })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log('responseJSON', responseJSON)
      })
    })
  },

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Event Expert
        </Text>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
