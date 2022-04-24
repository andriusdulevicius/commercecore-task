import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import HotelsList from '../components/HotelsList';
import SearchAndSortBar from 'components/Searchbar/SearchAndSortBar';
import { useGlobalState } from 'context';

export interface HotelData {
  name: string;
  address: string;
  city: string;
  country: string;
  image: string;
  price_eur: number;
  rating?: number;
}

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
  },
});

const Landing = () => {
  // const [hotels, setHotels] = useState<HotelData[]>([]);
  // const [availableHotels, setAvailableHotels] = useState<HotelData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [state, setState] = useGlobalState();
  const { hotels } = state;

  const classes = useStyles();

  const getData = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/hotels.json`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    // adding delay to imitate real world scenario where data is fetched from external source
    setTimeout(() => {
      getData().then((data) => {
        setLoading(false);
        setState(data);
      });
    }, 1500);
  }, []);

  return (
    <>
      <Box className={classes.main}>
        <SearchAndSortBar hotels={hotels} setHotels={setHotels} availableHotels={availableHotels} />
        <HotelsList hotels={hotels} loading={loading} />
      </Box>
    </>
  );
};

export default Landing;
