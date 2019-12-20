import React from 'react';
import { Link } from "react-router-dom";

export default function SearchResult(props) {
  const list = props.issues.map(issue => (
    <li 
      key={issue.error.substring(0, 7)} 
    >
      <Link to={`/${issue.page}`}>
        <button>{issue.error}</button>
      </Link>
    </li>
  ));

  return (
    <ul>
      {list}
    </ul>
  )
}
