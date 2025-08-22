import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Alert,
  Link
} from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(formData.email, formData.password);
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
    <Container maxWidth="sm" sx={{ py: 8 }}>
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
            Welcome Back
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Sign in to your Dhara account
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 3 }}
            variant="outlined"
          />
          
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            sx={{ mb: 4 }}
            variant="outlined"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={loading}
            sx={{ 
              backgroundColor: '#ff6b35',
              py: 1.5,
              mb: 3,
              '&:hover': { backgroundColor: '#e55a2b' }
            }}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </Box>

        <Box textAlign="center">
          <Typography variant="body2" color="text.secondary">
            Don't have an account?{' '}
            <Link 
              component={RouterLink} 
              to="/register" 
              sx={{ 
                color: '#ff6b35',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Sign up here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
