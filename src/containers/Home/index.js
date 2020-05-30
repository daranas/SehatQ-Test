import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
// components
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';
import CategoryThumb from '../../components/Category';
import ProductThumb from '../../components/Product/Thumbnail';
// helpers
import API from '../../helpers/Api';

const Home = () => {
  const [products, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await API.get(`/home`);
      const { data } = response.data[0];
      setProduct(data.productPromo);
      setCategory(data.category);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>SehatQ - Home</title>
      </Helmet>
      
      <Container>
        <TopBar/>
        <CategoryThumb categories={category}/>
        <ProductThumb products={products} />
      </Container>
      <NavBar/>
    </React.Fragment>
  );
}

export default Home;