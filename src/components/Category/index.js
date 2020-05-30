import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    overflow: 'auto',
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0
    },
    '&::-webkit-scrollbar-thumb': {
      width: 0,
      height: 0,
      background: '#fff'
    }
  },
  thumbnail: {
    width: '80px!important',
    display: 'inline-block!important',
    marginTop: '0!important',
    marginBottom: '0!important',
    marginRight: '15px!important',
    textAlign: 'center!important',
    border: '0px!important',
    boxShadow: 'none!important',
    '& .content': {
      paddingLeft: '0!important',
      paddingRight: '0!important',
      '& .header': {
        fontSize: '12px!important',
        fontWeight: '400!important'
      }
    },
    '&:last-child': {
      marginRight: '0!important'
    }
  }
});

const Category = (props) => {
  const classes = useStyles();
  const { categories } = props;

  return (
    <div className={classes.wrapper}>
      {Object.keys(categories).length > 1 && categories.map((item, i) =>
      <Card className={classes.thumbnail} key={i}>
        <Image src={item.imageUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
        </Card.Content>
      </Card>
      )}
    </div>
  )
}

export default Category;