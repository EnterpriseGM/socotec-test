import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import Error from '../../atoms/Error/Error';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Submit from '../../atoms/Submit/Submit';
import { formItemStyle, formStyle } from './UserForm.style';
import {
  fields, passwordField, create, edit,
} from './UserForm.util';
import { formSchemaWithPassword, formSchema } from './UserForm.schema';
import { FormField } from '../../../core/enum/form.enum';

const UserForm = ({ defaultValue, withPassword }) => {
  const schema = (withPassword ? formSchemaWithPassword : formSchema);
  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    delayError: 500,
    defaultValues: defaultValue,
  });

  const onSubmit = async (data) => (withPassword ? create(data) : edit(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
      {fields.map((field) => (
        <div key={field.key} style={formItemStyle}>
          <Label>{field.label}</Label>
          <Input {...register(field.key)} placeholder={field.placeholder} autoComplete="off" />
          {errors[field.key] && <Error error={errors[field.key].message} />}
        </div>
      ))}
      {withPassword && (
        <div style={formItemStyle}>
          <Label>{passwordField.label}</Label>
          <Input {...register(passwordField.key)} placeholder={passwordField.placeholder} autoComplete="off" />
          {errors[passwordField.key] && <Error error={errors[passwordField.key].message} />}
        </div>
      )}
      <Submit className="mt-20" value={isSubmitting ? 'Loading...' : 'Submit'} disabled={isSubmitting} />
    </form>
  );
};

UserForm.propTypes = {
  defaultValue: PropTypes.shape({
    [FormField.firstName]: PropTypes.string,
    [FormField.lastName]: PropTypes.string,
    [FormField.country]: PropTypes.string,
    [FormField.city]: PropTypes.string,
    [FormField.email]: PropTypes.string,
    [FormField.phoneNumber]: PropTypes.string,
    [FormField.password]: PropTypes.string,
  }),
  withPassword: PropTypes.bool,
};

UserForm.defaultProps = {
  defaultValue: {},
  withPassword: false,
};

export default UserForm;
