import { HotelData } from '../../types';

export const sortHotelsBy = (hotels: HotelData[], filter: string) => {
  if (filter === 'priceLowToHigh') {
    return hotels.sort((a, b) => a.price_eur - b.price_eur);
  } else if (filter === 'priceHighToLow') {
    return hotels.sort((a, b) => b.price_eur - a.price_eur);
  } else if (filter === 'nameAToZ') {
    return hotels.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
  } else if (filter === 'nameZToA') {
    return hotels.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1));
  } else return hotels;
};
