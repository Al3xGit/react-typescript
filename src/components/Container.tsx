import React, { Component } from "react";
import CSS from 'csstype'
import SearchBar from './SearchBar'
import Clock from "./Clock";

export default class Container extends Component {


  render() {
    return (
      <div style={containerStyle}>
        <Clock />
        <SearchBar defaultText='type something' />
      </div>
    )
  }
}

const containerStyle: CSS.Properties = {
  maxWidth: '1000px',
  margin: 'auto',
  marginTop: 0,
  height: '100%',
  padding: '20px',
  backgroundColor: '#CCC',
}