import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  width: 100%;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 44px;
  height: 44px;
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.1667;
  letter-spacing: -0.72px;
  margin-bottom: 28px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
