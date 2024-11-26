import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../../redux/auth';
import { CloseButton, MobileMenuWrapper, Wrapper } from './mobileMenu.styled';
import { IoMdClose } from 'react-icons/io';
import { Nav } from '../nav';
import { UserNav } from '../userNav';
import { AuthNav } from '../authNav';

interface MobileMenuProps {
  isMobile: boolean;
  isTablet: boolean;
  isMobileMenuOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({
  isMobile,
  isTablet,
  isMobileMenuOpen,
  onClose,
}: MobileMenuProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <MobileMenuWrapper isOpen={isMobileMenuOpen}>
      <CloseButton onClick={onClose}>
        <IoMdClose size="24" />
      </CloseButton>
      <Wrapper>
        <Nav
          isMobile={isMobile}
          isTablet={isTablet}
          isMobileMenuOpen={isMobileMenuOpen}
          onClick={onClose}
        />
        {isLoggedIn ? (
          <UserNav isMobileMenuOpen={isMobileMenuOpen} onClick={onClose} />
        ) : (
          <AuthNav isMobileMenuOpen={isMobileMenuOpen} onClick={onClose} />
        )}
      </Wrapper>
    </MobileMenuWrapper>
  );
};
