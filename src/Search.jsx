import React, { Component } from 'react';

export class Search extends Component {
  constructor() {
    super()
    this.state = {
      matchingIssues: []
    }
  }

  filterList = (e) => {
    let items = this.props.issues;
    items = items.filter((item) => {
      return item.error.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    if(e.target.value){
      this.setState({matchingIssues: items});
    } else {this.setState({matchingIssues: []})}
  }

  render() {
    return (
      <form className='search'>
        <h1>React Demo</h1>
        <h3>Start typing to search issues!</h3>
        <input type="search" onChange={this.filterList}/>
      </form>
    )
  }
}

export default Search
