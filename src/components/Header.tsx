import React from 'react'
import CSS from 'csstype'

export default function Header(): JSX.Element {

  const headerStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '64px',
    backgroundColor: '#44B',
  }

  const titleStyle: CSS.Properties = {
    margin: '0px',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#FFF',
    fontSize: '32px',
  }

  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>React and Typescript</h1>
    </div>
  )
}