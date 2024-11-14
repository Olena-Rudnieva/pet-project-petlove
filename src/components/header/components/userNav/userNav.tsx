import { useState } from 'react';
import { UserNavWrapper } from './userNav.styled';

import { ButtonSize, ButtonVariant } from 'types';

import { UserBar } from '../userBar';
import { Modal } from 'components/modal';
import { Button } from 'ui';
import { ModalApproveAction } from 'components/modal/components';

interface UserNavProps {
  isMobileMenuOpen?: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}

export const UserNav = ({
  isMobileMenuOpen = false,
  isMobile,
  onClick,
}: UserNavProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <UserNavWrapper isMobileMenuOpen={isMobileMenuOpen}>
      <Button
        type="button"
        size={ButtonSize.small}
        variant={ButtonVariant.orange}
        onClick={toggleModal}
      >
        LOG OUT
      </Button>
      {!isMobile && <UserBar />}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggleModal} width="448px">
          <ModalApproveAction
            handleModalToggle={toggleModal}
            onClick={onClick}
          />
        </Modal>
      )}
    </UserNavWrapper>
  );
};
