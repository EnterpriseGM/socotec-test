import axios from 'axios';

export const catchError = (error) => {
  try {
    if (axios.isAxiosError(error)) {
      alert(error.response.data.error);
    }
  } catch (e) {
    console.error(e);
    alert('An unknown error occurred');
  }
};
