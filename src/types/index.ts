export interface HotelData {
  name: string;
  address: string;
  city: string;
  country: string;
  image: string;
  price_eur: number;
  rating?: number;
  favorite?: boolean;
}

export interface Theme {
  typography: {
    fontFamily: string;
  };
  palette: {
    primary: {
      light: string;
      main: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
    };
    warning: {
      light: string;
      main: string;
    };
    error: {
      main: string;
    };
  };
}
