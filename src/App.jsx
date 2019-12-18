import React from 'react';
import './App.css';
import Search from './Search';

function App() {
  const issues = [
    {page: 'DatabaseConnection',
    error: "Issue#1: Database Connectivity Failure"},
    {page: 'BadFetchReruest',
    error: "Issue#2: RestAPI call made and couldn't fetch any data"},
    {page: 'Unauthorized',
    error:"Issue#3: External API call authorization failed"},
    {page: 'ServerDown',
    error: "Issue#4: Database servers are down"},
    {page: 'UIRender',
    error: "Issue#5: UI rendering error"}
  ]
  return (
    <div className="App">
      <Search issues={issues}/>
    </div>
  );
}

export default App;
