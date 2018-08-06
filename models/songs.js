const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema({
    songName: {type: String, require: true},
    voice: {type: String, require: true},
    musical: {type: String, require: true},
    anthBook: String,
    composers: [String],
    lyricists: [String],
    links: {
        spotify: String,
        youtube: String,
        anthology: String,
        amazon: String,
        musicNotes: String

    },
    picture: String,
    clicked: Number

});

module.exports = mongoose.model("Showtunes", songSchema)