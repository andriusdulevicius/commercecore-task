import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Image } from 'mui-image';
import { HotelData } from './../types/index';
import CustomButton from 'components/Reusables/CustomButton';
import Ratings from 'components/Reusables/Ratings';
import { Theme } from '../types';

interface Props {
  hotel: HotelData;
}

const Hotel: FC<Props> = ({ hotel }) => {
  const classes = useStyles();
  const { name, address, city, country, image, price_eur, rating = 5 } = hotel;

  return (
    <Box className={classes.container}>
      <Box className={classes.img}>
        <Image src={image} />
      </Box>
      <Box className={classes.main} sx={{ margin: { xs: '1rem auto', sm: '5rem auto' } }}>
        <CustomButton path='/' text='Go back' />
        <Box className={classes.flexContainer} sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
          <Box className={classes.textBox}>
            <Typography variant='h3' className={classes.text} sx={{ fontSize: { xs: '2.2rem', sm: '2.6rem' } }}>
              {name}
            </Typography>
            <Typography variant='subtitle1' className={classes.text}>
              {address}, {city}, {country}
            </Typography>
            <Box className={classes.priceTag}>
              <Typography variant='h4' sx={{ fontSize: { xs: '2rem', sm: '2.4rem' } }}>
                {' '}
                From ${price_eur}
              </Typography>
              <Ratings rating={rating} />
            </Box>
          </Box>
          <Box className={classes.pictureFrame}>
            <Image src={image} />
          </Box>
        </Box>
        <Typography variant='subtitle1'>About the place:</Typography>
        <Typography variant='subtitle2' className={classes.about}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quod placeat cum temporibus eum quibusdam
          dolorem ad libero iste perferendis at qui suscipit nihil ex nesciunt odio dicta magni voluptatem provident
          deleniti minima recusandae maxime rerum. Accusamus qui itaque repellat laborum a magni mollitia? Maxime cumque
          explicabo facere. Cum tempore aliquam vero in incidunt, alias rem sunt asperiores beatae magni temporibus
          unde! Alias eius saepe est error. Qui voluptatem eos ipsa quasi tempore in quaerat est error dolorem quam.
          Doloribus hic omnis veritatis dignissimos harum accusamus modi, odio ut sunt vero facere expedita ipsum
          adipisci eum a cupiditate. Corporis, dolores?
        </Typography>
        <Typography variant='subtitle2' className={classes.about}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quod placeat cum temporibus eum quibusdam
          dolorem ad libero iste perferendis at qui suscipit nihil ex nesciunt odio dicta magni voluptatem provident
          deleniti minima recusandae maxime rerum. Accusamus qui itaque repellat laborum a magni mollitia? Maxime cumque
          explicabo facere. Cum tempore aliquam vero in incidunt, alias rem sunt asperiores beatae magni temporibus
          unde! Alias eius saepe est error. Qui voluptatem eos ipsa quasi tempore in quaerat est error dolorem quam.
          Doloribus hic omnis veritatis dignissimos harum accusamus modi, odio ut sunt vero facere expedita ipsum
          adipisci eum a cupiditate. Corporis, dolores?
        </Typography>
      </Box>
    </Box>
  );
};

export default Hotel;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    margin: '0 auto',
    padding: '1rem',
    width: '100%',
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
  },
  main: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '2rem',
    padding: '1rem',
    maxWidth: '60rem',
  },
  text: {
    paddingTop: '1rem',
    color: theme.palette.primary.light,
  },
  textBox: {
    width: '60%',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  pictureFrame: {
    maxWidth: '22rem',
    maxHeight: '22rem',
    borderRadius: '2rem',
    overflow: 'hidden',
    padding: '0',
    border: `5px solid ${theme.palette.warning.main}`,
  },
  priceTag: {
    flexDirection: 'column',
    margin: '2rem 0',
  },
  about: {
    color: theme.palette.primary.light,
  },
}));
