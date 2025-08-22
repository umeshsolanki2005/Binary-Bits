# Dhara Folk Art Platform - Frontend

A beautiful React-based frontend for the Dhara Folk Art Platform, designed to preserve and promote traditional Indian folk art.

## Features

- 🎨 **Beautiful Landing Page** - Showcases traditional art forms with cultural context
- 🔐 **User Authentication** - Secure login/registration with JWT
- 👨‍🎨 **Artist Profiles** - Detailed artist information and artwork galleries
- 🖼️ **Art Gallery** - Browse and search through folk artworks
- 📤 **Artwork Upload** - Artists can showcase their creations
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Material UI** - Modern, clean interface with cultural aesthetics

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Material UI 5** - Beautiful, accessible components
- **React Router 6** - Client-side routing
- **Axios** - HTTP client for API calls
- **Context API** - State management

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   ├── ArtCard.jsx     # Artwork display card
│   └── ProtectedRoute.jsx # Route protection
├── contexts/           # React contexts
│   └── AuthContext.jsx # Authentication state
├── pages/              # Page components
│   ├── LandingPage.jsx # Homepage
│   ├── LoginPage.jsx   # User login
│   ├── RegisterPage.jsx # User registration
│   ├── HomePage.jsx    # Art gallery
│   ├── UploadPage.jsx  # Artwork upload
│   └── ArtistProfilePage.jsx # Artist details
├── utils/              # Utility functions
│   └── api.js         # API configuration
├── App.jsx            # Main app component
└── main.jsx          # App entry point
```

## Pages Overview

### Landing Page (`/`)
- Hero section with cultural messaging
- Traditional art forms showcase
- Call-to-action for registration

### Authentication
- **Login** (`/login`) - User sign-in
- **Register** (`/register`) - User registration with artist profile option

### Main Application
- **Gallery** (`/home`) - Browse all artworks with search/filter
- **Upload** (`/upload`) - Artists can submit new artworks
- **Artist Profile** (`/artist/:id`) - View artist details and works

## Key Components

### Navbar
- Responsive navigation
- Authentication-aware menu items
- Cultural branding with "धारा" logo

### ArtCard
- Displays artwork information
- Artist details and pricing
- Hover effects and interactions

### ProtectedRoute
- Guards authenticated routes
- Redirects to login if unauthorized

## Styling & Theme

The app uses a custom Material UI theme with:
- **Primary Color**: Orange (#ff6b35) - representing creativity and energy
- **Secondary Color**: Brown (#8b4513) - representing earth and tradition
- **Typography**: Roboto font family for readability
- **Cultural Elements**: Traditional Indian color palette

## API Integration

- **Base URL**: `/api` (proxied to backend)
- **Authentication**: JWT tokens in Authorization headers
- **Error Handling**: Automatic token refresh and logout on auth errors

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables
The app is configured to proxy API calls to `http://localhost:5000` during development.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing code style
2. Use Material UI components consistently
3. Maintain responsive design principles
4. Test on multiple screen sizes

## License

This project is part of the Dhara Folk Art Platform initiative.
