import { useState, useEffect } from 'react';
import axios from '../../tools/api';
import { catchError } from '../handler/error';

const getUser = async () => {
  try {
    const response = await axios.get('user');
    return response.data;
  } catch (err) {
    catchError(err);
  }
};

const useUserData = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (err) {
        // handle error
      }
    };

    setLoading(true);
    fetchUser().then(() => setLoading(false));
  }, []);

  return { user, loading };
};

export default useUserData;
