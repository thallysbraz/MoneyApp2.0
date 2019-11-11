const port = 3003;
const express = require("express");
const bodyParser = require("body-parser");

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, function() {
  console.log("server rodando na porta: ", +port);
});

module.exports = server;
