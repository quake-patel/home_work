import React from 'react';
import './App.css';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Create from './create';
import Blogs from './blogs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
         <Switch>
           <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create.js">
              <Create/>
            </Route>
            <Route exact path={"/blogs/:id"}>
              <Blogs/>
            </Route>
          </Switch>
        </div>
    </Router>
  )
}

export default App;
