import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { UserNavWrapper } from './userNav.styled';
import { ButtonSize, ButtonVariant } from 'types';
import { UserBar } from '../userBar';
import { Modal } from 'components/modal';
import { Button } from 'ui';
import { ModalApproveAction } from 'components/modal/components';

interface UserNavProps {
  isMobileMenuOpen?: boolean;
  onClick?: () => void;
}

export const UserNav = ({
  isMobileMenuOpen = false,
  onClick,
}: UserNavProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const modalWidth = isSmallScreen ? '280px' : '448px';
  const modalPadding = isSmallScreen ? '0' : '90px';

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <UserNavWrapper isMobileMenuOpen={isMobileMenuOpen}>
      <UserBar onClose={onClick} />
      <Button
        type="button"
        size={ButtonSize.small}
        variant={ButtonVariant.orange}
        onClick={toggleModal}
      >
        LOG OUT
      </Button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggleModal} width={modalWidth}>
          <ModalApproveAction
            handleModalToggle={toggleModal}
            onClick={onClick}
            padding={modalPadding}
          />
        </Modal>
      )}
    </UserNavWrapper>
  );
};
