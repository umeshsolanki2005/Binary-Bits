import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Card, 
  CardContent, 
  Chip, 
  Avatar,
  CircularProgress,
  Alert
} from '@mui/material';
import { useParams } from 'react-router-dom';
import ArtCard from '../components/ArtCard';
import api from '../utils/api';

const ArtistProfilePage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchArtistData();
  }, [id]);

  const fetchArtistData = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/artists/${id}`);
      setArtist(response.data.artist);
      setArtworks(response.data.artworks);
    } catch (err) {
      setError('Failed to fetch artist information');
      console.error('Error fetching artist:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error || !artist) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">
          {error || 'Artist not found'}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Artist Profile Header */}
      <Card sx={{ mb: 6, overflow: 'hidden' }}>
        <Box sx={{ position: 'relative' }}>
          <Box 
            sx={{ 
              height: '200px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #8b4513 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant="h2" sx={{ color: 'white', opacity: 0.3 }}>
              🎨
            </Typography>
          </Box>
          
          <Box 
            sx={{ 
              position: 'absolute',
              bottom: '-50px',
              left: '50px',
              display: 'flex',
              alignItems: 'flex-end',
              gap: 3
            }}
          >
            <Avatar
              sx={{ 
                width: 100, 
                height: 100, 
                border: '4px solid white',
                backgroundColor: '#ff6b35',
                fontSize: '2rem'
              }}
            >
              {artist.artistProfile?.name?.charAt(0) || artist.username.charAt(0)}
            </Avatar>
            
            <Box sx={{ mb: 2, color: 'white' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                {artist.artistProfile?.name || artist.username}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                {artist.artistProfile?.location || 'Location not specified'}
              </Typography>
            </Box>
          </Box>
        </Box>
        
        <CardContent sx={{ pt: 8, pb: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" sx={{ mb: 2, color: '#8b4513' }}>
                About the Artist
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                {artist.artistProfile?.bio || 
                  `${artist.username} is a talented artist contributing to the preservation of traditional Indian folk art.`}
              </Typography>
              
              <Grid container spacing={2}>
                {artist.artistProfile?.artForm && (
                  <Grid item>
                    <Chip 
                      label={artist.artistProfile.artForm} 
                      sx={{ backgroundColor: '#ff6b35', color: 'white' }}
                    />
                  </Grid>
                )}
                {artist.artistProfile?.experience && (
                  <Grid item>
                    <Chip 
                      label={artist.artistProfile.experience} 
                      variant="outlined"
                      sx={{ borderColor: '#8b4513', color: '#8b4513' }}
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ backgroundColor: '#f8f9fa', p: 3, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#8b4513' }}>
                  Artist Details
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Username</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>{artist.username}</Typography>
                </Box>
                
                {artist.artistProfile?.specialization && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">Specialization</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                      {artist.artistProfile.specialization}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Artworks Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 3 }}>
          Artworks by {artist.artistProfile?.name || artist.username}
        </Typography>
        
        {artworks.length === 0 ? (
          <Box textAlign="center" sx={{ py: 8 }}>
            <Typography variant="h6" color="text.secondary">No artworks uploaded yet</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Check back later to see their creations
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              {artworks.length} artwork{artworks.length !== 1 ? 's' : ''} found
            </Typography>
            
            <Grid container spacing={4}>
              {artworks.map((artwork) => (
                <Grid item xs={12} sm={6} md={4} key={artwork._id}>
                  <ArtCard artwork={artwork} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ArtistProfilePage;
