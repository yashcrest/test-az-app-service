import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.json({
    message: "this api is running",
  });
});

app.get("/test123", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/air", (req, res) => {
  res.json({ message: "this route was declared from macbook air." });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
