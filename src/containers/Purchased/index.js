import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
// components
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';
import ProductList from '../../components/Product/Lists';

const Purchased = () => {
  const setData = useSelector(state => state.purchasedReducer);

  return (
    <React.Fragment>
      <Helmet>
        <title>SehatQ - Purchased</title>
      </Helmet>
      
      <Container>
        <TopBar withBack={true}/>
        <ProductList products={setData} />
      </Container>
      <NavBar/>
    </React.Fragment>
  );
}

export default Purchased;