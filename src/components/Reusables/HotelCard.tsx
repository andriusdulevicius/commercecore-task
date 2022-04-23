import { FC, useState, useEffect } from 'react';
import { HotelData } from '../../pages/Landing';
import { Paper, Grid, Box, Typography, Link } from '@mui/material';
import { ArrowRight } from '@material-ui/icons';
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
    marginTop: '1rem',
    borderRadius: '1rem',
    overflow: 'hidden',
    padding: 0,
    maxHeight: '16rem',
    backgroundColor: '#FFF',
  },
  skeleton: {
    backgroundColor: '#EEE',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    minWidth: '65%',
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
          <Image src={image} minWidth='30%' />
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
              <Typography>
                <Typography variant='caption' fontSize='1rem' className={classes.grayText}>
                  From{' '}
                </Typography>
                <Typography variant='caption' fontSize='1.6rem' fontWeight={700} className={classes.blackText}>
                  ${price_eur && getPrice(period, price_eur)}
                </Typography>
                <PeriodSelector period={period} setPeriod={setPeriod} />
              </Typography>
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
