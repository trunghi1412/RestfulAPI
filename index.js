const mongoose = require("mongoose");
const express = require("express");
const app = express()
const port = 5000;
mongoose.connect(
    `mongodb+srv://Hieu1412:hieudepzai1412@cluster0.9nlbp6d.mongodb.net/test`,
    {
      useNewUrlParser: true,
     
      useUnifiedTopology: true
    }
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });

app.get("/users", (req,res) => {
  res.send("Hieu dep trai hoc IT");
});

app.get("/", (req,res) => {
  res.send("Pham Trung Hieu-19521511");
});

app.listen(port, () => {
  console.log(`server has started at port ${port}`);
});
