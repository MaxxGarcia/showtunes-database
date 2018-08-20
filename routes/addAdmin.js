const express = require("express");
const Admin = require("../models/user");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post('/', (req, res) => {
    Admin.findOne({username: req.body.username}, (err, existingUser) => {
        if (err) return res.status(500).send({sucess: false, err});
        if (existingUser !== null) {
            return res.status(400).send({success: false, err: "Sorry, that username already exists!"});
        }
        const newAdmin = new Admin(req.body);
        newAdmin.save((err, admin) => {
            if(err) return res.status(500).send({success: false, err});

            const token = jwt.sign(admin.toObject(), process.env.SECRET);
            return res.status(201).send({success: true, admin: admin.toObject(), token});
        });
    });
});

module.exports = authRouter;

