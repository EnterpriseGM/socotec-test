import axios from '../../../tools/api';
import { FormField } from '../../../core/enum/form.enum';
import { catchError } from '../../../core/handler/error';

export const fields = [
  {
    key: FormField.email,
    placeholder: 'Email',
    label: 'Email',
    type: 'email',
  },
  {
    key: FormField.password,
    placeholder: 'Password',
    label: 'Password',
    type: 'password',
  },
];

export const submit = async (data) => {
  try {
    const res = await axios.post('/login', data);
    if (res) {
      const { token } = res.data;
      localStorage.setItem('token', token);
    }
    window.location.href = '/user/edit';
  } catch (err) {
    catchError(err);
  }
};
