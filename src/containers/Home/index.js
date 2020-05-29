import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
// components
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';
import ProductThumb from '../../components/Product/Thumbnail';

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>SehatQ - Home</title>
      </Helmet>
      <TopBar/>

      <Container>
        <ProductThumb/>
      </Container>

      <NavBar/>
    </React.Fragment>
  );
}

export default Home;