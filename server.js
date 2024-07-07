import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json("this api is running");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
