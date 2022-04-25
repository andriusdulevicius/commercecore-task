import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import SearchBar from 'material-ui-search-bar';
import { useGlobalState } from 'context';

const useStyles = makeStyles({
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    width: '100%',
    maxWidth: '60rem',
  },
  wrapper: {
    minWidth: '10rem',
    height: '100%',
  },
  formControl: {},
});

const SearchAndSortBar: FC = () => {
  const classes = useStyles();
  const [state, setState] = useGlobalState();
  const { query, filter = '' } = state;

  const cancelSearch = () => {
    setState({ ...state, query: '' });
  };

  return (
    <Box className={classes.searchBox} sx={{ gap: { sm: '1rem', md: '2rem' } }}>
      <SearchBar
        style={{ width: '70%' }}
        value={query}
        onChange={(searchVal: string) => setState({ ...state, query: searchVal })}
        onCancelSearch={() => cancelSearch()}
      />
      <Box className={classes.wrapper}>
        <FormControl className={classes.formControl} variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Sort By:</InputLabel>
          <Select id='selection' value={filter} onChange={(e) => setState({ ...state, filter: e.target.value })}>
            <MenuItem value=''></MenuItem>
            <MenuItem value='priceLowToHigh'>Price (low to high)</MenuItem>
            <MenuItem value='priceHighToLow'>Price (high to low)</MenuItem>
            <MenuItem value='nameAToZ'>Name (A to Z)</MenuItem>
            <MenuItem value='nameZToA'>Name (Z to A)</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SearchAndSortBar;
