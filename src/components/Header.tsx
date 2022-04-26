import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomButton from './Reusables/CustomButton';
import { Theme } from '../types';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>
        <Box className={classes.container} sx={{ padding: { md: '2rem 0' } }}>
          <Typography
            variant='h4'
            sx={{
              fontSize: {
                xs: '1.5rem',
                md: '2.2rem',
              },
            }}
          >
            <Link to='/' className={classes.link}>
              FIND YOUR STAY
            </Link>
          </Typography>
          <CustomButton path='/favorites' text='Favorites' backgroundColor='#FFA500' />
        </Box>
      </Box>
    </>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    background: theme.palette.warning.light,
    width: '100%',
    height: '6rem',
  },
  container: {
    maxWidth: '60rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 1rem',
    margin: '0 auto',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.light,
  },
}));
