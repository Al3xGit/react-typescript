import React, { Component, createRef, useRef } from 'react'
import CSS from 'csstype'

interface ClockState { date: Date }

export default class Clock extends Component<{}, ClockState> {

  constructor(props: {}) {
    super(props)
    this.state = { date: new Date() }
    setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  render(): JSX.Element {
    return (
      <div style={clockStyle}>
        <p>il est {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }

}

const clockStyle: CSS.Properties = {
  float: 'right',
}