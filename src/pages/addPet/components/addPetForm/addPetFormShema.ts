import * as yup from 'yup';

export const AddPetFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  imgURL: yup.string().url('Must be a valid URL').optional(),
  species: yup.string().required('Species is required'),
  birthday: yup.date().required('Birthday is required'),
  title: yup.string().optional(),
  sex: yup
    .string()
    .oneOf(
      ['male', 'female', 'other'],
      'Sex must be either male, female or other'
    )
    .required('Sex is required'),
});
