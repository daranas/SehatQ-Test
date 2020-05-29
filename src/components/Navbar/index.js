import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavBar = () => {
  // style
  const navbarWrapper = {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
  }

  return (
    <React.Fragment>
      <div style={navbarWrapper}>
        <Menu widths={4}>
          <Menu.Item name='home'/>
          <Menu.Item name='feed'/>
          <Menu.Item name='cart'/>
          <Menu.Item name='profile'/>
        </Menu>
      </div>
    </React.Fragment>
  )
}

export default NavBar;