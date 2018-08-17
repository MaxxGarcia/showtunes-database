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
        console.log(req.body._id, req.params.id)
        Showtunes.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedSong) => {
            console.log("test")
            return err ? res.status(500).send(err) : res.status(200).send(updatedSong);
        })
    })
    .delete((req, res) => {
        Showtunes.findByIdAndRemove(req.params.id, (err) => {
            return err ? res.status(500).send(err) : res.status(200).send("THE ROUGE SHOWTUNE HAS BEEN ELIMINATED")
        })
    })

module.exports = adminRoutes;