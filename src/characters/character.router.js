const express = require('express');
const controller = require('./character.controller');

const characterRouter = express.Router();

characterRouter.get('/', (request, response, next) => controller.findAll(request, response, next));
characterRouter.get('/:id', (request, response, next) => controller.get(request, response, next));
characterRouter.post('/', (request, response, next) => controller.create(request, response, next));
characterRouter.put('/:id', (request, response, next) => controller.update(request, response, next));
characterRouter.delete('/:id', (request, response, next) => controller.remove(request, response, next));

module.exports = characterRouter;