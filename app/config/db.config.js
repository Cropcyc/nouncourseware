module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'c0gSlumber',
    DB: 'postgres',
    dialect: 'postgres',
    pool: {
        max: 6,
        min: 0,
        acquire: 40000,
        idle: 11000
    }
}