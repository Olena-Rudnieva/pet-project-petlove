import { useState } from 'react';
import { UserNavWrapper } from './userNav.styled';

import { ButtonSize, ButtonVariant } from 'types';

import { UserBar } from '../userBar';
import { Modal } from 'components/modal';
import { Button } from 'ui';
import { ModalApproveAction } from 'components/modal/components';

export const UserNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <UserNavWrapper>
      <Button
        type="button"
        size={ButtonSize.small}
        variant={ButtonVariant.orange}
        onClick={toggleModal}
      >
        LOG OUT
      </Button>
      <UserBar />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggleModal} width="448px">
          <ModalApproveAction handleModalToggle={toggleModal} />
        </Modal>
      )}
    </UserNavWrapper>
  );
};
