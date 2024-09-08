import { useState } from 'react';
import { UserNavWrapper } from './userNav.styled';

import { Button } from 'ui/button';
import { ButtonSize, ButtonVariant } from 'types';

import { UserBar } from '../userBar';
import { Modal } from 'components/modal';

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
        <Modal isOpen={isModalOpen} onClose={toggleModal} title="Example Modal">
          <p>This is the content of the modal</p>
        </Modal>
      )}
    </UserNavWrapper>
  );
};
