import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
// components
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';
// helpers

const DetailProduct = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>SehatQ - Detail Product</title>
      </Helmet>
      
      <Container>
        <TopBar/>
      </Container>
      <NavBar/>
    </React.Fragment>
  );
}

export default DetailProduct;