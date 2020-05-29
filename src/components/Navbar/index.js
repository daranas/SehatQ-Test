import React from 'react';
import { Menu } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';

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
        <Menu.Item name='home'/>
        <Menu.Item name='feed'/>
        <Menu.Item name='cart'/>
        <Menu.Item name='profile'/>
      </Menu>
    </div>
  )
}

export default NavBar;