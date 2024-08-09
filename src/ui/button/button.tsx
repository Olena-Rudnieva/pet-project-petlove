import { ButtonSize, ButtonVariant } from 'types';
import { StyledButton } from './button.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({
  size = ButtonSize.small,
  variant = ButtonVariant.orange,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton size={size} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
