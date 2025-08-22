# 🚀 Dhara Folk Art Platform - Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** (for cloning the repository)

## 🎯 Quick Start (Recommended)

### Option 1: Windows Batch File
```bash
# Simply double-click the start.bat file
start.bat
```

### Option 2: PowerShell Script
```bash
# Run the PowerShell script
.\start.ps1
```

### Option 3: Manual Setup
Follow the detailed steps below.

## 📋 Detailed Setup Instructions

### Step 1: Database Setup

#### Option A: Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service: `mongod`
3. The app will automatically create the database

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `backend/config.env` with your Atlas URI

### Step 2: Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment (if needed)
# Edit config.env with your MongoDB connection string

# Seed the database with sample data (optional but recommended)
node seeder.js

# Start the server
npm run dev
```

**Expected Output:**
```
Connected to MongoDB
Server running on port 5000
```

### Step 3: Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

**Expected Output:**
```
  VITE v4.4.5  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### Step 4: Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🧪 Testing the Setup

### 1. Visit the Landing Page
- Open http://localhost:3000
- You should see the beautiful Dhara landing page
- Test the navigation and responsive design

### 2. Test User Registration
- Click "Sign Up" button
- Create a new account (you can mark yourself as an artist)
- Verify successful registration

### 3. Test User Login
- Use the credentials you just created
- Or use sample accounts from the seeder:
  - **rajesh@example.com** / **password123** (Warli artist)
  - **sita@example.com** / **password123** (Madhubani artist)
  - **bhuri@example.com** / **password123** (Pithora artist)

### 4. Explore the Gallery
- After login, you'll be redirected to `/home`
- Browse through the sample artworks
- Test search and filter functionality

### 5. Test Artist Features (if registered as artist)
- Navigate to `/upload` to add new artworks
- View your artist profile
- Upload sample artwork with image URLs

## 🔧 Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error
```
MongoDB connection error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:**
- Ensure MongoDB is running: `mongod`
- Check if MongoDB service is started
- Verify connection string in `config.env`

#### 2. Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:**
- Change port in `config.env`: `PORT=5001`
- Or kill the process using the port

#### 3. Frontend Build Errors
```
Module not found: Can't resolve '@mui/material'
```
**Solution:**
- Ensure all dependencies are installed: `npm install`
- Check package.json for correct versions

#### 4. API Calls Failing
```
Failed to fetch artworks
```
**Solution:**
- Verify backend is running on port 5000
- Check browser console for CORS errors
- Ensure proxy configuration in `vite.config.js`

### Environment Variables

Create/update `backend/config.env`:
```env
MONGODB_URI=mongodb://localhost:27017/dhara_folk_art
JWT_SECRET=your_secret_key_here
PORT=5000
```

## 📱 Sample Data

After running the seeder, you'll have:

### Sample Artists
- **Rajesh Vangad** - Warli artist from Maharashtra
- **Sita Devi** - Madhubani artist from Bihar  
- **Bhuri Bai** - Pithora artist from Gujarat

### Sample Artworks
- Traditional Warli village scenes
- Madhubani wedding paintings
- Pithora horse rider motifs

## 🎨 Customization

### Adding New Art Forms
1. Update the enum in `backend/models/Artwork.js`
2. Add options in frontend forms
3. Update the landing page showcase

### Styling Changes
1. Modify the theme in `frontend/src/main.jsx`
2. Update component styles in individual files
3. Customize Material UI theme colors

### Adding New Features
1. Create new routes in `backend/routes/`
2. Add corresponding frontend pages
3. Update navigation and routing

## 🚀 Production Deployment

### Backend Deployment
1. Set production environment variables
2. Use PM2: `npm install -g pm2 && pm2 start server.js`
3. Set up reverse proxy (Nginx/Apache)

### Frontend Deployment
1. Build: `npm run build`
2. Deploy `dist` folder to hosting service
3. Configure API base URL for production

## 📞 Support

If you encounter issues:

1. Check the console logs for error messages
2. Verify all dependencies are installed
3. Ensure MongoDB is running
4. Check network connectivity
5. Review the troubleshooting section above

## 🎯 Next Steps

Once the basic setup is working:

1. **Add Real Artworks** - Upload actual folk art images
2. **User Management** - Implement admin features
3. **Payment Integration** - Add artwork purchase functionality
4. **Social Features** - Comments, likes, sharing
5. **Mobile App** - React Native version
6. **Analytics** - Track user engagement and artwork views

---

**Happy Coding! 🎨✨**

The Dhara Folk Art Platform is now ready to preserve and promote traditional Indian folk art!
