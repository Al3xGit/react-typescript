import React, { Component, ChangeEvent, KeyboardEvent } from "react";
import SearchService from '../services/SearchService'

interface SearchBarState { searchedText: string }

export default class SearchBar extends Component<{}, SearchBarState> {

  state: SearchBarState = { searchedText: '' }

  private searchService: SearchService = SearchService.getInstance()

  sendSearch = () => {
    this.searchService.searchFor(this.state.searchedText)
  }

  handleEnterDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.sendSearch()
    }
  }

  changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchedText: e.currentTarget.value
    })
  }

  render(): JSX.Element {
    return (
      <div>
        <input
          type="text"
          placeholder="type something"
          value={this.state.searchedText}
          onChange={this.changeSearch}
          onKeyDown={this.handleEnterDown}
        />
        <button onClick={this.sendSearch}>Search</button>
      </div>
    )
  }
}