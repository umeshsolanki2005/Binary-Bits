import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Alert,
  Link,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isArtist: false,
    artistProfile: {
      name: '',
      location: '',
      artForm: '',
      experience: '',
      specialization: '',
      bio: ''
    }
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'isArtist') {
      setFormData(prev => ({
        ...prev,
        isArtist: checked
      }));
    } else if (name.startsWith('artistProfile.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        artistProfile: {
          ...prev.artistProfile,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    try {
      const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        isArtist: formData.isArtist,
        artistProfile: formData.isArtist ? formData.artistProfile : {}
      };

      const result = await register(userData);
      if (result.success) {
        navigate('/home');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4,
          borderRadius: 2,
          backgroundColor: 'white'
        }}
      >
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              color: '#8b4513',
              mb: 1
            }}
          >
            Join Dhara
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Create your account and start your folk art journey
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, mb: 3 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="isArtist"
                  checked={formData.isArtist}
                  onChange={handleChange}
                  sx={{ color: '#ff6b35' }}
                />
              }
              label="I am an artist and want to showcase my work"
            />
          </Box>

          {formData.isArtist && (
            <Box sx={{ mt: 3, p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 3, color: '#8b4513' }}>
                Artist Profile
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="artistProfile.name"
                    value={formData.artistProfile.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="artistProfile.location"
                    value={formData.artistProfile.location}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Primary Art Form</InputLabel>
                    <Select
                      name="artistProfile.artForm"
                      value={formData.artistProfile.artForm}
                      onChange={handleChange}
                      label="Primary Art Form"
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
                    label="Experience (e.g., 5+ years)"
                    name="artistProfile.experience"
                    value={formData.artistProfile.experience}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Specialization"
                    name="artistProfile.specialization"
                    value={formData.artistProfile.specialization}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="e.g., Traditional wall paintings, Contemporary canvas work"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    name="artistProfile.bio"
                    value={formData.artistProfile.bio}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    variant="outlined"
                    placeholder="Tell us about your artistic journey and style..."
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={loading}
            sx={{ 
              backgroundColor: '#ff6b35',
              py: 1.5,
              mt: 3,
              '&:hover': { backgroundColor: '#e55a2b' }
            }}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </Box>

        <Box textAlign="center" sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Already have an account?{' '}
            <Link 
              component={RouterLink} 
              to="/login" 
              sx={{ 
                color: '#ff6b35',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Sign in here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
