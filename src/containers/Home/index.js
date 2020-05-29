import React from 'react';
import { Helmet } from 'react-helmet';
// components
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>SehatQ - Home</title>
      </Helmet>
      <h1>Home</h1>
      <Navbar/>
    </React.Fragment>
  );
}

export default Home;