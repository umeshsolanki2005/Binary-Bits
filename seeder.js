const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Artwork = require('./models/Artwork');

dotenv.config({ path: './config.env' });

const sampleArtists = [
  {
    username: 'rajesh_vangad',
    email: 'rajesh@example.com',
    password: 'password123',
    isArtist: true,
    artistProfile: {
      name: 'Rajesh Vangad',
      location: 'Mumbai, Maharashtra',
      artForm: 'Warli',
      experience: '25+ years',
      specialization: 'Traditional wall paintings, Contemporary canvas work',
      achievements: ['National Award recipient'],
      bio: 'Master Warli artist preserving traditional techniques while creating contemporary interpretations.'
    }
  },
  {
    username: 'sita_devi',
    email: 'sita@example.com',
    password: 'password123',
    isArtist: true,
    artistProfile: {
      name: 'Sita Devi',
      location: 'Mithila, Bihar',
      artForm: 'Madhubani',
      experience: '30+ years',
      specialization: 'Wedding paintings, Festival decorations',
      achievements: ['Padma Shri recipient'],
      bio: 'Renowned Madhubani artist known for her intricate floral patterns and mythological themes.'
    }
  },
  {
    username: 'bhuri_bai',
    email: 'bhuri@example.com',
    password: 'password123',
    isArtist: true,
    artistProfile: {
      name: 'Bhuri Bai',
      location: 'Jhabua, Gujarat',
      artForm: 'Pithora',
      experience: '20+ years',
      specialization: 'Canvas paintings, Mural art',
      achievements: ['Contemporary art galleries'],
      bio: 'Pioneer in bringing Pithora art from walls to canvas, bridging traditional and modern art worlds.'
    }
  }
];

const sampleArtworks = [
  {
    title: 'Warli Village Life',
    description: 'Traditional Warli painting depicting daily village activities and rituals',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    artForm: 'Warli',
    price: 15000,
    isForSale: true,
    tags: ['village', 'rituals', 'traditional']
  },
  {
    title: 'Madhubani Wedding Scene',
    description: 'Intricate Madhubani painting showing traditional wedding ceremonies and celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
    artForm: 'Madhubani',
    price: 25000,
    isForSale: true,
    tags: ['wedding', 'celebration', 'mythological']
  },
  {
    title: 'Pithora Horse Riders',
    description: 'Vibrant Pithora painting featuring traditional horse riders and tribal motifs',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
    artForm: 'Pithora',
    price: 18000,
    isForSale: true,
    tags: ['horses', 'tribal', 'motifs']
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Artwork.deleteMany({});
    console.log('Cleared existing data');

    // Create artists
    const createdArtists = await User.create(sampleArtists);
    console.log('Created artists:', createdArtists.length);

    // Create artworks and associate with artists
    for (let i = 0; i < sampleArtworks.length; i++) {
      const artwork = sampleArtworks[i];
      const artist = createdArtists[i];
      
      await Artwork.create({
        ...artwork,
        artist: artist._id,
        artistName: artist.artistProfile.name,
        location: artist.artistProfile.location
      });
    }
    console.log('Created artworks:', sampleArtworks.length);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
