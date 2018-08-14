import React, { Component } from 'react';
import {connect} from "riddl-js"
import { Switch, Route} from 'react-router-dom';
import axios from "axios";
import Navbar from "./Routes/Navbar"
import AdminPortal from "./Routes/AdminPortal";
import AdvancedSearch from "./Routes/AdvancedSearch";
import Home from "./Routes/Home";
import Results from "./Routes/Results"
import SearchBar from "./Routes/SearchBar.js"
import titleImg from "./images/showtuneDatabase.png"
import songProfile from "./Routes/SongProfile"

class App extends Component {
  componentDidMount(){
    axios.get("/songs").then(response => {
        let allComposers = []
        let allLyricists = []
        let allMusicals = []
        let allVoices = []
        response.data.forEach(item => {
            item.Composer.forEach(composer => {
                return allComposers.includes(composer) ? null : allComposers.push(composer)
            })
            item.Lyricist.forEach(lyricist => {
               return allLyricists.includes(lyricist) ? null : allLyricists.push(lyricist)
            })
            return allVoices.includes(item.Voice) ? null : allVoices.push(item.Voice) && allMusicals.includes(item.Musical) ? null : allMusicals.push(item.Musical)  
        })
        this.props.setGlobalState({
            songData: response.data,
            composers: allComposers,
            lyricists: allLyricists,
            musicals: allMusicals,
            voices: allVoices
        })
    })
}
  render() {
    return (
      <div className="appWrapper">
        <img src={titleImg} id="ShoDatImg" alt="Showtunes Database"/>
        <SearchBar />
        <Navbar />
        <div className="headerDiv">
        </div>
        <div className="bodyDiv">
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path={`/AdvancedSearch`} component = { AdvancedSearch }/>
            <Route path='/AdminPortal' component={ AdminPortal }/>
            <Route path={`/results/:searchType/:searchTerm`} component={Results} />
            <Route path={`/songprofile/:searchTerm`} component={songProfile} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(App, state => state, {});
