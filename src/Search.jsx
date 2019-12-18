import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div className='search'>
        <h1>React Demo</h1>
        <h3>Start typing to search issues!</h3>
        <input type="search" name="search" id="search"/>
      </div>
    )
  }
}

export default Search
