const Song = require("../models/songs");

// GET all songs
const getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➕ ADD SONG
const addSong = async (req, res) => {
  try {
    const { title, artist } = req.body;

    const newSong = new Song({
      title,
      artist
    });

    const savedSong = await newSong.save();

    res.status(201).json(savedSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getSongs, addSong };