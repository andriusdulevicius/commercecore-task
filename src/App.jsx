import React from 'react';
import './Globals.css';
import GlobalProvider from './context';
import Landing from 'pages/Landing';
import Header from 'components/Header';
import { Footer } from 'components/Footer';

export default function App() {
  return (
    <div className='App'>
      <GlobalProvider>
        <Header />
        <Landing />
        <Footer />
      </GlobalProvider>
    </div>
  );
}
