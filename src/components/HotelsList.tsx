import { FC } from 'react';
import { useGlobalState } from 'context';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { sortHotelsBy } from './helperFunctions/sortBy';
import HotelCard from './Reusables/HotelCard';
import { Theme } from '../types';

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
        <Typography className={classes.error}>
          There are no hotels found based on your search phrase. Please try again.
        </Typography>
      )}
    </Box>
  );
};

export default HotelsList;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: '2rem 0',
    width: '100%',
    maxWidth: '60rem',
    justifyContent: 'space-between',
    minHeight: 'calc(100vh - 22rem)',
  },
  error: {
    color: theme.palette.error.main,
    textAlign: 'center',
  },
}));
