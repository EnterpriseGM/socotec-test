import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../molecules/Header/Header';
import { headerItemStyle, headerWrapperStyle, layoutStyle } from './Layout.style';
import Typography from '../atoms/Typography/Typography';
import { deleteUser, logout } from './Layout.util';

const Layout = () => (
  <div style={layoutStyle}>
    <div style={headerWrapperStyle}>
      <Header />
      <Typography style={headerItemStyle} onClick={deleteUser}>Delete Account</Typography>
      <Typography style={headerItemStyle} onClick={logout}>Logout</Typography>
    </div>
    <Outlet />
  </div>
);
export default Layout;
