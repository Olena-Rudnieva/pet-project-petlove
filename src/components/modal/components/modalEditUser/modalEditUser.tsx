import { useDispatch } from 'react-redux';
import sprite from 'assets/sprite.svg';
import {
  Avatar,
  AvatarWrapper,
  BlockWrapper,
  ButtonWrapper,
  ErrorText,
  FormWrapper,
  Image,
  InputWrapper,
  Title,
  UploadBtn,
  UploadIcon,
  UploadWrapper,
  UserIconAvatar,
  Wrapper,
} from './modalEditUser.styled';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import { Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'types';
import { ModalEditUserSchema } from './modalEditUserShema';
import { uploadUser } from '../../../../redux/auth';
import { AppDispatch } from 'redux/store';
import { useState } from 'react';

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
  avatar: '',
};

interface ModalEditUserProps {
  handleModalToggle: () => void;
  isSmallScreen: boolean;
}

export const ModalEditUser = ({
  handleModalToggle,
  isSmallScreen,
}: ModalEditUserProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();

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
          {selectedPhoto ? (
            <Image src={selectedPhoto} alt="User" />
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
        {({ handleSubmit, setFieldValue, values }) => (
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <BlockWrapper>
                <InputWrapper>
                  <label>
                    <Field
                      type="avatar"
                      name="avatar"
                      placeholder="Enter URL"
                      value={values.avatar}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue('avatar', e.target.value);
                      }}
                    />
                    <ErrorMessage name="avatar" component={ErrorText} />
                  </label>
                </InputWrapper>
                <UploadWrapper>
                  <UploadBtn
                    onClick={e => {
                      e.preventDefault();
                      setSelectedPhoto(values.avatar);
                    }}
                  >
                    Upload photo
                  </UploadBtn>
                  {!isSmallScreen && (
                    <UploadIcon>
                      <use href={sprite + '#icon-upload'}></use>
                    </UploadIcon>
                  )}
                </UploadWrapper>
              </BlockWrapper>
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

            <ButtonWrapper>
              <Button
                variant={ButtonVariant.orange}
                size={ButtonSize.extralarge}
                type="submit"
              >
                Save
              </Button>
            </ButtonWrapper>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};
