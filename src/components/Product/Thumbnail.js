import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  cardLink: {
    display: 'block',
    marginBottom: 24
  },
  cardProduct: {
    width: '100%!important',
    marginTop: 10,
  },
  cardContent: {
    position: 'relative'
  },
  cardPrice: {
    marginTop: 3
  },
  cardFav: {
    fontSize: 22,
    position: 'absolute',
    top: 24,
    right: 14
  },
  favActive: {
    color: '#F24336'
  }
});

const Thumbnail = (props) => {
  const classes = useStyles();
  const { products } = props;

  return (
    <React.Fragment>
    {Object.keys(products).length > 1 && products.map((item, i) =>
    <Link to={`/product/${item.id}`} className={classes.cardLink}>
      <Card className={classes.cardProduct} key={i}>
        <Image src={item.imageUrl} wrapped ui={false} />
        <Card.Content className={classes.cardContent}>
          <Card.Header>{item.title}</Card.Header>
          <Card.Meta className={classes.cardPrice}>
            <span>{item.price}</span>
          </Card.Meta>
          <div className={classes.cardFav}>
          {item.loved > 0 ? <Icon name='heart' className={classes.favActive} /> : <Icon name='heart outline' />}
          </div>
        </Card.Content>
      </Card>
    </Link>
    )}
    </React.Fragment>
  )
}

export default Thumbnail;