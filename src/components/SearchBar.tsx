import React, { Component } from "react";

type SearchBarProps = { defaultText: string }

export default class SearchBar extends Component<SearchBarProps> {

  search(e: any) {
    console.log(e);
  }

  render(): JSX.Element {
    return (
      <div>
        <input type="text" placeholder={this.props.defaultText} />
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}