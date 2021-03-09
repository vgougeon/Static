const knex = require('../../db/db')

const findAll = (request, response) => {
    knex('characters')
    .then(res => response.json(res))
};

const get = (request, response, next) => {
    const id = Number(request.params.id);
    knex('characters')
    .where('id', id)
    .then(res => response.json(res))
};

const create = (request, response) => {
    response.status(201);
    console.log(request.body)
    knex('characters')
    .insert(request.body)
    .then(res => response.json(res))
};

const update = (request, response) => {
    const id = Number(request.params.id);
    knex('characters')
    .where('id', id)
    .update(request.body)
    .then(res => response.json(res))
};

const remove = (request, response) => {
    const id = Number(request.params.id);
    knex('characters')
    .where('id', id)
    .del()
    .then(res => response.json(res))
};

module.exports = {
    findAll,
    get,
    create,
    update,
    remove,
};
