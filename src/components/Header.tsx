import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomButton from './Reusables/CustomButton';

const useStyles = makeStyles({
  hero: {
    background: '#f3b963cf',
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
    color: '#FFF',
  },
});

const Header: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>
        <Box className={classes.container} sx={{ padding: { md: '2rem 0' } }}>
          <Typography
            variant={'h4'}
            component='div'
            sx={{
              fontSize: {
                xs: '1.5rem',
                md: '2.2rem',
              },
            }}
          >
            FIND YOUR STAY
          </Typography>
          <CustomButton path='/favorites' text='Favorites' backgroundColor='orange' />
        </Box>
      </Box>
    </>
  );
};

export default Header;
