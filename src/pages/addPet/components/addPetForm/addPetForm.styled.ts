import { theme } from 'constants/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 80px;
  border-radius: 60px;
  background-color: ${theme.colors.white};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1;
  letter-spacing: -0.96px;
  color: ${theme.colors.black};
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.25;
  color: ${theme.colors.semiGrey};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 86px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const PetIcon = styled.svg`
  width: 44px;
  height: 44px;
  fill: ${theme.colors.accent};
`;

export const FormWrapper = styled.div`
  margin-bottom: 16px;
`;

interface InputWrapperProps {
  haserror?: boolean;
  hassuccess?: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  margin-bottom: 16px;
  max-width: 424px;
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 16px;
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.medium};
    line-height: 1.25;
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

export const ButtonWrapper = styled.div`
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 48px;
`;

export const CalendarIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${theme.colors.black};
  fill: transparent;
  position: absolute;
  top: 16px;
  left: 174px;
`;

export const Label = styled.label`
  width: 210px;
  display: block;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;