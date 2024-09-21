import styled from 'styled-components';
import { theme } from 'constants/theme';

export const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  margin-left: 85px;
  margin-right: 127px;
  overflow: hidden;
`;

export const UserIconAvatar = styled.svg`
  width: 50px;
  height: 50px;
  fill: ${theme.colors.accent};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const UploadBtn = styled.button`
  color: ${theme.colors.black};
  font-family: 'Manrope', sans-serif;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.2857;
  letter-spacing: -0.28px;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  margin-right: 40px;
`;

export const Form = styled.form`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.2857;
  letter-spacing: -0.28px;
  text-decoration: underline;
  margin-right: 40px;
`;