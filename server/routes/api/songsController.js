const mongoose = require('mongoose');

const Song = require('../../songModel');

module.exports.getSortSongs = async (req, res, next) => {
    try {
        const sortBy = req.params.sortBy;
        if (sortBy === "count") {
            const songs = await Song.find({}).sort({ count: 1 }).exec();
            if (songs) {
                res.status(200).json(songs).send();
            }
        }
        else if (sortBy === "artist") {
            const songs = await Song.find({}).sort({ artist: 1 }).exec();
            if (songs) {
                res.status(200).json(songs).send();
            }

        }
        else if (sortBy === "title") {
            const songs = await Song.find({}).sort({ title: 1 }).exec();
            if (songs) {
                res.status(200).json(songs).send();
            }

        }

    } catch (error) {
        next(error);
    }
}

module.exports.incCount = async (req, res, next) => {
    try {
        const songId = req.body._id;

        const song = await Song.findByIdAndUpdate(songId, { $inc: { count: 1 } }).exec();
        if (song) {
            res.status(200).json(song);
        }

    } catch (error) {
        next(error);
    }
}

module.exports.addSong = async (req, res, next) => {
    try {
        const body = {
            _id: mongoose.Types.ObjectId(),
            artist: req.body.artist,
            title: req.body.title
        }
        const newSong = new Song(body);
        const existTitle = await Song.find({ title: req.body.title }).exec();
        const existArtist = await Song.find({ artist: req.body.artist }).exec();
        if ((existTitle && existArtist).length === 0) {
            await newSong.save();
            res.status(201).json({ message: "The song has successfully been scrobbled!" });

        }

        res.status(309).json({ message: "The song already exists! Try again!" });

    } catch (error) {
        next(error);
    }
}
