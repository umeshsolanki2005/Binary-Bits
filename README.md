# Dhara Folk Art Platform - Backend

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   - Copy `config.env` and update with your MongoDB connection string
   - Update JWT_SECRET if needed

3. **Start MongoDB:**
   - Ensure MongoDB is running on your system
   - Or use MongoDB Atlas cloud service

4. **Seed the database (optional):**
   ```bash
   node seeder.js
   ```

5. **Run the server:**
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Artworks
- `GET /api/artworks` - Get all artworks (public)
- `POST /api/artworks/upload` - Upload artwork (protected)
- `GET /api/artworks/artist/:id` - Get artworks by artist

### Artists
- `GET /api/artists` - Get all artists
- `GET /api/artists/:id` - Get artist details with artworks

## Sample Users (after seeding)
- **Rajesh Vangad** (rajesh@example.com / password123) - Warli artist
- **Sita Devi** (sita@example.com / password123) - Madhubani artist  
- **Bhuri Bai** (bhuri@example.com / password123) - Pithora artist
