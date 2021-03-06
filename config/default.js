module.exports = {
    knex: {
        client: "postgres",
        connection: {
            host: "localhost",
            port: 5432,
            user: "sumoApiUser",
            password: "sumoApiPassword",
            database: "sumodb-dev"
        },
        migrations: {
            directory: "knex/migrations"
        },
        seeds: {
            directory: "knex/seeds"
        },
        debug: true
    }
}
