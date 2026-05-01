// server/server.js
const express = require("express");
const multer = require("multer");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/musicApp", (req, res) => {
  res.send("Music App Running 🎵");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const songRoutes = require("./routes/songRoute.js");

app.use("/api/songs", songRoutes);

const PORT = 5000;

app.get("/server", (req, res) => {
  res.send("Main Server Running 🚀");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
