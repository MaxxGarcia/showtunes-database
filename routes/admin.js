const Showtunes = require("../models/songs");
const Admin = require("../models/user");
const express = require("express");
const adminRoutes = express.Router();

adminRoutes.route("/")
    .post((req, res) => {
        let newSong = new Showtunes(req.body);
        newSong.user = req.user._id
        newSong.save((err, newSong) => {
            return err ? res.status(500).send(err) : res.status(201).send(newSong);
        })
    })
    .get((req, res) => {
        Admin.findById(req.user._id, (err, admin) => {
            if (err) return res.status(500).send({ success: false, err })
            if (admin === null) return res.status(400).send({ success: false, err: "User not found!" })
            return res.status(200).send({ success: true, admin: admin.withoutPassword() })
        })
    })

adminRoutes.route("/all")
    .get((req, res) => {
        Admin.find((err, admins) => {
            return err ? res.status(500).send(err) : res.status(200).send(admins)
        })
    })

adminRoutes.route("/:id")
    .put((req, res) => {
        delete req.body._id
        delete req.body.spotifyData
        Showtunes.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedSong) => {
            console.log(req.params.id)
            return err ? res.status(500).send(err) : res.status(200).send(updatedSong);
        })
    })
    .delete((req, res) => {
        Showtunes.findByIdAndDelete(req.params.id, (err) => {
            return err ? res.status(500).send(err) : res.status(200).send("THE ROUGE SHOWTUNE HAS BEEN ELIMINATED")
        })
    })

adminRoutes.route("/delete/:id")
    .delete((req, res) => {
        Admin.findByIdAndDelete(req.params.id, (err) => {
            return err ? res.status(500).send(err) : res.status(200).send(`THE ROUGE ADMIN HAS BEEN ELIMINATED ${req.params.id}`)
        })
    })
module.exports = adminRoutes;