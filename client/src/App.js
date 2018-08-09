import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import Navbar from "./Routes/Navbar"
import AdminPortal from "./Routes/AdminPortal";
import Search from "./Routes/Search";
import Home from "./Routes/Home";
import Results from "./Routes/Results"
import SearchBar from "./Routes/SearchBar.js"
import titleImg from "./images/showtuneDatabase.png"

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <div className="headerDiv">
          <img src={titleImg} id="ShoDatImg" alt="Showtunes Database"/>
          <Navbar />
          <SearchBar />
        </div>
        <div className="bodyDiv">
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/Search' component = { Search }/>
            <Route path='/results' component={ Results }/>
            <Route path='/AdminPortal' component={ AdminPortal }/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
