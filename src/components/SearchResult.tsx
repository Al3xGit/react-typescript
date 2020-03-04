import React, { Component } from 'react'

type SearchResultProps = { searchedString: string }

export default class SearchResult extends Component<SearchResultProps> {

  render(): JSX.Element {
    return <p>you searched for : {this.props.searchedString}</p>
  }

}