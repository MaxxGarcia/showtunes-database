const Showtunes = require("../models/songs");
const express = require("express");

const showtunesRoutes = express.Router();

showtunesRoutes.route("/")
    .get((req, res) => {
        Showtunes.find((err, songs) => {
            return err ? res.status(500).send(err) : res.status(200).send(songs)
        })
    })
    //This block can be used to update songs to a correct format if something is wrong with them. 
    // .put((req, res) => {
    //     Showtunes.find()
    //         .exec((err, songs) => {
    //             if (err) return res.status(500).send(err);
    //             Promise.all(songs.map(song => {
    //                 song.Composer = song.Composer[0].split(', ');
    //                 song.Lyricist = song.Lyricist[0].split(", ");
    //                 return song.save();
    //             }))
    //                 .then(updatedSongs => {
    //                     res.status(200).send(updatedSongs)
    //                 })
    //                 .catch(err => res.status(500).send(err));
    //         })
    // })

showtunesRoutes.route("/:id")
    .get((req, res) => {
        Showtunes.findById(req.params.id, (err, foundSong) => {
            return err ? res.status(500).send(err) : res.status(200).send(foundSong);
        })
    })

module.exports = showtunesRoutes;