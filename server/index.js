const express = require('express');
const Sequelize  = require('sequelize');
const app = express();
const dbConnection = require('./db')

const PORT = 8080;
const startServer = async () => {
  await dbConnection.sync()
  app.listen(8080, () => {
    console.log(`Server is listening on port ${PORT}!`)
  })
}

startServer();

app.get('/', (req, res) => {
  res.send(`Hello World`)
})

const Movie = dbConnection.define('movie', {
  title: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imdbLink: {
    type: Sequelize.STRING(1000),
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  watched: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

const Genre = dbConnection.define("genre", {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
})

Movie.belongsToMany(Genre, { through: "Movies_genres" })
Genre.belongsToMany(Movie, { through: "Movies_genres" })
