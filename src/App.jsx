import React from 'react';
import './App.css';
import Search from './Search';

function App() {
  const issues = [
    "Issue#1: Database Connectivity Failure",
    "Issue#2: RestAPI call made and couldn't fetch any data",
    "Issue#3: External API call authorization failed",
    "Issue#4: Database servers are down",
    "Issue#5: UI rendering error"
  ]
  return (
    <div className="App">
      <Search issues={issues}/>
    </div>
  );
}

export default App;
