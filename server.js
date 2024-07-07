import express from "express";

const app = express();

app.get("/", (res, res) => {
  res.json("this api is running");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
