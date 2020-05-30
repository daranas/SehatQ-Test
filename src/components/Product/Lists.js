import React from 'react';
import { Card, Icon, Image, Item } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  listProduct: {
    width: '100%!important',
    marginTop: 10,
  }
});

const List = () => {
  const classes = useStyles();

  return (
    <Item.Group className={classes.listProduct}>
      <Item>
        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

        <Item.Content>
          <Item.Header as='a'>Header</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

        <Item.Content>
          <Item.Header as='a'>Header</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default List;