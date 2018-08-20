const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema({
    Song: {type: String, require: true},
    Voice: {type: String, require: true},
    Musical: {type: String, require: true},
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
    }
});

module.exports = mongoose.model("Showtunes", songSchema)