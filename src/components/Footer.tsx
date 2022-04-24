import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowUpwardOutlined } from '@material-ui/icons';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    width: '100%',
    backgroundColor: 'lightgray',
    height: '5.5rem',
  },
  footerText: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '1rem',
    color: 'gray',
    height: '100%',
    maxWidth: '70rem',
    margin: '0 auto',
  },
  backToTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
});

export const Footer: FC = () => {
  const classes = useStyles();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box className={classes.footer}>
      <Box
        className={classes.footerText}
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        <Typography variant='subtitle2'> &copy; 2022 FindYourStay. All rights reserved.</Typography>
        <Box className={classes.backToTop} onClick={scrollToTop}>
          <Typography variant='subtitle2'>Back to top </Typography>
          <ArrowUpwardOutlined fontSize='medium' />
        </Box>
      </Box>
    </Box>
  );
};
