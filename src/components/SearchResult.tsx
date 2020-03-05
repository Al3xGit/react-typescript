import React, { Component } from 'react'
import SearchService from '../services/SearchService'
import { Subscription } from 'rxjs'
import Todo from '../model/Todo'

interface SearchResultState { todos: Todo[] }
export default class SearchResult extends Component<{}, SearchResultState> {

  private searchService: SearchService = SearchService.getInstance()
  private subscription?: Subscription
  state = { todos: [] }

  componentDidMount() {
    this.subscription = this.searchService.subscribe({
      next: (todos: Todo[]) => this.setState({ todos })
    })
  }

  componentWillUnmount() {
    this.subscription?.unsubscribe()
  }

  render(): JSX.Element {
    const message: JSX.Element = (() => {
      if (this.state.todos.length > 0) {
        return <p>{this.state.todos.length} results found</p>
      } else {
        return <p>No messages found</p>
      }
    })()

    return (
      <div>
        <h2>Search Results : </h2>
        {message}
        <ul>
          {
            this.state.todos.map((todo: Todo) => <li key={todo.id}>{todo.title}</li>)
          }
        </ul>
      </div>
    )
  }

}