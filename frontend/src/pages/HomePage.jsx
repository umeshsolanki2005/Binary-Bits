import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  CircularProgress,
  Alert
} from '@mui/material';
import ArtCard from '../components/ArtCard';
import api from '../utils/api';

const HomePage = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [artFormFilter, setArtFormFilter] = useState('');

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/artworks');
      setArtworks(response.data);
    } catch (err) {
      setError('Failed to fetch artworks');
      console.error('Error fetching artworks:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredArtworks = artworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artistName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesArtForm = !artFormFilter || artwork.artForm === artFormFilter;
    
    return matchesSearch && matchesArtForm;
  });

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold',
            color: '#2c3e50',
            mb: 2
          }}
        >
          Folk Art Gallery
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ maxWidth: '600px', mx: 'auto' }}
        >
          Explore the rich heritage of Indian folk art through magnificent traditions
        </Typography>
      </Box>

      {/* Search and Filter */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search artworks, artists, or descriptions"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Art Form</InputLabel>
              <Select
                value={artFormFilter}
                onChange={(e) => setArtFormFilter(e.target.value)}
                label="Art Form"
              >
                <MenuItem value="">All Forms</MenuItem>
                <MenuItem value="Warli">Warli</MenuItem>
                <MenuItem value="Madhubani">Madhubani</MenuItem>
                <MenuItem value="Pithora">Pithora</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body2" color="text.secondary">
              {filteredArtworks.length} artwork{filteredArtworks.length !== 1 ? 's' : ''} found
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Artworks Grid */}
      {filteredArtworks.length === 0 ? (
        <Box textAlign="center" sx={{ py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No artworks found matching your criteria
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Try adjusting your search terms or filters
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {filteredArtworks.map((artwork) => (
            <Grid item xs={12} sm={6} md={4} key={artwork._id}>
              <ArtCard artwork={artwork} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default HomePage;
