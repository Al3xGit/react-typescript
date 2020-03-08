import React, { Component } from "react";
import CSS from 'csstype'
import SearchBar from './SearchBar'
import Clock from "./Clock";
import SearchResult from "./SearchResult";

export default class Container extends Component {

  state = {
    searched: 'none'
  }

  render() {
    return (
      <div style={containerStyle}>
        <Clock />
        <SearchBar />
        <SearchResult />
      </div>
    )
  }
}

const containerStyle: CSS.Properties = {
  position: 'relative',
  display: 'block',
  maxWidth: '800px',
  margin: '0 auto',
  minHeight: '400px',
  padding: '20px',
  backgroundColor: '#99F',
  border: '2px #77D solid',
  borderTop: 'none'
}