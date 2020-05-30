import React from 'react';
import { Menu } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  wrapper: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%'
  }
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Menu widths={4}>
        <Menu.Item as={Link} to="/">
          home
        </Menu.Item>
        <Menu.Item as={Link} to="/feed">
          feed
        </Menu.Item>
        <Menu.Item as={Link} to="/cart">
          cart
        </Menu.Item>
        <Menu.Item as={Link} to="/profile">
          profile
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default NavBar;