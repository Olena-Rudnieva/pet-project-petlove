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
import { useEffect, useState } from 'react';
import { Modal } from 'components';
import { ModalAttention, ModalNotice } from 'components/modal/components';
import {
  addFavoriteNotices,
  removeFavoriteNotices,
} from '../../../../redux/notices';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';

interface NoticesItemProps {
  item: Notice;
  isLoggedIn: boolean;
  favoritesNotices: Notice[];
}

export const NoticesItem = ({
  item,
  isLoggedIn,
  favoritesNotices,
}: NoticesItemProps) => {
  const { title, imgURL, comment } = item;
  const dispatch = useDispatch<AppDispatch>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(Boolean(false));

  useEffect(() => {
    setIsFavorite(
      Boolean(favoritesNotices?.find(favorite => favorite._id === item._id))
    );
  }, [favoritesNotices, item._id]);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handleAddFavorites = (id: string) => {
    dispatch(addFavoriteNotices(id));
  };

  const handleRemoveFavorites = (id: string) => {
    dispatch(removeFavoriteNotices(id));
  };

  const details = [
    { label: 'Name', value: item.name },
    { label: 'Birthday', value: item.birthday },
    { label: 'Sex', value: item.sex },
    { label: 'Species', value: item.species },
    { label: 'Category', value: item.category },
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
        <Modal isOpen={isModalOpen} onClose={toggleModal} width="466px">
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
