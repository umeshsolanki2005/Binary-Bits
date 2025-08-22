const express = require('express');
const User = require('../models/User');
const Artwork = require('../models/Artwork');
const router = express.Router();

// Get all artists
router.get('/', async (req, res) => {
  try {
    const artists = await User.find({ isArtist: true })
      .select('-password')
      .sort({ createdAt: -1 });
    
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get artist by ID with artworks
router.get('/:id', async (req, res) => {
  try {
    const artist = await User.findById(req.params.id)
      .select('-password');
    
    if (!artist || !artist.isArtist) {
      return res.status(404).json({ message: 'Artist not found' });
    }

    const artworks = await Artwork.find({ artist: req.params.id })
      .sort({ createdAt: -1 });

    res.json({
      artist,
      artworks
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
