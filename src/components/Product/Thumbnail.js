import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  cardProduct: {
    width: '100%!important',
    marginTop: 10,
  }
});

const Thumbnail = (props) => {
  const classes = useStyles();
  const { products } = props;

  return (
    <React.Fragment>
    {Object.keys(products).length > 1 && products.map((item, i) =>
      <Card className={classes.cardProduct} key={i}>
        <Image src={item.imageUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{item.price}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    )}
    </React.Fragment>
  )
}

export default Thumbnail;