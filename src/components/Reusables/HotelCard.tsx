import { FC, useState } from 'react';
import { useGlobalState } from '../../context';
import { HotelData } from '../../types';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { ArrowRight, FavoriteBorderOutlined } from '@material-ui/icons';
import { Image } from 'mui-image';
import { Link } from 'react-router-dom';
import Ratings from './Ratings';
import PeriodSelector from './PeriodSelector';
import { Theme } from '../../types';

interface Props {
  hotel?: HotelData;
}

const HotelCard: FC<Props> = ({ hotel = {} }) => {
  const { name, address, city, country, image, price_eur, rating = 5, favorite = false } = hotel;
  const classes = useStyles();
  const [state, setState] = useGlobalState();
  const [period, setPeriod] = useState<string>('perNight');
  const [isFavorite, setIsFavorite] = useState<boolean>(favorite);
  const { hotels, loading } = state;

  const getPrice = (period: string, price_eur: number) => {
    if (period === 'perWeek') {
      return (7 * price_eur).toFixed(2);
    } else if (period === 'perTwoWeeks') {
      return (14 * price_eur).toFixed(2);
    } else return price_eur;
  };

  const handleFavorites = () => {
    const newHotels = hotels.map((curr) => (curr.name === name ? { ...curr, favorite: !favorite } : curr));
    setIsFavorite(!favorite);
    setState({ ...state, hotels: newHotels });
  };

  const seeDetailsLink = name ? '/' + name.toLowerCase().split(' ').slice(0, 2).join('-') : '/';

  return (
    <Box
      className={`${classes.card} ${loading && classes.skeleton}`}
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        minHeight: { xs: '28rem', sm: '15rem' },
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
            <FavoriteBorderOutlined style={{ color: isFavorite ? 'red' : 'gray' }} />
          </Box>
          <Box className={classes.textContainer} sx={{ padding: { xs: '1rem', sm: '2rem 2rem 1rem' } }}>
            <Typography variant='h5' sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
              {name}
            </Typography>
            <Typography
              variant='subtitle1'
              className={classes.grayText}
            >{`${address}, ${city}, ${country}`}</Typography>
            <Ratings rating={rating} />
            <Box className={classes.flex}>
              <Box>
                <Typography className={classes.grayText} fontSize='1rem' variant='caption'>
                  From{' '}
                </Typography>
                <Typography className={classes.priceTag} variant='caption' fontSize='1.6rem'>
                  ${price_eur && getPrice(period, price_eur)}
                </Typography>
                <PeriodSelector period={period} setPeriod={setPeriod} />
              </Box>

              <Link to={seeDetailsLink} className={classes.flex + ' ' + classes.link}>
                <Typography variant='caption' className={classes.detailsLink} fontSize='1rem'>
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

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    display: 'flex',
    position: 'relative',
    marginTop: '1rem',
    borderRadius: '1rem',
    overflow: 'hidden',
    padding: 0,
    backgroundColor: theme.palette.secondary.light,
  },
  favorite: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '1.5rem',
    padding: '0.7rem',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: 'transform 0.2s ease-in-out',
    '&:active': {
      transform: 'scale(1.1)',
    },
  },
  skeleton: {
    backgroundColor: theme.palette.secondary.light,
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
    color: theme.palette.secondary.dark,
  },
  priceTag: {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  link: {
    alignItems: 'center',
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  detailsLink: {
    textDecoration: 'none',
  },
}));
