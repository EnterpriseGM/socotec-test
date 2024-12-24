import * as yup from 'yup';
import { FormField } from '../../../core/enum/form.enum';
import { invalidError, requireError } from '../../../core/handler/schema';

const formSchema = yup.object().shape({
  [FormField.email]: yup.string().email(invalidError('Email')).required(requireError('Email')),
  [FormField.password]: yup.string().required(requireError('Password')),
});

export default formSchema;
