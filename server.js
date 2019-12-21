var express = require("express");
var path = require("path");

//Express
var app = express();
var PORT = process.env.PORT || 8080;

//APP DATA & ROUTING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});