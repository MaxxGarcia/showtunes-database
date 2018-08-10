import React from 'react';
import ReactDOM from 'react-dom';
//ROUTER
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "riddl-js";
import App from './App';
//STYLESHEETS
import "./styles/stylesSmall.css";
import "./styles/stylesMid.css";
import "./styles/stylesBig.css";

const globalState = {
    songForm:{
        composers: "",
        lyricists: "",
        songName: "",
        voice: "",
        musical: "",
        clicked: 0
    },
    searchForm:{
        voice: '',
        composer: '',
        lyricist: '',
        show: ''
    },
    iframe: "",
    songData: [],
    composers: [],
    lyricists: [],
    musicals: [],
    voices: [],
}

ReactDOM.render(
    <Provider globalState={globalState}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
