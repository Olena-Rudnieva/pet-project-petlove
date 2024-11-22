import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Wrapper } from './userCard.styled';
import { UserBlock } from '../userBlock';
import { PetsBlock } from '../petsBlock';
import { Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'types';
import { Modal } from 'components';
import { ModalApproveAction } from 'components/modal/components';

export const UserCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const modalWidth = isSmallScreen ? '280px' : '448px';
  const modalPadding = isSmallScreen ? '0' : '90px';

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
        <Modal isOpen={isModalOpen} onClose={toggleModal} width={modalWidth}>
          <ModalApproveAction
            handleModalToggle={toggleModal}
            padding={modalPadding}
          />
        </Modal>
      )}
    </Wrapper>
  );
};
