import { createContext, useState, useContext, FC, ReactNode, useEffect } from 'react';
import { HotelData } from '../types';

interface Props {
  children: ReactNode;
}

interface State {
  hotels: HotelData[];
}

type GlobalContextType = [State, (arg1: State) => void];

const initialState = {
  hotels: [],
};

export const GlobalContext = createContext<GlobalContextType>([initialState, () => {}]);

const GlobalProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>(initialState);
  const { hotels } = state;

  // SET INITIAL STATE
  useEffect(() => {
    const hotelsInLocalStorage = localStorage?.getItem('hotels');
    if (hotelsInLocalStorage) {
      setState(JSON.parse(hotelsInLocalStorage));
    }
  }, []);

  // POST CHANGES
  useEffect(() => {
    localStorage.setItem('hotels', JSON.stringify(hotels));
  }, [hotels]);

  const contextValue: GlobalContextType = [state, setState];

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
