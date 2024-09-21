import * as yup from 'yup';

const regEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export const RegistrationFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Full name is required'),
  email: yup
    .string()
    .matches(regEx, { message: 'Please enter a valid email' })
    .required('Email is required'),
  password: yup.string().min(7).required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Please confirm your password'),
});