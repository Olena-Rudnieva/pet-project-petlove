import styled from 'styled-components';
import { theme } from 'constants/theme';

export const MyNoticesWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  /* justify-content: center;
  align-items: center; */
`;

export const TextWrapper = styled.div`
  padding: 180px 135px 135px 103px;
  /* text-align: center; */
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${theme.colors.black};
  width: 458px;
`;

export const Accent = styled.span`
  color: ${theme.colors.accent};
`;