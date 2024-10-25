import { useDispatch, useSelector } from 'react-redux';
import sprite from 'assets/sprite.svg';
import {
  Avatar,
  AvatarWrapper,
  ErrorText,
  FormWrapper,
  Image,
  InputWrapper,
  // PhotoWrapper,
  Title,
  // UploadBtn,
  // UploadIcon,
  UserIconAvatar,
  Wrapper,
} from './modalEditUser.styled';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';

import { Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'types';
import { ModalEditUserSchema } from './modalEditUserShema';
import { selectUser, uploadUser } from '../../../../redux/auth';
import { AppDispatch } from 'redux/store';

interface EditData {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

const initialValues: EditData = {
  name: '',
  email: '',
  phone: '',
  avatar: 'https://test.png',
};

interface ModalEditUserProps {
  handleModalToggle: () => void;
}

export const ModalEditUser = ({ handleModalToggle }: ModalEditUserProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);

  // const handleChangeAvatar = e => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   if (file) {
  //     const blob = new Blob([file]);
  //     const objectURL = URL.createObjectURL(blob);
  //     dispatch(setAvatarURL(objectURL));
  //     document.getElementById('fileLabel').innerText = file.name;
  //   }
  // };

  // const handleFileLabelClick = () => {
  //   document.getElementById('photoInput').click();
  // };

  const handleSubmit = (
    { name, email, phone, avatar }: EditData,
    { resetForm }: FormikHelpers<EditData>
  ) => {
    dispatch(uploadUser({ name, email, phone, avatar }));
    resetForm();
    handleModalToggle();
  };

  return (
    <Wrapper>
      <Title>Edit information</Title>
      <AvatarWrapper>
        <Avatar>
          {user.avatar ? (
            <Image src={user.avatar} alt="User" />
          ) : (
            <UserIconAvatar>
              <use href={sprite + '#icon-user'}></use>
            </UserIconAvatar>
          )}
        </Avatar>
      </AvatarWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ModalEditUserSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <InputWrapper>
                <label>
                  <Field type="text" name="name" placeholder="Name" />
                  <ErrorMessage name="name" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper>
                <label>
                  <Field type="email" name="email" placeholder=" Email" />
                  <ErrorMessage name="email" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper>
                <label>
                  <Field type="text" name="phone" placeholder=" Phone" />
                  <ErrorMessage name="phone" component={ErrorText} />
                </label>
              </InputWrapper>
            </FormWrapper>

            <Button
              variant={ButtonVariant.orange}
              size={ButtonSize.extralarge}
              type="submit"
            >
              Save
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};
