import { FC } from 'react';
import GlobalProvider from './context';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import './Globals.css';
import Header from 'components/Header';
import Layout from './pages/Layout';
import Footer from 'components/Footer';

const App: FC = () => {
  return (
    <div className='App'>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalProvider>
            <Header />
            <Layout />
            <Footer />
          </GlobalProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
