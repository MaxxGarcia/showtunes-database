import React from 'react';
import ReactDOM from 'react-dom';
//ROUTER
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "riddl-js";
import App from './App';
//STYLESHEETS
import "./styles/stylesBig.css";
import "./styles/stylesMid.css";
import "./styles/stylesSmall.css";
import "./styles/ads.css";
import "./styles/footer.css";

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
    iframeS: "",
    iframeY: "",
    songData: [],
    composers: [],
    lyricists: [],
    musicals: [],
    voices: [],
    queryObject: {},
    userInfo:{
        username: '',
        password: ''
    },
    authenticate:{
        username: "",
        isAdmin: false,
        isAuthenticated: false
    },
    songAxios: "",
    authErrCode: {
        signup: "",
        login: ""
    }
}

ReactDOM.render(
    <Provider globalState={globalState}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
