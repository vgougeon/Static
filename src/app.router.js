const express = require('express');
const characterRouter = require('./characters/character.router');
const router = express.Router();

router.use('/characters', characterRouter);

module.exports = router;
