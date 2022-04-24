import { FC, useState } from 'react';
import { HotelData } from '../../pages/Landing';
import { Box, Typography, Link } from '@mui/material';
import { ArrowRight, FavoriteBorderOutlined } from '@material-ui/icons';
import { Image } from 'mui-image';
import { makeStyles } from '@mui/styles';
import PeriodSelector from './PeriodSelector';
import { Ratings } from './Ratings';
import { useGlobalState } from '../../context';

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
    height: '15rem',
    backgroundColor: '#FFF',
  },
  favorite: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '1.5rem',
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
    width: '100%',
  },
  flex: {
    justifySelf: 'baseline',
    display: 'flex',
    alignItems: 'flex-end',
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
  const { name, address, city, country, image, price_eur, rating = 5 } = hotel;
  const classes = useStyles();
  const [period, setPeriod] = useState<string>('perNight');
  const [favorite, setFavorite] = useState<boolean>(false);
  const [state, setState] = useGlobalState();

  const getPrice = (period: string, price_eur: number) => {
    if (period === 'perWeek') {
      return (7 * price_eur).toFixed(2);
    } else if (period === 'perTwoWeeks') {
      return (14 * price_eur).toFixed(2);
    } else return price_eur;
  };

  const handleFavorites = async () => {
    await setFavorite((prevState) => !prevState);
    if (favorite) {
      const newArr = [...state.favorites].push(hotel);
      setState({ ...state, favorites: newArr });
    }
    if (!favorite) {
      const newArr = state.favorites.map((favH: HotelData) => favH.name !== hotel.name);
      setState({ ...state, favorites: newArr });
    }
  };

  return (
    <Box
      className={`${classes.card} ${loading && classes.skeleton}`}
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        height: 'auto',
      }}
    >
      {!loading && (
        <>
          <Box
            sx={{
              height: { xs: '13rem', sm: '18rem' },
              minWidth: { xs: '100%', sm: '18rem' },
              maxWidth: { xs: '100%', sm: '18rem' },
            }}
          >
            <Image src={image} />
          </Box>
          <Box
            className={classes.favorite}
            sx={{ right: { xs: '1rem', sm: '29rem', md: '43rem' } }}
            onClick={handleFavorites}
          >
            {favorite ? (
              <FavoriteBorderOutlined style={{ color: 'red' }} />
            ) : (
              <FavoriteBorderOutlined style={{ color: 'gray' }} />
            )}
          </Box>
          <Box className={classes.textContainer} sx={{ padding: { xs: '1rem', sm: '2rem 2rem 1rem 2rem' } }}>
            <Typography variant='h5' fontSize='1.6rem'>
              {name}
            </Typography>
            <Typography
              variant='subtitle1'
              fontSize='1rem'
              className={classes.grayText}
            >{`${address}, ${city}, ${country}`}</Typography>
            <Ratings rating={rating} />
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
              <Link href='/' color='#000' underline='none' className={classes.flex} alignItems='center'>
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
