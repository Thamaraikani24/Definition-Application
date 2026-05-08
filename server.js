require("dotenv").config();

const express = require("express");
const connectDB=require("./config/db");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
connectDB();

app.use("/api/categories",require("./routes/categoryroutes"));
app.use("/api/stages",require("./routes/stageroutes"));
app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});