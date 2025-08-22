const express = require('express');
const Artwork = require('../models/Artwork');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all artworks (public)
router.get('/', async (req, res) => {
  try {
    const artworks = await Artwork.find()
      .populate('artist', 'username artistProfile')
      .sort({ createdAt: -1 });
    
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Upload new artwork (protected)
router.post('/upload', auth, async (req, res) => {
  try {
    const { title, description, imageUrl, artForm, price, isForSale, tags } = req.body;
    
    // Check if user is an artist
    if (!req.user.isArtist) {
      return res.status(403).json({ message: 'Only artists can upload artworks' });
    }

    const artwork = new Artwork({
      title,
      description,
      imageUrl,
      artForm,
      artist: req.user._id,
      artistName: req.user.artistProfile?.name || req.user.username,
      location: req.user.artistProfile?.location || 'Unknown',
      price: price || 0,
      isForSale: isForSale || false,
      tags: tags || []
    });

    await artwork.save();
    
    res.status(201).json({
      message: 'Artwork uploaded successfully',
      artwork
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get artworks by artist (public)
router.get('/artist/:artistId', async (req, res) => {
  try {
    const artworks = await Artwork.find({ artist: req.params.artistId })
      .sort({ createdAt: -1 });
    
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
