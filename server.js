const http = require("http");

// Express for handling GET and POST request
const express = require("express");
const app = express();

// Requiring file system to use local files
const fs = require("fs");

// Parsing the form of body to take
// input from forms
const bodyParser = require("body-parser");
var favicon = require('serve-favicon');

// Configuring express to use body-parser
// as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(favicon(__dirname + '/public/resources/favicon.ico'));

// Creating object of key and certificate
// for SSL
// const options = {
//   key: fs.readFileSync("/etc/letsencrypt/live/kilba.dev/privkey.pem"),
//   cert: fs.readFileSync("/etc/letsencrypt/live/kilba.dev/cert.pem"),
// };

// Creating https server by passing
// options and app object
http.createServer(app)
.listen(8000, function (req, res) {
  console.log("=== LISTENING ===");
});