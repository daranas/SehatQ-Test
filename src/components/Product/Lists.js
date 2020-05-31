import React from 'react';
import { Item } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  listProduct: {
    width: '100%!important',
    marginTop: 10,
  },
  imgItem: {
    textAlign: 'center',
    '& img': {
      width: 'auto!important',
      maxHeight: 40,
      margin: '0 auto'
    }
  },
  '@media only screen and (max-width: 767px)': {
    imgItem: {
      display: 'none!important',
    }
  }
});

const List = (props) => {
  const { products } = props;
  const classes = useStyles();

  return (
    <Item.Group unstackable className={classes.listProduct}>
      {Object.keys(products).length > 0 && products.productPromo.map((item, i) =>
      <Item as={Link} to={`/product/${item.id}`} key={i}>
        <Item.Image size='tiny' src={item.imageUrl} className={classes.imgItem} />
        <Item.Content>
          <Item.Header>{item.title}</Item.Header>
          <Item.Meta>{item.price}</Item.Meta>
        </Item.Content>
      </Item>
      )}
    </Item.Group>
  )
}

export default List;