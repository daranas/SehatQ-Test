import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
// components
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';
import CategoryThumb from '../../components/Category';
import ProductThumb from '../../components/Product/Thumbnail';

const useStyles = createUseStyles({
  mainWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 640,
    background: '#ffffff',
    padding: '0 18px 70px'
  }
})

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        <title>SehatQ - Home</title>
      </Helmet>
      <div className={classes.mainWrapper}>
        <TopBar/>
        <CategoryThumb/>
        <Container>
          <ProductThumb/>
        </Container>

        <NavBar/>
      </div>
    </React.Fragment>
  );
}

export default Home;