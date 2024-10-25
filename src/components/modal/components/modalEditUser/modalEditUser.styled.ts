import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  /* padding: 50px; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  width: 100%; */
`;

export const Title = styled.h2`
  color: ${theme.colors.secondBlack};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.33;
  margin-bottom: 20px;
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
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background-color: ${theme.colors.beige};
  margin-bottom: 12px;
  overflow: hidden;
`;

export const UserIconAvatar = styled.svg`
  width: 40px;
  height: 40px;
  fill: ${theme.colors.accent};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
`;

export const UploadBtn = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border: none;
  border-radius: 30px;
  background-color: ${theme.colors.beige};
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.2857;
  letter-spacing: -0.28px;
  color: ${theme.colors.black};
  white-space: nowrap;
`;

export const UploadIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${theme.colors.accent};
  fill: none;
`;

export const FormWrapper = styled.div`
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 14px;
  max-width: 380px;
  width: 100%;

  input {
    width: 100%;
    padding: 16px;
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.medium};
    line-height: 1.25;
    letter-spacing: -0.48px;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: 30px;
    box-sizing: border-box;
    outline: none;
    transition: border-color ${theme.transition};

    &:focus {
      border-color: ${theme.colors.accent};
    }

    &.photo {
      padding: 12px 20px;
      font-size: ${theme.fontSizes.xxs};
      font-weight: ${theme.fontWeight.medium};
      line-height: 1.2857;
      letter-spacing: -0.28px;
      display: none;
    }
  }
`;

export const ErrorText = styled.div`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const SuccessMessage = styled.div`
  color: ${theme.colors.green};
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

// export const Link = styled(NavLink)`
//   color: ${theme.colors.accent};
//   transition: color ${theme.transition};

//   &:hover,
//   :focus {
//     color: ${theme.colors.beige};
//   }
// `;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.428;
  letter-spacing: -0.42px;
  color: ${theme.colors.mediumGrey};
`;
