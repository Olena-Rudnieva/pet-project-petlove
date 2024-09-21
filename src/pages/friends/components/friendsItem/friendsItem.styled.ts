import styled from 'styled-components';
import { theme } from 'constants/theme';

export const FriendsItemWrapper = styled.li`
  position: relative;
  display: flex;
  gap: 20px;
  width: 371px;
  height: 196px;
  padding: 40px 40px 40px 20px;
  background-color: ${theme.colors.white};
  border-radius: 15px;
  box-shadow: ${theme.boxShadow.friends};
`;

export const WorkingDaysWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 8px;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.28571;
  letter-spacing: -0.28px;
  color: ${theme.colors.accent};
  border-radius: 30px;
  background-color: ${theme.colors.beige};
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
`;

export const InfoWrapper = styled.div``;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.3;
  letter-spacing: -0.8px;
  color: ${theme.colors.black};
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 2px;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.28571;
  letter-spacing: -0.28px;
`;

export const Text = styled.p`
  margin-bottom: 8px;
  color: ${theme.colors.mediumGrey};
`;

export const Link = styled.a`
  margin-bottom: 8px;
  color: ${theme.colors.black};
`;

export const Description = styled.p`
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NoText = styled.p`
  margin-bottom: 8px;
  color: ${theme.colors.black};
`;