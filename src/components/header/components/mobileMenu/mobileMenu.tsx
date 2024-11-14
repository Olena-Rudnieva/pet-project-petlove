import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../../redux/auth';
import { CloseButton, MobileMenuWrapper, Wrapper } from './mobileMenu.styled';
import { IoMdClose } from 'react-icons/io';
import { Nav } from '../nav';
import { UserNav } from '../userNav';
import { AuthNav } from '../authNav';

interface MobileMenuProps {
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({
  isMobile,
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
          isMobileMenuOpen={isMobileMenuOpen}
          onClick={onClose}
        />
        {isLoggedIn ? (
          <UserNav
            isMobileMenuOpen={isMobileMenuOpen}
            onClick={onClose}
            isMobile={isMobile}
          />
        ) : (
          <AuthNav isMobileMenuOpen={isMobileMenuOpen} onClick={onClose} />
        )}
      </Wrapper>
    </MobileMenuWrapper>
  );
};
