const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Songs route working 🎵");
// });

const { getSongs, addSong} = require("../controllers/songController");

router.get("/", getSongs);
router.post("/", addSong);

module.exports = router;
