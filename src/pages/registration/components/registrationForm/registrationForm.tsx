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
} from './registrationForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import sprite from 'assets/sprite.svg';

import { useState } from 'react';

import { RegistrationFormSchema } from './registrationShema';
// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/authOperation';
// import { useNavigate } from 'react-router-dom';
// import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

import { Button } from 'ui/button';
import { Title } from 'ui';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleTogglePassword = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleToggleConfirmPassword = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
  };

  //   const handleSubmit = ({ name, email, password }, { resetForm }) => {
  //     dispatch(register({ name, email, password }));
  //     resetForm();
  //   };

  const handleSubmit = () => {};

  //   useEffect(() => {
  //     if (isLoggedIn) {
  //       navigate('/profile');
  //     }
  //   }, [navigate, isLoggedIn]);

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
              <InputWrapper
              //   haserror={touched.name && errors.name}
              >
                <label>
                  <Field type="text" name="name" placeholder="Name" />
                  {/* <ErrorIcon haserror={touched.name && errors.name}>
                    ✕
                  </ErrorIcon> */}

                  <ErrorMessage name="name" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper
              //    haserror={touched.email && errors.email}
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

              <InputWrapper
              // haserror={touched.confirmPassword && errors.confirmPassword}
              >
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
                  {/* <ErrorIcon
                    haserror={touched.confirmPassword && errors.confirmPassword}
                    erroriconright="true"
                  >
                    ✕
                  </ErrorIcon> */}
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
