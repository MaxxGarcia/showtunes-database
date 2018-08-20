const express = require("express");
const axios = require("axios");
const youtubeRoutes = express.Router();

var API_KEY = "***REMOVED***"



youtubeRoutes.post("/", (req, res) => {
    let authOptions = {
        url: `https://www.googleapis.com/youtube/v3/search`,
        method: "GET",
        params: {
            key: API_KEY,
            maxResults: 1,
            part: "snippet",
            q: req.body.q
        }
    }
    axios(authOptions)
        .then(response => {
            res.send(response.data.items[0].id.videoId)
        })
        .catch(err => console.log(err))
})
module.exports = youtubeRoutes;
