import React from 'react'
import CSS from 'csstype'

export default function Header() {

  const headerStyle: CSS.Properties = {
    width: '100%',
    backgroundColor: '#44B',
    padding: '10px'
  }

  const titleStyle: CSS.Properties = {
    textAlign: 'center',
    color: '#FFF'
  }

  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>React and Typescript</h1>
    </div>
  )
}