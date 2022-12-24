const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

//Enable body parser

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/openai", require("./routes/OpenaiRoutes"));

app.listen(port, () => {
  console.log("Server started on port : ", port);
});
