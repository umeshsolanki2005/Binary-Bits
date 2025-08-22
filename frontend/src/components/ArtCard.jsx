import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ArtCard = ({ artwork }) => {
  const navigate = useNavigate();

  const handleArtistClick = () => {
    navigate(`/artist/${artwork.artist}`);
  };

  return (
    <Card sx={{ 
      maxWidth: 345, 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 4
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={artwork.imageUrl}
        alt={artwork.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {artwork.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {artwork.description}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip 
            label={artwork.artForm} 
            size="small" 
            sx={{ backgroundColor: '#ff6b35', color: 'white' }}
          />
          {artwork.isForSale && (
            <Chip 
              label={`₹${artwork.price.toLocaleString()}`} 
              size="small" 
              variant="outlined"
              color="primary"
            />
          )}
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button 
            size="small" 
            onClick={handleArtistClick}
            sx={{ color: '#8b4513', textTransform: 'none' }}
          >
            By {artwork.artistName}
          </Button>
          
          <Typography variant="caption" color="text.secondary">
            {artwork.location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ArtCard;
