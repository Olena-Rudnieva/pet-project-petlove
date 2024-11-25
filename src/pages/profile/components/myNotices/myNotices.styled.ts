import styled from 'styled-components';
import { theme } from 'constants/theme';

export const MyNoticesWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const TextWrapper = styled.div`
  padding: 0;

  @media (min-width: 768px) {
    padding: 180px 135px 135px 103px;
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${theme.colors.black};
  text-align: center;

  @media (min-width: 768px) {
    width: 458px;
  }
`;

export const Accent = styled.span`
  color: ${theme.colors.accent};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;
