//third party module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Router

const infoRouter = require("./router");
app.use("/info", infoRouter);

//listen port
app.listen(5000, () => {
  console.log("server started on 5000");
});

//monogoose connectiom
mongoose
  .connect("mongodb://127.0.0.1:27017/mongoose", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
