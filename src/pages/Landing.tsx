import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import HotelsList from '../components/HotelsList';
import SearchAndSortBar from 'components/Searchbar/SearchAndSortBar';

const Landing: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.main}>
        <SearchAndSortBar />
        <HotelsList />
      </Box>
    </>
  );
};

export default Landing;

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
  },
});
