import { AuthNavWrapper, Link } from './authNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <Link to="/login">Log in</Link>
      <Link to="/register" specialbackground="true">
        Registration
      </Link>
    </AuthNavWrapper>
  );
};
