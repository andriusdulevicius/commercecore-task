import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Select, InputLabel, MenuItem, FormControl } from '@mui/material';

interface Props {
  selection: string;
  setSelection: (value: string) => void;
}

const SortSelector: FC<Props> = ({ selection, setSelection }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Sort By:</InputLabel>
        <Select id='selection' value={selection} onChange={(e) => setSelection(e.target.value)}>
          <MenuItem value=''></MenuItem>
          <MenuItem value='priceLowToHigh'>Price (low to high)</MenuItem>
          <MenuItem value='priceHighToLow'>Price (high to low)</MenuItem>
          <MenuItem value='nameAToZ'>Name (A to Z)</MenuItem>
          <MenuItem value='nameZToA'>Name (Z to A)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelector;

const useStyles = makeStyles({
  wrapper: {
    minWidth: '10rem',
    height: '100%',
  },
});
