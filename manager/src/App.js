import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyB-72ZjpljmN5ooqC7BMimKIFpGvsSIY-o',
      authDomain: 'manager-f59c3.firebaseapp.com',
      databaseURL: 'https://manager-f59c3.firebaseio.com',
      storageBucket: 'manager-f59c3.appspot.com',
      messagingSenderId: '788879091173',
    }
    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
