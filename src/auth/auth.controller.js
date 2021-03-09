const knex = require('../../db/db');
const jwt = require('jsonwebtoken');

const login = (request, response) => {
    const user = knex('users')
    .where('username', request.body.username || '')
    .where('password', request.body.password || '')
    .then(async ([user]) => {
        if(user) {
            const token = await jwt.sign({ id: user.id }, 'SECRET', { algorithm: 'HS256' })
            response.json({ token: token})
        }
    })
};

const me = async (request, response) => {
    if(request.body.token) {
        response.json({ yourToken: await jwt.verify(request.body.token, 'SECRET') })
    }
    else response.status(401).send('not-logged-in')
    
};


module.exports = {
    login, me
};
