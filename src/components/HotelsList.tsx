import { FC, useState, useEffect } from 'react';
import HotelCard from './Reusables/HotelCard';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { HotelData } from 'pages/Landing';

export interface Props {
  hotels: HotelData[];
  loading: boolean;
}

const useStyles = makeStyles({
  container: {
    margin: '2rem 0',
    width: '100%',
    maxWidth: '60rem',
    justifyContent: 'space-between',
  },
});

const HotelsList: FC<Props> = ({ hotels, loading }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {hotels.length > 0 ? (
        hotels.map((hotel) => <HotelCard key={hotel.name} hotel={hotel} />)
      ) : loading ? (
        Array(3)
          .fill(null)
          .map((_, index) => {
            return <HotelCard key={index} loading={loading} />;
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
