import { IoMdClose } from 'react-icons/io';
import { theme } from 'constants/theme';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  position: relative;

  ${theme.mq.tablet} {
    width: 230px;
  }
`;

export const FormField = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 30px;
  border: 1px solid ${theme.colors.grey};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: -0.48px;
  color: ${theme.colors.black};

  /* ${theme.mq.tablet} {
    height: 44px;
    font-size: ${theme.fontSizes.m};
    padding: 8px 36px 9px 20px;
  } */
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
  bottom: 14px;
  right: 14px;
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.05;
  }
`;

export const Close = styled.button`
  border: none;
  position: absolute;
  background-color: ${theme.colors.white};
  bottom: 12px;
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
