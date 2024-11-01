import * as yup from 'yup';

const emailRegEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const avatarRegEx = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/;
// const phoneRegEx = /^\+38\d{10}$/;

export const ModalEditUserSchema = yup.object().shape({
  avatar: yup
    .string()
    .matches(avatarRegEx, { message: 'Please enter a valid image URL' })
    .notRequired(),
  name: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Full name is required'),
  email: yup
    .string()
    .matches(emailRegEx, { message: 'Please enter a valid email' })
    .required('Email is required'),
  phone: yup
    .string()
    // .matches(phoneRegEx, { message: 'Please enter a valid phone number' })
    .notRequired(),
});
