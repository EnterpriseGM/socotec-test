import axios from '../../../tools/api';
import { FormField } from '../../../core/enum/form.enum';
import { catchError } from '../../../core/handler/error';

export const passwordField = {
  key: FormField.password,
  placeholder: 'Password',
  label: 'Password',
};

export const fields = [
  {
    key: FormField.firstName,
    placeholder: 'First Name',
    label: 'First Name',
  },
  {
    key: FormField.lastName,
    placeholder: 'Last Name',
    label: 'Last Name',
  },
  {
    key: FormField.country,
    placeholder: 'Country',
    label: 'Country',
  },
  {
    key: FormField.city,
    placeholder: 'City',
    label: 'City',
  },
  {
    key: FormField.email,
    placeholder: 'Email',
    label: 'Email',
  },
  {
    key: FormField.phoneNumber,
    placeholder: 'Phone Number',
    label: 'Phone Number',
  },
];

export const create = async (data) => {
  try {
    const res = await axios.post('/user', data);
    if (res) {
      alert(res.data.message);
    }
  } catch (err) {
    catchError(err);
  }
};

export const edit = async (data) => {
  try {
    const res = await axios.put('/user', data);
    if (res) {
      alert(res.data.message);
    }
  } catch (err) {
    catchError(err);
  }
};
