import React from 'react';
import UserForm from '../../molecules/UserForm/UserForm';
import Typography from '../../atoms/Typography/Typography';
import { titleStyle } from './EditPage.style';
import useUserData from '../../../core/hook/useUserData';

const EditPage = () => {
  const { user, loading } = useUserData();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      <Typography style={titleStyle}>Edit User</Typography>
      {user && <UserForm defaultValue={user} />}
    </div>
  );
};

export default EditPage;
