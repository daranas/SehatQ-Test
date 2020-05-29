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
    marginBottom: '15px!important',
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

const Category = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Card className={classes.thumbnail}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
        </Card.Content>
      </Card>

      <Card className={classes.thumbnail}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
        </Card.Content>
      </Card>

      <Card className={classes.thumbnail}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
        </Card.Content>
      </Card>

      <Card className={classes.thumbnail}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
        </Card.Content>
      </Card>

      <Card className={classes.thumbnail}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
        </Card.Content>
      </Card>

      <Card className={classes.thumbnail}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
        </Card.Content>
      </Card>

      <Card className={classes.thumbnail}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
        </Card.Content>
      </Card>

      <Card className={classes.thumbnail}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Category;