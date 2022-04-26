import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { ArrowUpwardOutlined } from '@material-ui/icons';
import { Theme } from '../types';

const Footer: FC = () => {
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

export default Footer;

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    height: '5.5rem',
  },
  footerText: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '1rem',
    color: theme.palette.primary.light,
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
}));
