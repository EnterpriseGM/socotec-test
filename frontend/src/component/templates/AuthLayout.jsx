import React from 'react';
import { Outlet } from 'react-router-dom';
import { layoutStyle } from './Layout.style';

const AuthLayout = () => (
  <div className="fvh fvw" style={layoutStyle}>
    <Outlet />
  </div>
);

export default AuthLayout;
