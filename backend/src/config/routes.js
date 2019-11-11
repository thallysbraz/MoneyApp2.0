const express = require("express");
const auth = require("./auth");

module.exports = function(server) {
  //URL base
  const router = express.Router();
  server.use("/api", router);

  //Rotas de Ciclo de Pagamento
};
