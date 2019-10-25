// let orm = require("../config/orm");
// let Burgers = sequelize.define("Burger", {
//     burger_name: Sequelize.STRING,
//     devoured: Sequelize.BOOLEAN,
// });


// let functions = {
//     select: (cb) => {orm.selectAll(cb)},
//     insert: (name, cb) => {orm.insertOne(name, cb)},
//     update: (id, devoBool) => {orm.updateOne(id, devoBool)}
// };


// module.exports = functions;

module.exports = (Sequelize, DataTypes) => {


  let Burgers = Sequelize.define("Burgers", {
      name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN,
  })

  return Burgers;
}