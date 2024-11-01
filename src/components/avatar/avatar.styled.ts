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
