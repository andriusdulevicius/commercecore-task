import { createContext, useState, useContext, FC, ReactNode, useEffect } from 'react';
import { HotelData } from '../types';
import { getHotelsData } from './../data/getHotels';

interface Props {
  children: ReactNode;
}

interface State {
  hotels: HotelData[];
  filter: string;
  query: string;
  loading: boolean;
}

type GlobalContextType = [State, (arg1: State) => void];

const initialState = {
  hotels: [],
  filter: '',
  query: '',
  loading: true,
};

export const GlobalContext = createContext<GlobalContextType>([initialState, () => {}]);

const GlobalProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>(initialState);

  // Since fetching from local .json file, I set timeout to mock a pause usually caused by fetching from outside DB, so I could implement skeleton cards in my project

  // SET INITIAL STATE
  useEffect(() => {
    const globalLocalStorage = localStorage?.getItem('globalState');
    const data = globalLocalStorage && JSON.parse(globalLocalStorage);

    if (!data) {
      setTimeout(() => {
        getHotelsData().then((hotelsFromDB) => {
          setState({ ...state, hotels: hotelsFromDB, loading: false });
        });
      }, 1000);
    }
    if (!!data?.hotels?.length) {
      setState({ ...state, loading: true });
      setTimeout(() => {
        setState({ ...data, loading: false });
      }, 1000);
    }
  }, []);

  // POST CHANGES
  useEffect(() => {
    localStorage.setItem('globalState', JSON.stringify(state));
  }, [state]);

  const contextValue: GlobalContextType = [state, setState];

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
