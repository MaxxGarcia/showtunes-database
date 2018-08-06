import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "riddl-js";

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
        song: ""
    },
    iframe: ""
}

ReactDOM.render(
    <Provider globalState={globalState}>
        <App />
    </Provider>, document.getElementById('root'));
