import { useState, useEffect, FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import SearchBar from 'material-ui-search-bar';
import SortSelector from './SortSelector';
import { HotelData } from 'pages/Landing';

const useStyles = makeStyles({
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    gap: '2rem',
  },
});

interface Props {
  hotels: HotelData[];
  setHotels: any;
  availableHotels: HotelData[];
}

const SearchAndSortBar: FC<Props> = ({ hotels, setHotels, availableHotels }) => {
  const [searched, setSearched] = useState<string>('');
  const [selection, setSelection] = useState<string>('');
  const classes = useStyles();

  const sortHotelsBy = (hotels: HotelData[], sortBy: string) => {
    if (sortBy === 'priceLowToHigh') {
      return hotels.sort((a, b) => a.price_eur - b.price_eur);
    } else if (sortBy === 'priceHighToLow') {
      return hotels.sort((a, b) => b.price_eur - a.price_eur);
    } else if (sortBy === 'nameAToZ') {
      return hotels.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
    } else if (sortBy === 'nameZToA') {
      return hotels.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1));
    } else return hotels;
  };

  useEffect(() => {
    const sortedHotels = sortHotelsBy(hotels, selection);
    setHotels([...sortedHotels]);
  }, [selection]);

  const requestSearch = (searchedVal: string) => {
    const filteredHotels = availableHotels.filter((hotel) => {
      return hotel.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    const sortedHotels = sortHotelsBy(filteredHotels, selection);
    setHotels([...sortedHotels]);
  };

  const cancelSearch = () => {
    setSearched('');
    requestSearch(searched);
  };

  return (
    <Box className={classes.searchBox}>
      <SearchBar
        style={{ width: '30rem' }}
        value={searched}
        onChange={(searchVal: string) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
      />
      <SortSelector selection={selection} setSelection={setSelection} />
    </Box>
  );
};

export default SearchAndSortBar;
