import React from 'react';
import { titleStyle, loginStyle } from './CreatePage.style';
import Typography from '../../atoms/Typography/Typography';
import UserForm from '../../molecules/UserForm/UserForm';

const CreatePage = () => (
  <div>
    <Typography style={titleStyle}>Create User</Typography>
    <UserForm withPassword />
    <Typography
      style={loginStyle}
      onClick={() => {
        window.location.href = 'login';
      }}
    >
      Login
    </Typography>
  </div>
);

export default CreatePage;
