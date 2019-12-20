import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Search from './Search';
import DatabaseConnection from './Errors/DatabaseConnection';
import BadFetchReruest from './Errors/BadFetchRequest';
import Unauthorized from './Errors/Unauthorized';
import ServerDown from './Errors/ServerDown';
import UIRender from './Errors/UIRender';

function App() {
  const issues = [
    {page: 'DatabaseConnection',
    error: "Issue#1: Database Connectivity Failure"},
    {page: 'BadFetchRequest',
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
      <Switch>
        <Route exact path='/' component={() => <Search issues={issues}/>}/>
        <Route exact path='/DatabaseConnection' component={DatabaseConnection}/>
        <Route exact path='/BadFetchRequest' component={BadFetchReruest}/>
        <Route exact path='/Unauthorized' component={Unauthorized}/>
        <Route exact path='/ServerDown' component={ServerDown}/>
        <Route exact path='/UIRender' component={UIRender}/>
      </Switch>
    </div>
  );
}

export default App;
