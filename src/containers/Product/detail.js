import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Image, Button } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import { getPurchased } from '../../actions/purchased';
import { getWishlist } from '../../actions/wishlist';
// components
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';

const useStyles = createUseStyles({
  cardDetail: {
    width: '100%!important',
    boxShadow: 'none!important'
  },
  productDesc: {
    textAlign: 'justify',
    marginTop: '10px!important',
    lineHeight: 1.6
  }
});

const DetailProduct = ({ match }) => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const setData = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const {
    params: { productId },
  } = match;

  useEffect(() => {
    const { productPromo } = setData.products;
    const getProduct = productPromo.find(product => product.id === productId);
    setProduct(getProduct);
  },[]);

  const buyProduct = () => {
    dispatch(getPurchased(product));
  }

  const setFavourite = () => {
    dispatch(getWishlist(product));
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>SehatQ - Detail Product</title>
      </Helmet>
      
      <Container>
        <TopBar withBack={true}/>
        <Card className={classes.cardDetail}>
          <Image src={product.imageUrl} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>
              <span>{product.price}</span>
            </Card.Meta>
            <p className={classes.productDesc}>{product.description}</p>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green' onClick={buyProduct}>
                Buy
              </Button>
              <Button basic color='red' onClick={setFavourite}>
                Favourite
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Container>
      <NavBar/>
    </React.Fragment>
  );
}

export default DetailProduct;