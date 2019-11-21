var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("Sever is listening at http://localhost:" + PORT);
});