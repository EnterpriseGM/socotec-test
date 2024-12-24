import React from 'react';
import Typography from '../../atoms/Typography/Typography';
import { createUserStyle, titleStyle } from './Login.style';
import LoginForm from '../../molecules/LoginForm/LoginForm';

const LoginPage = () => (
  <div>
    <Typography style={titleStyle}>Login</Typography>
    <LoginForm />
    <Typography
      style={createUserStyle}
      onClick={() => {
        window.location.href = 'create';
      }}
    >
      Create
    </Typography>
  </div>
);
export default LoginPage;
