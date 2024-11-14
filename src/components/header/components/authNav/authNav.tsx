import { AuthNavWrapper, Link } from './authNav.styled';

interface AuthNavProps {
  isMobileMenuOpen?: boolean;
  onClick?: () => void;
}

export const AuthNav = ({
  isMobileMenuOpen = false,
  onClick,
}: AuthNavProps) => {
  return (
    <AuthNavWrapper isMobileMenuOpen={isMobileMenuOpen}>
      <Link to="/login" onClick={onClick}>
        Log in
      </Link>
      <Link to="/register" specialbackground="true" onClick={onClick}>
        Registration
      </Link>
    </AuthNavWrapper>
  );
};
