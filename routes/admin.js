const Showtunes = require("../models/songs");
const express = require("express");

const adminRoutes = express.Router();

adminRoutes.route("/")
    .post((req, res) => {
        console.log("test")
        let newSong = new Showtunes(req.body);
        newSong.user = req.user._id
        newSong.save((err, newSong) => {
            return err ? res.status(500).send(err) : res.status(201).send(newSong);
        })
    })

adminRoutes.route("/:id")
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

module.exports = adminRoutes;