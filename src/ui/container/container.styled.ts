
import { theme } from 'constants/theme';
import styled from 'styled-components';


export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 480px;

  ${theme.mq.tablet} {
    padding-right: 32px;
    padding-left: 32px;
    width: ${theme.breakpoints[1]};
    max-width: 100%;
  }

  ${theme.mq.desktop} {
    width: ${theme.breakpoints[2]};
    max-width: 100%;
  }
`;