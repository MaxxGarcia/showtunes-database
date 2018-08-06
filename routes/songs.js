const Showtunes = require("../models/songs");
const express = require("express");

const showtunesRoutes = express.Router();

showtunesRoutes.route("/")
    .get((req, res) => {
        Showtunes.find((err, songs) => {
            return err ? res.status(500).send(err) : res.status(200).send(songs)
        })
    })
    .post((req, res) => {
        let newSong = new Showtunes(req.body);
        newSong.save((err, song) => {
            return err ? res.status(500).send(err) : res.status(201).send(song);
        })
    })

showtunesRoutes.route("/:id")
    .get((req, res) => {
        Showtunes.findById(req.params.id, (err, foundSong) => {
            return err ? res.status(500).send(err) : res.status(200).send(foundSong);
        })
    })
    .put((req, res) => {
        Showtunes.findbyIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedSong) => {
            return err ? res.status(500).send(err) : res.status(200).send(updatedSong);
        })
    })
    .delete((req, res) => {
        Showtunes.findByIdAndRemove(req.params.id, (err) => {
            return err ? res.status(500).send(err) : res.status(200).send("THE ROUGE SHOWTUNE HAS BEEN ELIMINATED")
        })
    })

module.exports = showtunesRoutes;