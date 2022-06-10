const express = require("express");
const app = express();

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("server runing on portfgdr 3002");
  });
});
 