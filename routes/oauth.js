const express = require("express");
const axios = require("axios");

const oauthRoutes = express.Router();

var client_id = "0072e6df1c54421c8b33efca637ad1ec"

let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + process.env.SPOTIFY_SECRET).toString('base64')),
    },
    method:"POST",
    params: {
        grant_type: 'client_credentials'
    }
}

oauthRoutes.get("/", (req, res) => {
    axios(authOptions)
        .then(response =>{
            res.send(response.data)
        })
        .catch(err => console.log(err))
})

module.exports = oauthRoutes;
