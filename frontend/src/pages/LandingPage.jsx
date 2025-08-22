import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent,
  Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const artForms = [
    {
      name: 'Warli',
      origin: 'Maharashtra',
      age: '2500+ years old',
      description: 'Traditional tribal art depicting village life and rituals'
    },
    {
      name: 'Madhubani',
      origin: 'Bihar',
      age: '2500+ years old',
      description: 'Intricate paintings with mythological themes and vibrant colors'
    },
    {
      name: 'Pithora',
      origin: 'Gujarat',
      age: '1000+ years old',
      description: 'Ritualistic art form celebrating tribal deities and ceremonies'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #ff6b35 0%, #8b4513 100%)',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                धारा
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3,
                  fontWeight: 300,
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                Preserving the Flow of Traditional Folk Art
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6
                }}
              >
                Discover the timeless beauty of Indian folk art. Connect with master artists, 
                explore traditional techniques, and help preserve our cultural heritage for future generations.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => navigate('/register')}
                  sx={{ 
                    backgroundColor: 'white',
                    color: '#ff6b35',
                    px: 4,
                    py: 1.5,
                    '&:hover': { backgroundColor: '#f5f5f5' }
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{ 
                    borderColor: 'white',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '400px'
                }}
              >
                <Box 
                  sx={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <Typography variant="h3" sx={{ opacity: 0.8 }}>
                    🎨
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Art Forms Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          sx={{ 
            mb: 6,
            fontWeight: 'bold',
            color: '#2c3e50'
          }}
        >
          Traditional Art Forms
        </Typography>
        
        <Grid container spacing={4}>
          {artForms.map((artForm, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Chip 
                    label={artForm.age} 
                    sx={{ 
                      backgroundColor: '#ff6b35', 
                      color: 'white',
                      mb: 2
                    }}
                  />
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 1,
                      color: '#2c3e50'
                    }}
                  >
                    {artForm.name}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {artForm.origin}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {artForm.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box 
        sx={{ 
          backgroundColor: '#8b4513',
          color: 'white',
          py: 6
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 'bold' }}>
              Join Our Community
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Whether you're an artist looking to showcase your work or an art lover 
              wanting to discover traditional Indian folk art, we welcome you.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/register')}
              sx={{ 
                backgroundColor: '#ff6b35',
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                '&:hover': { backgroundColor: '#e55a2b' }
              }}
            >
              Start Your Journey
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
