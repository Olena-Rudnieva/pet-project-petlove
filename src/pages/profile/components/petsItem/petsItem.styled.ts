import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 14px;
  margin-bottom: 14px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.grey};
  padding: 16px;

  @media (min-width: 768px) {
    padding: 20px;
    gap: 25px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 66px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PetIcon = styled.svg`
  width: 32px;
  height: 32px;
  fill: ${theme.colors.accent};

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const TextWrapper = styled.div`
  margin-top: 0;

  @media (min-width: 768px) {
    margin-top: 14px;
  }
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.bold};
  line-height: 18px;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 7px;

  @media (min-width: 768px) {
    gap: 27px;
    margin-bottom: 16px;
  }
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
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  cursor: pointer;

  @media (min-width: 768px) {
    top: 20px;
    right: 20px;
    width: 38px;
    height: 38px;
  }
`;

export const DeleteIcon = styled.div`
  width: 16px;
  height: 16px;
  color: ${theme.colors.accent};

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
