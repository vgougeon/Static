const express = require('express');
const controller = require('./auth.controller');

const authRouter = express.Router();

authRouter.post('/login', (request, response, next) => controller.login(request, response, next));
authRouter.post('/me', (request, response, next) => controller.me(request, response, next));
module.exports = authRouter;