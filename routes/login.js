const express = require("express");
const Admin = require("../models/user");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/", (req, res) => {
    Admin.findOne({username: req.body.username.toLowerCase()}, (err, admin) => {
        if (err) return res.status(500).send(err);
        if(!admin) {
            return res.status(401).send({success: false, err: "There is no user with that username"});
        } else {
            admin.checkPassword(req.body.password, (err, match) => {
                if (err) throw (err);
                if (!match) return res.status(401).send({success: false, message:"incorrect username or password combination"});
                const token = jwt.sign(admin.toObject(), process.env.SECRET, {expiresIn: "24h"});
                return res.send({token: token, admin: admin.withoutPassword(), success: true, message: "Token Received"})
            })
        }
    });
});

module.exports = authRouter;

