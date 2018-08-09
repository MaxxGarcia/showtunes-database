const Showtunes = require("../models/songs");
const express = require("express");

const showtunesRoutes = express.Router();

showtunesRoutes.route("/")
    .get((req, res) => {
        Showtunes.find((err, songs) => {
            songs.map((song, i) => {
               updatedComposers = song.Composer[0].split(', ')
               song.Composer = updatedComposers
               updatedLyricists = song.Lyricist[0].split(", ")
               song.Lyricist = updatedLyricists
               return song
            })
            return err ? res.status(500).send(err) : res.status(200).send(songs)
        })
    })

showtunesRoutes.route("/:id")
    .get((req, res) => {
        Showtunes.findById(req.params.id, (err, foundSong) => {
            return err ? res.status(500).send(err) : res.status(200).send(foundSong);
        })
    })

module.exports = showtunesRoutes;