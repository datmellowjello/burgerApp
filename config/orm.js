let db = require('../models')
let Op = db.Sequelize.Op;
module.exports = {
selectAll: (cb) => {db.Burgers.findAll()
    .then((res)=>{cb(res);})
    .catch((err)=>{if (err) throw err})},

insertOne: (name, cb) => {db.Burgers.create(
    {
    name: name
    }).then((res)=>{cb(res);})
    .catch((err)=>{if (err) throw err})},

updateOne: (id, devoBool, cb) => {
    db.Burgers.update({devoured: devoBool}, {
        where: {
            id: {
                [Op.eq]: id
            }
        }
    })
    .then((res)=>{cb(res);})
    .catch((err)=>{if (err) throw err})}
}
