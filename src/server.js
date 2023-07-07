import express from "express";

const app = express();

app.use("/todos", (_, res) => {
  res.json({ message: "home page" });
});

app.use("/", (_, res) => {
  res.status(401).json({ message: "server works!" });
});

app.listen(3000);

// GET, POST, PUT, DELETE
