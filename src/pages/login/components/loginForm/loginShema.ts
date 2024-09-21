import * as yup from 'yup';

const regEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(regEx, { message: 'Please enter a valid email' })
    .required('Email is required'),
  password: yup.string().min(7).required('Required'),
});