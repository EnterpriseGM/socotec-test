import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import Error from '../../atoms/Error/Error';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Submit from '../../atoms/Submit/Submit';
import formSchema from './LoginForm.schema';
import { formItemStyle, formStyle } from './LoginForm.style';
import { fields, submit } from './LoginForm.util';

const LoginForm = () => {
  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    delayError: 500,
  });

  const onSubmit = async (data) => submit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
      {fields.map((field) => (
        <div key={field.key} style={formItemStyle}>
          <Label>{field.label}</Label>
          <Input {...register(field.key)} placeholder={field.placeholder} autoComplete="off" type={field.type} />
          {errors[field.key] && <Error error={errors[field.key].message} />}
        </div>
      ))}
      <Submit className="mt-20" value={isSubmitting ? 'Loading...' : 'Submit'} disabled={isSubmitting} />
    </form>
  );
};

export default LoginForm;
