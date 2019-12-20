import React from 'react'

export default function SearchResult({issues}) {
  const list = issues.map(issue => (
    <li 
      key={issue.error.substring(0, 7)} 
      // onClick={window.location = issue.page}
    >
      {issue.error}
    </li>
  ));

  return (
    <ul>
      {list}
    </ul>
  )
}
