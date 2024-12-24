import * as yup from 'yup';
import { FormField } from '../../../core/enum/form.enum';
import { invalidError, requireError } from '../../../core/handler/schema';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validate = {
  [FormField.firstName]: yup.string().required(requireError('First name')),
  [FormField.lastName]: yup.string().nullable(true),
  [FormField.country]: yup.string().nullable(true),
  [FormField.city]: yup.string().nullable(true),
  [FormField.email]: yup.string().email(invalidError('Email')).required(requireError('Email')),
  [FormField.phoneNumber]: yup.string()
    .matches(phoneRegExp, invalidError('Phone number'))
    .nullable()
    .transform((value) => (value === '' ? null : value))
    .notRequired(),
};

export const formSchema = yup.object().shape({ ...validate });

export const formSchemaWithPassword = yup.object().shape({
  ...validate,
  [FormField.password]: yup.string().required(requireError('Password')),
});
