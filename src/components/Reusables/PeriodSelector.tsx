import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Select, MenuItem, FormControl } from '@mui/material';

interface Props {
  period: string;
  setPeriod: (value: string) => void;
}

const PeriodSelector: FC<Props> = ({ period, setPeriod }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <FormControl className={classes.formControl} variant='standard'>
        <Select id='period-select' value={period} onChange={(e) => setPeriod(e.target.value)}>
          <MenuItem value='perNight'>Per Night</MenuItem>
          <MenuItem value='perWeek'>Per 7 Nights</MenuItem>
          <MenuItem value='perTwoWeeks'>Per 14 Nights</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PeriodSelector;

const useStyles = makeStyles({
  wrapper: {
    marginTop: '1rem',
  },
  formControl: {
    margin: '1rem',
    minWidth: '120px',
  },
});
