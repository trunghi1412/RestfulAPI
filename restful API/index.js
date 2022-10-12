const express = require("express");
const app = express()
const port = 5000;

app.get("/users", (req,res) => {
  res.send("Hieu dep trai hoc IT");
});

app.get("/", (req,res) => {
  res.send("Pham Trung Hieu-19521511");
});

app.listen(port, () => {
  console.log(`server has started at port ${port}`);
});
