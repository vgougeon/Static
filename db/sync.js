const knex = require('./db')

module.exports = async () => {
    await knex.schema.dropTable('characters');
    if(!await knex.schema.hasTable('characters')) {
        await knex.schema.createTable('characters', (table) => {
            table.increments()
            table.string('name')
            table.string('lastName')
            table.integer('age')
        })
        await knex('characters').insert({ 
            name: "Vincent", 
            lastName: "GOUGEON",
            age: 23
        })
    }
}