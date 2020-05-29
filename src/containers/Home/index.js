import React from 'react';
import { Helmet } from 'react-helmet';
// components
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>SehatQ - Home</title>
      </Helmet>
      <TopBar/>
      <h1>Home</h1>
      <NavBar/>
    </React.Fragment>
  );
}

export default Home;