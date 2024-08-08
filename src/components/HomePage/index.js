import React from 'react';
import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';

import S from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={S.container}>
      <Navbar />
      <div className={S['container-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
