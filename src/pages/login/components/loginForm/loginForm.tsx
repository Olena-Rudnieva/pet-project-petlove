import {
  ButtonWrapper,
  //   ErrorIcon,
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
import { Formik, Field, ErrorMessage } from 'formik';
import { LoginSchema } from './loginShema';
import { useEffect, useState } from 'react';
import sprite from 'assets/sprite.svg';

import { useDispatch, useSelector } from 'react-redux';
// import { logIn } from '../../redux/auth/authOperation';
import { useNavigate } from 'react-router-dom';
// import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { Title } from 'ui/title';
import { Button } from 'ui/button';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  //   const handleSubmit = ({ email, password }, { resetForm }) => {
  //     dispatch(logIn({ email, password }));
  //     resetForm();
  //   };
  const handleSubmit = () => {};

  const handleTogglePassword = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  //   useEffect(() => {
  //     if (isLoggedIn) {
  //       navigate('/profile');
  //     }
  //   }, [navigate, isLoggedIn]);

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
          <form>
            <FormWrapper>
              <InputWrapper
              //   haserror={touched.email && errors.email}
              >
                <label>
                  <Field type="email" name="email" placeholder=" Email" />
                  {/* <ErrorIcon haserror={touched.email && errors.email}>
                    ✕
                  </ErrorIcon> */}
                  <ErrorMessage name="email" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper
              // haserror={touched.password && errors.password}
              // hassuccess={touched.password && !errors.password}
              >
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
                  {/* <ErrorIcon
                    haserror={touched.password && errors.password}
                    erroriconright="true"
                  >
                    ✕
                  </ErrorIcon> */}
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
              <Button
                // padding={'16px 186px'}
                // width={'424px'}
                // height={'52px'}
                type={'submit'}
                // handleClick={handleSubmit}
              >
                LOG IN
              </Button>
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
