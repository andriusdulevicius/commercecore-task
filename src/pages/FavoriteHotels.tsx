import { FC, useState, useEffect } from 'react';
import { HotelData } from './Landing';
import { Box, Typography, Link } from '@mui/material';

import HotelsList from 'components/HotelsList';

const FavoriteHotels: FC = () => {
  const [favorites, setFavorites] = useState<HotelData[]>([]);

  useEffect(() => {
    const favHotels = JSON.parse(localStorage.getItem('favorites'));
    if (favHotels) {
      setFavorites(favHotels);
    }
  }, []);

  return (
    <Box>
      <Typography variant='h5'>Your Favorite hotels</Typography>
      <HotelsList hotels={favorites} loading={false} />
    </Box>
  );
};

export default FavoriteHotels;
