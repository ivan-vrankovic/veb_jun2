const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    artist: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    count : {
        type: Number,
        default: 1,
        required: true
    }
});

module.exports = mongoose.model('Song', songSchema);