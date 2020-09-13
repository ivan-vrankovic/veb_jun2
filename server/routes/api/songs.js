const express = require('express');
const router = express.Router();

const controller = require('./songsController');

router.get('/:sortBy', controller.getSortSongs);
router.patch('', controller.incCount);
router.put('', controller.addSong);

module.exports = router;
