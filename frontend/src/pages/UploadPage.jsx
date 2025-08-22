import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../utils/api';

const UploadPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    artForm: '',
    price: '',
    isForSale: false,
    tags: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.title || !formData.description || !formData.imageUrl || !formData.artForm) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const artworkData = {
        ...formData,
        price: formData.price ? parseFloat(formData.price) : 0,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []
      };

      await api.post('/artworks/upload', artworkData);
      
      setSuccess('Artwork uploaded successfully!');
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        artForm: '',
        price: '',
        isForSale: false,
        tags: ''
      });

      setTimeout(() => {
        navigate('/home');
      }, 2000);

    } catch (err) {
      setError(err.response?.data?.message || 'Failed to upload artwork');
    } finally {
      setLoading(false);
    }
  };

  if (!user?.isArtist) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" color="error" sx={{ mb: 2 }}>
            Access Denied
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Only artists can upload artworks.
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => navigate('/home')}
            sx={{ backgroundColor: '#ff6b35' }}
          >
            Back to Gallery
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#8b4513', mb: 1 }}>
            Upload Your Artwork
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Share your creative vision with the world
          </Typography>
        </Box>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 3 }}>{success}</Alert>}

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Artwork Title *"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description *"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL *"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Art Form *</InputLabel>
                <Select
                  name="artForm"
                  value={formData.artForm}
                  onChange={handleChange}
                  label="Art Form *"
                >
                  <MenuItem value="Warli">Warli</MenuItem>
                  <MenuItem value="Madhubani">Madhubani</MenuItem>
                  <MenuItem value="Pithora">Pithora</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Price (₹)"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isForSale"
                    checked={formData.isForSale}
                    onChange={handleChange}
                    sx={{ color: '#ff6b35' }}
                  />
                }
                label="This artwork is available for purchase"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                variant="outlined"
                placeholder="village, rituals, traditional (separate with commas)"
              />
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{ backgroundColor: '#ff6b35', px: 6, py: 1.5, '&:hover': { backgroundColor: '#e55a2b' } }}
            >
              {loading ? 'Uploading...' : 'Upload Artwork'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default UploadPage;
