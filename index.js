const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

//Enable body parser

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", require("./routes/OpenaiRoutes"));

app.listen(port, () => {
  console.log("Server started on port : ", port);
});
