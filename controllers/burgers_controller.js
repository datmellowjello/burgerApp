let express = require("express");
let actions = require('../config/orm');
var router = express.Router();

router.get("/", (req, res) => {
    actions.selectAll((cb) => {
        let hbsObject = { burgers: cb };
        res.render('index', hbsObject)
    })
})

router.post("/api/insertOne", (req, res) => {
    let name = req.body.name;
    actions.insertOne(name, (data)=>{res.send(data)});
})

router.put("/api/updateTrue", (req, res) => {
    let id = req.body.id;
    let bool = true;
    actions.updateOne(id, bool, (data)=>{res.send(data)})
})

router.put("/api/updateFalse", (req, res) => {
    let id = req.body.id;
    let bool = false;
    actions.updateOne(id, bool, (data)=>{res.send(data)})
})

module.exports = router;