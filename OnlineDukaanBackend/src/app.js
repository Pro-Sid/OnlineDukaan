const express = require("express");
const route = require("./routes/routing");
const bodyParser = require("body-parser");
const errorLogger = require("./utilities/errorLogger");
const requestLogger = require("./utilities/requestLogger");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);
app.use('/', route);
app.use(errorLogger);

app.listen(3000);
console.log("Server is listening at port 3000");

module.exports = app;