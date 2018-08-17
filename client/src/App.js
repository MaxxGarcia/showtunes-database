import axios from "axios";
import { connect } from "riddl-js"
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
//ROUTES
import AdvancedSearch from "./Routes/AdvancedSearch";
import songProfile from "./Routes/SongProfile"
import AdminPortal from "./Routes/AdminPortal";
import SearchBar from "./Routes/SearchBar.js"
import Results from "./Routes/Results"
import Navbar from "./Routes/Navbar"
import Home from "./Routes/Home";
import Footer from "./Footer";
//IMAGES
import titleImg from "./images/showtuneDatabase.png"
import staff from './images/staff.png'

class App extends Component {
  componentDidMount() {
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
    }).catch(err => console.log(err))
    let songAxios = axios.create();
        songAxios.interceptors.request.use((config) => {
            const token = localStorage.getItem("token");
            config.headers.Authorization = `Bearer ${token}`;
            return config
        })
        this.props.setGlobalState({ songAxios })
    songAxios.get("/private/admin").then(response => {
      const { token, admin } = response.data
      localStorage.setItem("token", token)
      localStorage.setItem("admin", JSON.stringify(admin))
      this.props.setGlobalState({
        authenticate: {
          user: localStorage.admin,
          isAdmin: true,
          isAuthenticated: true
        }
      })
    })
  }
  render() {
    const { location: { pathname } } = this.props;
    return (
      <div className="appWrapper">
        <img src={titleImg} id="ShoDatImg" alt="Showtunes Database" />

        {pathname === "/" && (
          <div id="aboutDiv">
            <div id="aboutImgDiv">
              <img src={staff} id="staffImg" alt="staff" />
            </div>
            <div id="aboutTextDiv">
              <p id="aboutText">
                Looking for your next audition song?<br />
                The bran-new Showtune Database makes finding the perfect song easy.  Spend less time hunting for your song and more rehearsing!
                    </p>
            </div>
          </div>
        )}

        {pathname !== "/AdvancedSearch" && (
          <SearchBar />
        )}
        {pathname === "/" && (<Navbar />)}
        <div className="headerDiv">
        </div>
        <div className="bodyDiv">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path={`/AdvancedSearch`} component={AdvancedSearch} />
            <Route path='/AdminPortal' component={AdminPortal} />
            <Route path={`/results/:searchType/:searchTerm`} component={Results} />
            <Route path={`/songprofile/:searchTerm`} component={songProfile} />
          </Switch>
          {pathname !== "/" && (<Navbar />)}
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(App, state => state, {}));
