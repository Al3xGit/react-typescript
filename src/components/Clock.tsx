import React, { Component } from 'react'
import CSS from 'csstype'

export default class Clock extends Component {

  render(): JSX.Element {
    return (
      <div style={clockStyle}>
        <p>clock</p>
      </div>
    )
  }
}

const clockStyle: CSS.Properties = {
  float: 'right',
}