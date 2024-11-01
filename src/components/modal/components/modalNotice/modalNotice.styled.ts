import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 100%;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.beige};
  background-color: ${theme.colors.beige};
  margin-bottom: 16px;
  overflow: hidden;
`;

export const UserIconAvatar = styled.svg`
  width: 60px;
  height: 60px;
  fill: ${theme.colors.accent};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.33;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  display: flex;
  gap: 27px;
  margin-bottom: 18px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const Label = styled.p`
  font-size: ${theme.fontSizes.xxxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.4;
  letter-spacing: -0.2px;
  color: ${theme.colors.mediumGrey};
`;

export const Value = styled.p`
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.16667;
  letter-spacing: -0.24px;
  color: ${theme.colors.black};
`;

export const Text = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.2857;
  letter-spacing: -0.72px;
  margin-bottom: 40px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const FavoriteBtn = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  border: none;
  border-radius: 30px;
  background-color: ${theme.colors.accent};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.white};
  white-space: nowrap;
  &:hover,
  &:focus {
    background-color: ${theme.colors.beige};
  }
`;

export const Heart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconEmpty = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${theme.colors.white};
  transition: transform ${theme.transition}, fill ${theme.transition};

  &:hover {
    transform: scale(1.05);
  }
`;

export const IconFavorite = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${theme.colors.white};
`;
