import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from 'pages/Landing';
import FavoriteHotels from 'pages/FavoriteHotels';
import Hotel from 'pages/Hotel';
import { useGlobalState } from 'context';

const Layout: FC = () => {
  const [{ hotels }] = useGlobalState();

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/favorites' element={<FavoriteHotels />} />
      {hotels &&
        hotels.map((hotel, index) => {
          const linkToHotel = hotel.name ? hotel.name.toLowerCase().split(' ').slice(0, 2).join('-') : '/';

          return <Route path={linkToHotel} element={<Hotel hotel={hotel} />} key={index} />;
        })}
    </Routes>
  );
};

export default Layout;
