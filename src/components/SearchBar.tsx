import React, { Component, ChangeEvent } from "react";
import SearchService from '../services/SearchService'
import CSS from 'csstype'

interface SearchBarState {
  inputValue: string
}
export default class SearchBar extends Component<{}, SearchBarState> {

  state = { inputValue: '' }

  private searchService: SearchService = SearchService.getInstance()

  sendSearch = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value })
    this.searchService.searchFor(this.state.inputValue.trim())
  }

  render(): JSX.Element {
    const inputStyle: CSS.Properties = {
      display: 'block',
      width: '300px',
      margin: '0 auto'
    }

    return (
      <div>
        <input
          style={inputStyle}
          type="text"
          placeholder="type something"
          value={this.state.inputValue}
          onChange={this.sendSearch}
        />
      </div >
    )
  }
}