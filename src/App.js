import React from 'react';
import {Route,Switch} from "react-router-dom"

import Home from "./pages/Home"
import Starred from "./pages/Starred"
import NotFound from './pages/NotFound';

import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Navigation/>

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
