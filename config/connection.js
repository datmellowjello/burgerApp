let Sequelize = require("sequelize")
//var mysql = require("mysql");

let sequelize = new Sequelize("w2xgvanx2pzhu6c3", {
  host: "jsk3f4rbvp8ayd7w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  PORT: 3306,
  user: "ddpiolz7g3d75o6l",
  password: "ft54466fbohze4tp",
})

// var con = mysql.createConnection({

module.exports = sequelize;

