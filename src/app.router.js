const express = require('express');
const authRouter = require('./auth/auth.router');
const characterRouter = require('./characters/character.router');
const router = express.Router();

router.use('/characters', characterRouter);
router.use('/auth', authRouter);

module.exports = router;
