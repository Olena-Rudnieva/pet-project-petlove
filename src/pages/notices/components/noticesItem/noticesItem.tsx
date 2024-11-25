import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { AppDispatch } from 'redux/store';
import { ButtonSize, ButtonVariant, Notice } from 'types';
import {
  ButtonWrapper,
  Image,
  ImageWrapper,
  Label,
  List,
  ListItem,
  NoticesItemWrapper,
  Text,
  Title,
  Value,
} from './noticesItem.styled';
import { Button } from 'ui';
import { FavoriteHeart } from 'components/favoriteHeart';
import { Modal } from 'components';
import { ModalAttention, ModalNotice } from 'components/modal/components';

import {
  addFavoriteNotices,
  removeFavoriteNotices,
} from '../../../../redux/notices';
import { formattedDate, wordFromBigLetter } from 'utils';

interface NoticesItemProps {
  item: Notice;
  isLoggedIn: boolean;
  isFavorite: boolean;
}

export const NoticesItem = ({
  item,
  isLoggedIn,
  isFavorite,
}: NoticesItemProps) => {
  const { title, imgURL, comment } = item;
  const dispatch = useDispatch<AppDispatch>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const modalWidth = isSmallScreen ? '335px' : '448px';

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handleAddFavorites = (id: string) => {
    if (isLoggedIn) {
      dispatch(addFavoriteNotices(id));
    } else {
      toggleModal();
    }
  };

  const handleRemoveFavorites = (id: string) => {
    if (isLoggedIn) {
      dispatch(removeFavoriteNotices(id));
    } else {
      toggleModal();
    }
  };

  const details = [
    { label: 'Name', value: item.name },
    { label: 'Birthday', value: formattedDate(item.birthday) },
    { label: 'Sex', value: wordFromBigLetter(item.sex) },
    { label: 'Species', value: wordFromBigLetter(item.species) },
    { label: 'Category', value: wordFromBigLetter(item.category) },
  ];

  return (
    <NoticesItemWrapper>
      <ImageWrapper>
        <Image src={imgURL} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <List>
        {details.map((detail, index) => (
          <ListItem key={index}>
            <Label>{detail.label}</Label>
            <Value> {detail.value}</Value>
          </ListItem>
        ))}
      </List>
      <Text>{comment}</Text>
      <ButtonWrapper>
        <Button
          size={ButtonSize.small}
          variant={ButtonVariant.orange}
          type="button"
          onClick={toggleModal}
        >
          Learn more
        </Button>

        <FavoriteHeart
          item={item}
          isFavorite={isFavorite}
          handleAddFavorites={handleAddFavorites}
          handleRemoveFavorites={handleRemoveFavorites}
        />
      </ButtonWrapper>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggleModal} width={modalWidth}>
          {isLoggedIn ? (
            <ModalNotice
              handleModalToggle={toggleModal}
              item={item}
              isFavorite={isFavorite}
              handleAddFavorites={handleAddFavorites}
              handleRemoveFavorites={handleRemoveFavorites}
            />
          ) : (
            <ModalAttention handleModalToggle={toggleModal} />
          )}
        </Modal>
      )}
    </NoticesItemWrapper>
  );
};
