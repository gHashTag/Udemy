import React, { Component } from 'react'
import {
  Text,
  Button,
  StyleSheet,
  View
} from 'react-native'
import Sound from 'react-native-sound'
const S = Sound.MAIN_BUNDLE
const whoosh = new Sound('Tabla.wav', S)

class TimerThing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      on: false,
      time: 0,
      duration: 0
    }
    this.timerId = 0
    this.lastUpdateTime = 0
  }

  componentWillMount() {
    //this.startTimer()
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  updateDuration(seconds) {
    this.setState({duration: seconds})
  }

  update() {
    const {time} = this.state

    whoosh.getCurrentTime(this.updateDuration.bind(this))

    const now = Date.now()
    const delta = now - this.lastUpdateTime

    this.lastUpdateTime = now

    this.setState({
      time: time + delta
    })
  }

  startTimer() {
    whoosh.setNumberOfLoops(-1).play()
    console.log(whoosh._duration)
    console.log(whoosh)
    this.setState({on: true})
    this.lastUpdateTime = Date.now()
    this.timerId = setInterval(() => {
      this.update()
    }, 500)
  }

  setVolume() {
    whoosh.setVolume(0.3)
  }

  pauseTimer() {
    whoosh.stop()
    this.setState({on: false})
    this.clearTimer()
  }

  clearTimer() {
    clearInterval(this.timerId)
  }

  formatTime(time) {
    const secs = Math.floor(time / 1000)
    const s = secs % 60
    const m = Math.floor(secs / 60) % 60

    const ss = s < 10 ? `0${s}` : `${s}`
    const mm = m < 10 ? `0${m}` : `${m}`

    return `${mm}:${ss}`
  }

  onButtonPress() {
    this.state.on ? this.pauseTimer() : this.startTimer()
  }

  render() {
    const { on,duration } = this.state
    const time = this.formatTime(this.state.time)
    const title = on ? "Pause" : "Run"

    return(
      <View>
        <Text style={styles.timer}>{time}
        </Text>
        <Text style={styles.timer}>{duration}
        </Text>
        <Button title={title}
          onPress={this.onButtonPress.bind(this)}
        />
      </View>
    )
  }
}

export default TimerThing

const styles = StyleSheet.create({
  container: {

  },
  timer: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
