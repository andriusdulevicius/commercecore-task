import React from 'react';
import { Box } from '@mui/material';
import { Star } from '@material-ui/icons';
import { makeStyles } from '@mui/styles';

interface Props {
  rating: number;
}

const useStyles = makeStyles({
  starContainer: {
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '0.1rem',
    margin: '0.4rem 0',
    padding: '0.2rem',
    height: '1.9rem',
    backgroundColor: 'orange',
    borderRadius: '0.5rem',
  },
});

export const Ratings: React.FC<Props> = ({ rating }) => {
  const classes = useStyles();

  const starsWidth: string = rating * 1.6 + 'rem';

  return (
    <Box className={classes.starContainer} width={starsWidth}>
      {[...Array(rating)].map((_, index: number) => (
        <Box key={index} display='inline-block' color='white'>
          <Star color='inherit' />
        </Box>
      ))}
    </Box>
  );
};
