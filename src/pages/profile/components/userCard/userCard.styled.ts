import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 30px;
  padding: 18px 20px 40px 20px;

  @media (min-width: 768px) {
    border-radius: 60px;
    padding: 40px;
  }
`;
