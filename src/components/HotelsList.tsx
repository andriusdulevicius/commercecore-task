import { FC } from 'react';
import HotelCard from './Reusables/HotelCard';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { HotelData } from '../types';
import { useGlobalState } from 'context';

const useStyles = makeStyles({
  container: {
    margin: '2rem 0',
    width: '100%',
    maxWidth: '60rem',
    justifyContent: 'space-between',
    minHeight: 'calc(100vh - 22rem)',
  },
});

// TODO: Extract
const sortHotelsBy = (hotels: HotelData[], filter: string) => {
  if (filter === 'priceLowToHigh') {
    return hotels.sort((a, b) => a.price_eur - b.price_eur);
  } else if (filter === 'priceHighToLow') {
    return hotels.sort((a, b) => b.price_eur - a.price_eur);
  } else if (filter === 'nameAToZ') {
    return hotels.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
  } else if (filter === 'nameZToA') {
    return hotels.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1));
  } else return hotels;
};

const HotelsList: FC = () => {
  const classes = useStyles();

  const [{ hotels, query, filter, loading }] = useGlobalState();
  const filteredHotels = hotels?.filter((hotel) => hotel.name.toLowerCase().includes(query.toLowerCase()));
  const sortedHotels = sortHotelsBy(filteredHotels, filter);

  return (
    <Box className={classes.container}>
      {sortedHotels?.length > 0 ? (
        sortedHotels.map((hotel) => <HotelCard key={hotel.name} hotel={hotel} />)
      ) : loading ? (
        Array(3)
          .fill(null)
          .map((_, index) => {
            return <HotelCard key={index} />;
          })
      ) : (
        <Typography color={'error'} textAlign='center'>
          There are no hotels found based on your search phrase. Please try again.
        </Typography>
      )}
    </Box>
  );
};

export default HotelsList;
