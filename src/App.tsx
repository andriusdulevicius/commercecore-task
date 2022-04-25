import { FC } from 'react';
import './Globals.css';
import GlobalProvider from './context';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/Header';
import Layout from './pages/Layout';
import Footer from 'components/Footer';

const App: FC = () => {
  return (
    <div className='App'>
      <Router>
        <GlobalProvider>
          <Header />
          <Layout />
          <Footer />
        </GlobalProvider>
      </Router>
    </div>
  );
};

export default App;
