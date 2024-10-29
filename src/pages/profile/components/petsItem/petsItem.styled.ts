import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 25px;
  margin-bottom: 14px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.grey};
  padding: 20px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  overflow: hidden;
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

export const TextWrapper = styled.div`
  margin-top: 14px;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.bold};
  line-height: 18px;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  display: flex;
  gap: 27px;
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
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

export const IconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
`;

export const DeleteIcon = styled.div`
  width: 18px;
  height: 18px;
  color: ${theme.colors.accent};
  cursor: pointer;
`;
