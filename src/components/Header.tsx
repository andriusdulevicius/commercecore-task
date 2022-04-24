import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  hero: {
    background: '#f3b963cf',
    width: '100%',
    height: '6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 1rem',
    margin: '0',
    color: '#FFF',
  },
});

const Header: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>
        <Typography variant='h4' component='div'>
          FIND YOUR STAY
        </Typography>
      </Box>
    </>
  );
};

export default Header;
