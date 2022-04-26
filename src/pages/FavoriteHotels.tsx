import { FC, useState, useEffect } from 'react';
import { useGlobalState } from 'context';
import { makeStyles } from '@mui/styles';
import { HotelData } from '../types';
import { Box, Typography } from '@mui/material';
import HotelCard from '../components/Reusables/HotelCard';
import CustomButton from 'components/Reusables/CustomButton';

const FavoriteHotels: FC = () => {
  const classes = useStyles();
  const [favorites, setFavorites] = useState<HotelData[]>([]);
  const [state] = useGlobalState();
  const { hotels } = state;

  useEffect(() => {
    const favHotels = hotels.filter((h) => h.favorite);
    if (favHotels.length > 0) {
      setFavorites(favHotels);
    } else setFavorites([]);
  }, [hotels]);

  return (
    <Box className={classes.container} sx={{ padding: { xs: '1rem', md: '0' } }}>
      <CustomButton path='/' text='Go back' />
      <Typography variant='h4' sx={{ fontSize: { xs: '1.4rem', md: '2rem' } }} className={classes.text}>
        {favorites.length > 0 ? 'Your Favorites:' : 'There are no favorite hotels selected at the moment'}
      </Typography>
      {favorites.length > 0 && favorites.map((hotel) => <HotelCard key={hotel.name} hotel={hotel} />)}
    </Box>
  );
};

export default FavoriteHotels;

const useStyles = makeStyles({
  container: {
    margin: '2rem auto',
    width: '100%',
    maxWidth: '60rem',
    justifyContent: 'space-between',
    minHeight: 'calc(100vh - 15.5rem)',
  },
  text: {
    textAlign: 'center',
    paddingTop: '1rem',
  },
});
