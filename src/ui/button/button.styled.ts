import styled, { css } from 'styled-components';
import { theme } from 'constants/theme';
import { ButtonSize, ButtonVariant } from 'types';

const buttonVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case ButtonVariant.orange:
      return css`
        background-color: ${theme.colors.accent};
        color: ${theme.colors.white};

        &:hover,
        &:focus {
          color: ${theme.colors.accent};
          background-color: ${theme.colors.beige};
        }
      `;
    case ButtonVariant.grey:
      return css`
        background-color: ${theme.colors.paleGrey};
        color: ${theme.colors.black};

        &:hover,
        &:focus {
          background-color: ${theme.colors.beige};
        }
      `;
    case ButtonVariant.white:
      return css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.black};

        &:hover,
        &:focus {
          background-color: ${theme.colors.beige};
        }
      `;
    case ButtonVariant.beige:
      return css`
        background-color: ${theme.colors.beige};
        color: ${theme.colors.accent};

        &:hover,
        &:focus {
          color: ${theme.colors.white};
          background-color: ${theme.colors.accent};
        }
      `;
    default:
      return css`
        background-color: ${theme.colors.accent};
        color: ${theme.colors.white};

        &:hover,
        &:focus {
          background-color: ${theme.colors.beige};
        }
      `;
  }
};

export const StyledButton = styled.button<{
  size: ButtonSize;
  variant: ButtonVariant;
}>`
  padding: ${({ size }) => {
    switch (size) {
      case ButtonSize.small:
        return '14px 44px';
      case ButtonSize.medium:
        return '14px 89px';
      case ButtonSize.large:
        return '14px 89px';
      case ButtonSize.extralarge:
        return '16px 170px';
      default:
        return '14px 89px';
    }
  }};

  font-size: ${({ size }) => {
    switch (size) {
      case ButtonSize.small:
        return theme.fontSizes.xs;
      case ButtonSize.medium:
        return theme.fontSizes.m;
      case ButtonSize.large:
        return theme.fontSizes.l;
      case ButtonSize.extralarge:
        return theme.fontSizes.xl;
      default:
        return theme.fontSizes.xs;
    }
  }};

  border-radius: 30px;
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.25;
  letter-spacing: -0.48px;
  transition: color ${theme.transition}, background-color ${theme.transition};

  ${({ variant }) => buttonVariantStyles(variant)}

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
