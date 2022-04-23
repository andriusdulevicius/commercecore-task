import { FC, useState } from 'react';
import { HotelData } from '../../pages/Landing';
import { Box, Typography, Link } from '@mui/material';
import { ArrowRight, FavoriteBorderOutlined } from '@material-ui/icons';
import { Image } from 'mui-image';
import { makeStyles } from '@mui/styles';
import PeriodSelector from './PeriodSelector';
import { Ratings } from './Ratings';

interface Props {
  hotel?: HotelData;
  loading?: boolean;
}

const useStyles = makeStyles({
  card: {
    display: 'flex',
    position: 'relative',
    marginTop: '1rem',
    borderRadius: '1rem',
    overflow: 'hidden',
    padding: 0,
    maxHeight: '15rem',
    backgroundColor: '#FFF',
  },
  favorite: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '1.5rem',
    left: '18rem',
    padding: '0.7rem',
    borderRadius: '50%',
    backgroundColor: 'lightgray',
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: 'transform 1s ease',
    '&:active': {
      transform: 'scale(1.2)',
    },
  },

  skeleton: {
    backgroundColor: '#EEE',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    minWidth: '62%',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '0.5rem',
  },
  grayText: {
    color: 'gray',
  },
  blackText: {
    color: '#000',
  },
});

const HotelCard: FC<Props> = ({ hotel = {}, loading }) => {
  const { name, address, city, country, image, price_eur } = hotel;
  const classes = useStyles();
  const [period, setPeriod] = useState<string>('perNight');
  const [favorite, setFavorite] = useState<boolean>(false);

  const getPrice = (period: string, price_eur: number) => {
    if (period === 'perWeek') {
      return 7 * price_eur;
    } else if (period === 'perTwoWeeks') {
      return 14 * price_eur;
    } else return price_eur;
  };

  return (
    <Box className={`${classes.card} ${loading && classes.skeleton}`}>
      {!loading && (
        <>
          <Image src={image} style={{ minHeight: '100%' }} />
          <Box className={classes.favorite} onClick={() => setFavorite((prevState) => !prevState)}>
            {favorite ? (
              <FavoriteBorderOutlined style={{ color: 'red' }} />
            ) : (
              <FavoriteBorderOutlined style={{ color: 'gray' }} />
            )}
          </Box>
          <Box className={classes.textContainer}>
            <Typography variant='h5' fontSize='1.6rem'>
              {name}
            </Typography>
            <Typography
              variant='subtitle1'
              fontSize='1rem'
              className={classes.grayText}
            >{`${address}, ${city}, ${country}`}</Typography>
            <Ratings rating={4} />
            <Box className={classes.flex}>
              <Box>
                <Typography variant='caption' fontSize='1rem' className={classes.grayText}>
                  From{' '}
                </Typography>
                <Typography variant='caption' fontSize='1.6rem' fontWeight={700} className={classes.blackText}>
                  ${price_eur && getPrice(period, price_eur)}
                </Typography>
                <PeriodSelector period={period} setPeriod={setPeriod} />
              </Box>
              <Link href='/' color='#000' underline='none' className={classes.flex}>
                <Typography variant='caption' style={{ textDecoration: 'none', fontSize: '1rem' }}>
                  See details
                </Typography>
                <ArrowRight fontSize='large' />
              </Link>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default HotelCard;
