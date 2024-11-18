import { IoMdClose } from 'react-icons/io';
import { theme } from 'constants/theme';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: 230px;
  }
`;

export const FormField = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 30px;
  border: 1px solid ${theme.colors.grey};
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 18px;
  letter-spacing: -0.42px;
  color: ${theme.colors.black};

  @media (min-width: 768px) {
    padding: 16px;
    font-size: ${theme.fontSizes.xs};
    line-height: 20px;
    letter-spacing: -0.48px;
  }
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${theme.colors.black};
`;

export const Loupe = styled.button`
  border: none;
  position: absolute;
  background-color: ${theme.colors.white};
  bottom: 8px;
  right: 14px;
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.05;
  }

  @media (min-width: 768px) {
    bottom: 12px;
  }
`;

export const Close = styled.button`
  border: none;
  position: absolute;
  background-color: ${theme.colors.white};
  bottom: 8px;
  right: 40px;
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.05;
  }
`;

export const CloseIcon = styled(IoMdClose)`
  font-size: 20px;

  ${theme.mq.tablet} {
    font-size: 24px;
  }
`;
