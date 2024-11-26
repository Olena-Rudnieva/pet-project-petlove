import styled from 'styled-components';
import { theme } from 'constants/theme';

export const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 8px; */
  justify-content: center;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 94px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  margin-left: 21px;
  margin-right: 62px;
  margin-top: 54px;
  margin-bottom: 52px;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-left: 177px;
    margin-right: 219px;
    width: 110px;
    height: 110px;
    margin-top: 0;
    margin-bottom: 46px;
  }

  @media (min-width: 1280px) {
    margin-left: 85px;
    margin-right: 127px;
  }
`;

export const UserIconAvatar = styled.svg`
  width: 40px;
  height: 40px;
  fill: ${theme.colors.accent};

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
