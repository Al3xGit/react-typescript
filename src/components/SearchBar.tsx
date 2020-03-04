import React, { Component, ChangeEvent, KeyboardEvent } from "react";

interface SearchBarProps { emitSearch: (search: string) => void }

interface SearchBarState { searchedText: string }

export default class SearchBar extends Component<SearchBarProps, SearchBarState> {

  state: SearchBarState = { searchedText: '' }

  search = () => {
    this.props.emitSearch(this.state.searchedText)
  }

  handleEnterDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.search()
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
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}