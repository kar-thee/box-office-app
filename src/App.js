import React from 'react';
import {Route,Switch} from "react-router-dom"

import Home from "./pages/Home"
import Starred from "./pages/Starred"
import NotFound from './pages/NotFound';

import './App.css';


function App() {
  console.log("App.js")
  return (
    <>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/starred'>
        <Starred/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
