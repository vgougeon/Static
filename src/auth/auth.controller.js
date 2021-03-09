const knex = require('../../db/db')

const login = (request, response) => {
    console.log(request.body)
};

module.exports = {
    login,
};
