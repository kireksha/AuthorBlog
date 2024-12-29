require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const path = require("path");

const port = 3001;
const app = express();

app.use(express.static(path.resolve("..", "frontend", "build")));

app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve("..", "frontend", "build", "index.html"));
});

mongoose
  .connect(
    "mongodb+srv://kirill:kirill123@cluster0.hvbaq.mongodb.net/authorblog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  });
