const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('dog', {
  name: Sequelize.STRING,
  breed: Sequelize.STRING,
});
