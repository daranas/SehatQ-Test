import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchProducts } from '../../actions/product';
// components
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';
import CategoryThumb from '../../components/Category';
import ProductThumb from '../../components/Product/Thumbnail';

const Home = () => {
  const setData = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if(!localStorage.getItem('loggedIn')){
      history.push({
        pathname: '/auth',
      });
    }
  },[]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>SehatQ - Home</title>
      </Helmet>
      
      <Container>
        <TopBar/>
        <CategoryThumb categories={setData.products}/>
        <ProductThumb products={setData.products} />
      </Container>
      <NavBar/>
    </React.Fragment>
  );
}

export default Home;