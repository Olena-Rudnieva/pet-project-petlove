import { Wrapper } from './userCard.styled';
import { UserBlock } from '../userBlock';
import { PetsBlock } from '../petsBlock';
import { Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'types';
import { Modal } from 'components';
import { useState } from 'react';
import { ModalApproveAction } from 'components/modal/components';

export const UserCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <Wrapper>
      <UserBlock />
      <PetsBlock />

      <Button
        type={'button'}
        onClick={toggleModal}
        size={ButtonSize.small}
        variant={ButtonVariant.beige}
      >
        LOG OUT
      </Button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggleModal} width="448px">
          <ModalApproveAction handleModalToggle={toggleModal} />
        </Modal>
      )}
    </Wrapper>
  );
};
