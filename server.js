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



// // DATABASE CONNECTION
// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log(err));


// // ROUTES
// app.get("/", (req, res) => {
//   res.send("API Running");
// });


// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});