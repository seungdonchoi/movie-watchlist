const Sequelize = require('sequelize');

const dbConnection = new Sequelize (
  "postgres://localhost:5432/moviewatchlist"
)

module.exports = dbConnection
