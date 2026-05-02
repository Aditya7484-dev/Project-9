const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
  //   res.send("Songs route working 🎵");
  // });
  
  const { getSongs, addSong} = require("../controllers/songController");
  const upload = require("../middleware/upload");

router.get("/", getSongs);
router.post("/", upload.single("song"), addSong);

module.exports = router;
