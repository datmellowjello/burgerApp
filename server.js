var express = require("express");
var exphbs  = require('express-handlebars');
var db = require("./models")

var PORT = process.env.PORT || 10001;

var app = express();

app.use(express.static("assets"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let routes = require("./controllers/burgers_controller")

app.use(routes);

db.sequelize.sync().then(()=>{
  app.listen(PORT, function() {
  console.log("App now listening at http://localhost:" + PORT);
});})
