let Sequelize = require("sequelize")
//var mysql = require("mysql");

let sequelize = new Sequelize("g0uei74znn6frt6p", {
  host: "a5s42n4idx9husyc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  PORT: 3306,
  user: "thak94rk3jh75q9f",
  password: "feofqreeavihjcic",
})

// var con = mysql.createConnection({

module.exports = sequelize;

