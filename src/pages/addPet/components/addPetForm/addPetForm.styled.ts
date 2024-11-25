import { theme } from 'constants/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  border-radius: 30px;
  background-color: ${theme.colors.white};

  @media (min-width: 768px) {
    border-radius: 60px;
    padding: 60px 80px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 24px;
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1;
  letter-spacing: -0.84px;
  color: ${theme.colors.black};

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: ${theme.fontSizes.xxl};
    letter-spacing: -0.96px;
  }
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
  width: 68px;
  height: 68px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 86px;
    height: 86px;
    margin-bottom: 12px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

  label {
    width: 100%;
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

export const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const CalendarIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${theme.colors.black};
  fill: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Label = styled.label`
  width: 210px;
  display: block;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    width: '100%',
    padding: '8px 8px 8px 14px',
    fontSize: '16px',
    color: '#000',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '3%',
    border: state.isFocused ? '1px solid #F6B83D' : '1px solid #e0e0e0',
    borderRadius: '30px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#F6B83D',
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: '#a0a0a0',
    fontWeight: '400',
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: '10px',
    marginTop: '0',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#F6B83D' : '#fff',
    color: state.isSelected ? '#fff' : '#000',
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#F6B83D',
      color: '#fff',
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#000',
  }),
};

export const DatePickerWrapper = styled.div`
  .custom-date-picker {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  input {
    width: 100%;
  }
`;
