import { createTheme } from '@mui/material/styles';
import { primary, secondary, orange, bgcOrange, gray, darkGray, danger, white } from './colors';

const theme = createTheme({
  typography: { fontFamily: 'Noto Sans' },
  palette: {
    primary: { light: gray, main: primary },
    secondary: { light: white, main: secondary, dark: darkGray },
    warning: { light: bgcOrange, main: orange },
    error: { main: danger },
  },
});

export default theme;
