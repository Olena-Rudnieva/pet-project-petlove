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
} from './loginForm.styled';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import { LoginSchema } from './loginShema';
import { useEffect, useState } from 'react';
import sprite from 'assets/sprite.svg';
import { Button, Title } from 'ui';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logIn, selectIsLoggedIn } from '../../../../redux/auth';
import { AppDispatch } from 'redux/store';

interface LoginData {
  email: string;
  password: string;
}

const initialValues: LoginData = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = (
    { email, password }: LoginData,
    { resetForm }: FormikHelpers<LoginData>
  ) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  const handleTogglePassword = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile');
    }
  }, [navigate, isLoggedIn]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title name={'Log in'} />
      </TitleWrapper>
      <Text>
        Welcome! Please enter your credentials to login to the platform:
      </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormWrapper>
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
            </FormWrapper>
            <ButtonWrapper>
              <Button type={'submit'}>LOG IN</Button>
            </ButtonWrapper>
          </form>
        )}
      </Formik>
      <LinkWrapper>
        <p>Don’t have an account?</p>
        <Link to="/register">Register</Link>
      </LinkWrapper>
    </Wrapper>
  );
};
