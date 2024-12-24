import axios from '../../tools/api';
import { catchError } from '../../core/handler/error';

export const deleteUser = async () => {
  try {
    const response = await axios.delete('user');
    if (response) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  } catch (err) {
    catchError(err);
  }
};

export const logout = async () => {
  try {
    const response = await axios.get('logout');
    if (response) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  } catch (err) {
    catchError(err);
  }
};
