const express = require ("express");
const app = express();
const controller = require("./routes");
app.use("/" , controller);
app.listen("3000", ()=> {console.log("server running"); });