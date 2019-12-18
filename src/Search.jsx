import React, { Component } from 'react';

export class Search extends Component {
  constructor() {
    super()
    this.state = {
      matchingIssues: []
    }
  }
  
  render() {
    return (
      <div className='search'>
        <h1>React Demo</h1>
        <h3>Start typing to search issues!</h3>
      </div>
    )
  }
}

export default Search
