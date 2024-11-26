import { theme } from 'constants/theme';
import styled from 'styled-components';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  flex-grow: 1;
  padding: 28px 20px;
  border-radius: 30px;
  background-color: ${theme.colors.white};

  @media (min-width: 768px) {
    padding: 66px 84px;
    border-radius: 60px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 18px;
  letter-spacing: -0.28px;
  color: ${theme.colors.black};
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.222;
    letter-spacing: -0.16px;
    margin-bottom: 32px;
  }
`;

export const FormWrapper = styled.div``;

interface InputWrapperProps {
  haserror?: boolean;
  hassuccess?: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  margin-bottom: 16px;
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 12px;
    font-size: ${theme.fontSizes.xxs};
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.medium};
    line-height: 18px;
    letter-spacing: -0.42px;
    color: ${theme.colors.black};
    border: 1px solid
      ${props =>
        props.haserror
          ? theme.colors.red
          : props.hassuccess
          ? theme.colors.green
          : theme.colors.lightGrey};
    border-radius: 30px;
    box-sizing: border-box;
    outline: none;
    transition: border-color ${theme.transition};

    @media (min-width: 768px) {
      padding: 16px;
      font-size: ${theme.fontSizes.xs};
      line-height: 1.25;
      letter-spacing: -0.48px;
    }

    &:focus {
      border-color: ${theme.colors.accent};
    }

    .error {
      border: 1px solid ${theme.colors.red};
    }
  }
`;

export const ErrorText = styled.div`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const SuccessMessage = styled.div`
  color: ${theme.colors.green};
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const EyeIconInvisible = styled(AiOutlineEyeInvisible)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 22px;
  height: 22px;
  fill: ${theme.colors.accent};
  transform: translateY(-50%);
`;

export const EyeIconVisible = styled(AiOutlineEye)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 22px;
  height: 22px;
  fill: ${theme.colors.accent};
  transform: translateY(-50%);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-top: 16px;
    margin-bottom: 48px;
  }
`;

export const SuccessIcon = styled.svg`
  position: absolute;
  top: 15px;
  right: 50px;
  width: 22px;
  height: 22px;
`;

export const Link = styled(NavLink)`
  color: ${theme.colors.accent};
  transition: color ${theme.transition};

  &:hover,
  :focus {
    color: ${theme.colors.beige};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.428;
  letter-spacing: -0.42px;
  color: ${theme.colors.mediumGrey};
`;
