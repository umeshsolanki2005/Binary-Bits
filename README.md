# धारा (Dhara) - Folk Art Platform

A comprehensive platform designed to preserve, showcase, and promote traditional Indian folk art and culture. Built with modern web technologies to connect artists with art lovers worldwide.

## 🌟 Features

### Core Functionality
- **User Authentication** - Secure JWT-based login/registration
- **Artist Profiles** - Detailed artist information and portfolios
- **Art Gallery** - Browse and search through folk artworks
- **Artwork Upload** - Artists can showcase their creations
- **Cultural Preservation** - Dedicated to traditional art forms

### Traditional Art Forms Supported
- **Warli** - Tribal art from Maharashtra (2500+ years old)
- **Madhubani** - Intricate paintings from Bihar (2500+ years old)
- **Pithora** - Ritualistic art from Gujarat (1000+ years old)

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Material UI 5** - Beautiful, accessible components
- **React Router 6** - Client-side routing
- **Axios** - HTTP client for API calls

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd dhara
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Configure environment (copy config.env and update if needed)
# MONGODB_URI=mongodb://localhost:27017/dhara_folk_art
# JWT_SECRET=your_secret_key
# PORT=5000

# Start MongoDB (if local)
# mongod

# Seed the database with sample data (optional)
node seeder.js

# Start the server
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📁 Project Structure

```
dhara/
├── backend/                 # Express.js backend
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Authentication middleware
│   ├── config.env          # Environment variables
│   ├── server.js           # Main server file
│   ├── seeder.js           # Sample data seeder
│   └── package.json        # Backend dependencies
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React contexts
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # App entry point
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
└── README.md               # This file
```

## 🔐 API Endpoints

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

## 👥 Sample Users (After Seeding)

| Email | Password | Role | Art Form |
|-------|----------|------|----------|
| rajesh@example.com | password123 | Artist | Warli |
| sita@example.com | password123 | Artist | Madhubani |
| bhuri@example.com | password123 | Artist | Pithora |

## 🎨 Key Features

### Landing Page
- Cultural messaging and art form showcase
- Call-to-action for user registration
- Traditional Indian aesthetic design

### User Authentication
- Secure JWT-based authentication
- Artist profile creation during registration
- Protected routes for authenticated users

### Art Gallery
- Responsive grid layout
- Search and filter functionality
- Artwork details with artist information

### Artist Features
- Detailed artist profiles
- Artwork upload capabilities
- Portfolio management

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev  # Start with nodemon
```

### Frontend Development
```bash
cd frontend
npm run dev  # Start Vite dev server
```

### Database Management
```bash
cd backend
node seeder.js  # Seed sample data
```

## 🌐 Deployment

### Backend Deployment
1. Set production environment variables
2. Build and start the server: `npm start`
3. Use PM2 or similar for process management

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure API base URL for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of the Dhara Folk Art Platform initiative, dedicated to preserving and promoting traditional Indian folk art and culture.

## 🙏 Acknowledgments

- Traditional Indian folk artists
- Cultural heritage preservation efforts
- Open source community

---

**धारा** - Preserving the Flow of Traditional Folk Art through Digital Innovation
