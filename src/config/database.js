module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    usename: 'postgres',
    port: '5433',
    password: 'admin',
    database: 'gobarber',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};