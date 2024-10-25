import {
  ButtonWrapper,
  ErrorText,
  EyeIconInvisible,
  EyeIconVisible,
  FormWrapper,
  InputWrapper,
  Link,
  LinkWrapper,
  SuccessIcon,
  SuccessMessage,
  Text,
  TitleWrapper,
  Wrapper,
} from './registrationForm.styled';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import sprite from 'assets/sprite.svg';
import { useEffect, useState } from 'react';
import { RegistrationFormSchema } from './registrationShema';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui/button';
import { Title } from 'ui';
import { useSelector } from 'react-redux';
import { register, selectIsLoggedIn } from '../../../../redux/auth';
import { AppDispatch } from 'redux/store';

interface RegistrationData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: RegistrationData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleTogglePassword = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleToggleConfirmPassword = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
  };

  const handleSubmit = (
    { name, email, password }: Omit<RegistrationData, 'confirmPassword'>,
    { resetForm }: FormikHelpers<RegistrationData>
  ) => {
    console.log(name, email, password);

    dispatch(register({ name, email, password }));
    resetForm();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile');
    }
  }, [navigate, isLoggedIn]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title name={'Registration'} />
      </TitleWrapper>
      <Text>Thank you for your interest in our platform. </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegistrationFormSchema}
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
                  <Field
                    type={isPasswordVisible ? 'text' : 'password'}
                    name="password"
                    placeholder=" Password"
                  />
                  {isPasswordVisible ? (
                    <EyeIconVisible onClick={handleTogglePassword} />
                  ) : (
                    <EyeIconInvisible onClick={handleTogglePassword} />
                  )}
                  {touched.password && !errors.password && (
                    <SuccessMessage>Password is secure</SuccessMessage>
                  )}
                  {touched.password && !errors.password && (
                    <SuccessIcon>
                      <use href={sprite + '#icon-check'}></use>
                    </SuccessIcon>
                  )}
                  <ErrorMessage name="password" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper>
                <label>
                  <Field
                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  {isConfirmPasswordVisible ? (
                    <EyeIconVisible onClick={handleToggleConfirmPassword} />
                  ) : (
                    <EyeIconInvisible onClick={handleToggleConfirmPassword} />
                  )}
                  <ErrorMessage name="confirmPassword" component={ErrorText} />
                </label>
              </InputWrapper>
            </FormWrapper>
            <ButtonWrapper>
              <Button
                // padding={'16px 186px'}
                // width={'424px'}
                // height={'52px'}
                // text={'REGISTRATION'}
                type={'submit'}
                // handleClick={handleSubmit}
              >
                REGISTRATION
              </Button>
            </ButtonWrapper>
          </form>
        )}
      </Formik>
      <LinkWrapper>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </LinkWrapper>
    </Wrapper>
  );
};
