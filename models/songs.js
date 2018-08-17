const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema({
    songName: {type: String, require: true},
    voice: {type: String, require: true},
    musical: {type: String, require: true},
    anthBook: String,
    Composer: [String],
    Lyricist: [String],
    links: {
        spotify: String,
        youtube: String,
        anthology: String,
        amazon: String,
        musicNotes: String

    },
    picture: String,
    clicked: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        // required: true
    }
});

module.exports = mongoose.model("Showtunes", songSchema)